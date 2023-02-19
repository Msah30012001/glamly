const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const Payment = require("../model/PaymentModel");
const ProductSku = require("../model/ProductSkuModel");
const Order = require("../model/OrderModel");
const Cart = require("../model/CartModel");
const User = require("../model/UserModel");
const PaytmChecksum = require("../config/PaytmChecksum");
const authenticate = require("../middleware/authenticate");
const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const https = require("https");
const config = require("../config/config");

//const firebase = require("firebase");
//const db = require("./firebase");

Router.post("/paytm-callback", async (req, res, next) => {
  try {
    paytmChecksum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    var isVerifySignature = PaytmChecksum.verifySignature(
      req.body,
      config.PAYTM_MERCHANT_KEY,
      paytmChecksum
    );
    if (isVerifySignature) {
      var paytmParams = {};
      paytmParams["MID"] = req.body.MID;
      paytmParams["ORDERID"] = req.body.ORDERID;

      /*
       * Generate checksum by parameters we have
       * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
       */
      PaytmChecksum.generateSignature(
        paytmParams,
        config.PAYTM_MERCHANT_KEY
      ).then(function (checksum) {
        paytmParams["CHECKSUMHASH"] = checksum;

        var post_data = JSON.stringify(paytmParams);

        var options = {
          /* for Staging */
          hostname: "securegw-stage.paytm.in",

          /* for Production */
          // hostname: 'securegw.paytm.in',

          port: 443,
          path: "/order/status",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
          data: post_data,
        };

        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", async function () {
            let result = JSON.parse(response);
            if (result.STATUS === "TXN_SUCCESS") {
              //store in db
              const orderDetail = await Order.findOne({order_id:result.ORDERID});
              const updateOrder = await Order.findByIdAndUpdate(orderDetail._id,{$set: {status: "SUCCESS",},},{ new: true });
              if (!updateOrder) {
                throw new BadRequestError("order not found");
              }

              let list = [];
              list = updateOrder.list;
              list.map(async (item) => {
                let productSku = await ProductSku.updateOne(
                  { sku_code: item.sku_code },
                  { $inc: { qty: -item.qty } }
                );
              });

              let cart = await Cart.deleteMany({ user: updateOrder.user_id });
              console.log(cart);
              const updatePayment = await Payment.findByIdAndUpdate(
                updateOrder.payment_id,
                { status: "SUCCESS", txn_id: result.TXNID },
                { new: true }
              );
              console.log(updatePayment);
              if (!updatePayment) {
                throw new BadRequestError("payment  not found");
              }
            } else if (result.STATUS === "TXN_FAILED") {
              //store in db

              const updateOrder = await Order.update(
                { order_id: result.ORDERID },
                {
                  $set: {
                    status: "FAILED",
                    txn_id: result.TXNID,
                  },
                }
              );

              if (!updateOrder) {
                throw new BadRequestError("order not found");
              }

              let cart = await Cart.deleteMany({ user: updateOrder.user_id });

              const updatePayment = await Payment.findByIdAndUpdate(
                updateOrder.payment_id,
                { status: "FAILED" },
                { new: true }
              );
              if (!updatePayment) {
                throw new BadRequestError("payment  not found");
              }
            }

            res.redirect(`http://localhost:3000/status/${result.ORDERID}`);
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    } else {
      throw new ForbiddenError("Checksum Mismatched");
      console.log("Checksum Mismatched");
    }
  } catch (error) {
    next(error);
  }
});

Router.post("/payment/paytm", authenticate, async (req, res, next) => {
  const userId = req.userId;

  const user = await User.findById(userId);

  const email = user.email;
  const phone = user.phone;
  const cust_id = "CUST" + user._id;

  const orderId = req.body.order;

  const order = await Order.findById(orderId);

  const order_id = order.order_id;

  let totalAmount = 0;

  let list = [];
  list = order.list;
  list.map((item) => {
    totalAmount += item.qty * (item.price - item.discount);
  });

  /* import checksum generation utility */

  var params = {};

  /* initialize an array */
  (params["MID"] = config.PAYTM_MID),
    (params["WEBSITE"] = config.PAYTM_WEBSITE),
    (params["CHANNEL_ID"] = config.PAYTM_CHANNEL_ID),
    (params["INDUSTRY_TYPE_ID"] = config.PAYTM_INDUSTRY_TYPE_ID),
    (params["ORDER_ID"] = order_id),
    (params["CUST_ID"] = cust_id),
    (params["TXN_AMOUNT"] = totalAmount.toString()),
    (params["CALLBACK_URL"] = "http://localhost:5000/api/paytm-callback"),
    (params["EMAIL"] = email),
    (params["MOBILE_NO"] = phone.toString());

  /**
   * Generate checksum by parameters we have
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
   */
  var paytmChecksum = PaytmChecksum.generateSignature(
    params,
    config.PAYTM_MERCHANT_KEY
  );
  paytmChecksum
    .then(function (checksum) {
      let paytmParams = {
        ...params,
        CHECKSUMHASH: checksum,
      };
      res.json(paytmParams);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// fetch all records
Router.get("/payment", async (req, res, next) => {
  try {
    const paymentData = await Payment.find();
    res.status(200).send(paymentData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/payment/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const paymentData = await Payment.findById(_id);
    if (!paymentData) {
      throw new BadRequestError("payment  not found");
    }
    res.status(200).json(paymentData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/payment/search/:key", async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await Payment.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

// update a record
Router.patch("/payment/:id", authenticate, async (req, res, next) => {
  try {
    const _id = req.params.id;
    const order_id = req.body.order;

    const updateOrder = await Order.findByIdAndUpdate(
      order_id,
      { status: "SUCCESS" },
      { new: true }
    );

    if (!updateOrder) {
      throw new BadRequestError("order not found");
    }

    let list = [];
    list = updateOrder.list;
    list.map(async (item) => {
      let productSku = await ProductSku.updateOne(
        { sku_code: item.sku_code },
        { $inc: { qty: -item.qty } }
      );
    });

    let cart = await Cart.deleteMany({ user: req.userId });

    res.cookie("orderStatus", true, {
      expires: new Date(Date.now() + 600000),
      httpOnly: true,
    });
    // const updatePayment = await Payment.findByIdAndUpdate(_id,{status:"PENDING"},{ new: true });
    // if (!updatePayment) {
    //   throw new BadRequestError("payment  not found");
    // }

    res.status(201).send(updateOrder);
  } catch (error) {
    next(error);
  }
});

// Router.patch("/payment/paytm/:id", authenticate, async (req, res, next) => {
//   try {
//     const _id = req.params.id;
//     const order_id = req.body.order;
//     console.log(_id);
//     console.log(order_id);
//     const updateOrder = await Order.findByIdAndUpdate(
//       order_id,
//       { status: "SUCCESS" },
//       { new: true }
//     );

//     if (!updateOrder) {
//       throw new BadRequestError("order not found");
//     }

//     let list = [];
//     list = updateOrder.list;
//     list.map(async (item) => {
//       let productSku = await ProductSku.updateOne(
//         { sku_code: item.sku_code },
//         { $inc: { qty: -item.qty } }
//       );
//     });

//     let cart = await Cart.deleteMany({ user: req.userId });

//     res.cookie("orderStatus", true, {
//       expires: new Date(Date.now() + 600000),
//       httpOnly: true,
//     });
//     // const updatePayment = await Payment.findByIdAndUpdate(_id,{status:"PENDING"},{ new: true });
//     // if (!updatePayment) {
//     //   throw new BadRequestError("payment  not found");
//     // }

//     res.status(201).send(updateOrder);
//   } catch (error) {
//     next(error);
//   }
// });

//delete a record
// Router.delete("/payment/:id", async (req, res, next) => {
//   try {
//     const _id = req.params.id;
//     const deletePayment = await Payment.findByIdAndDelete(_id);
//     if (!deletePayment) {
//       throw new BadRequestError("payment  not found");
//     }
//     res.status(200).send(deletePayment);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = Router;
