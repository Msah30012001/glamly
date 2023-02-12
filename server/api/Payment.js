const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const Payment = require("../model/PaymentModel");
const ProductSku = require("../model/ProductSkuModel")
const Order = require("../model/OrderModel")
const Cart = require('../model/CartModel')
const PaytmChecksum = require("../config/PaytmChecksum")
const authenticate = require("../middleware/authenticate")

// fetch all records
Router.get("/payment", async (req, res, next) => {
  try {
    const paymentData = await Payment.find();
    res.status(200).send(paymentData);
  } catch (error) {
    next(error);
  }
});


Router.post("/payment/paytm",async(req,res,next)=>{
  /* import checksum generation utility */
  var PaytmChecksum = require("./PaytmChecksum");

  var paytmParams = {};

  /* initialize an array */
  paytmParams["MID"] = "YOUR_MID_HERE";
  paytmParams["ORDERID"] = "YOUR_ORDER_ID_HERE";

  /**
   * Generate checksum by parameters we have
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
   */
  var paytmChecksum = PaytmChecksum.generateSignature(
    paytmParams,
    "YOUR_MERCHANT_KEY"
  );
  paytmChecksum
    .then(function (checksum) {
      console.log("generateSignature Returns: " + checksum);
    })
    .catch(function (error) {
      console.log(error);
    });
})

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
    const order_id = req.body.order
    console.log(_id)
    console.log(order_id)
    const updateOrder = await Order.findByIdAndUpdate(order_id,{status:"SUCCESS"},{new: true});

    if(!updateOrder){
      throw new BadRequestError("order not found")
    }

    let list = [];
    list = updateOrder.list
    list.map(async (item)=>{
      let productSku = await ProductSku.updateOne({ sku_code:item.sku_code },{ $inc: { qty: -(item.qty) } })
    })

    let cart = await Cart.deleteMany({user: req.userId})


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
