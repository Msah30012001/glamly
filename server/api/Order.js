const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const Order = require("../model/OrderModel");
const Cart = require("../model/CartModel")
const Payment = require("../model/PaymentModel")
const authenticate = require("../middleware/authenticate")
const Razorpay = require('razorpay')
const config = require("../config/config")

// fetch all records
Router.get("/order",authenticate, async (req, res, next) => {
  try {

    // const orderData = await Order.find();
    if(req.userId){
      const orderData = await Order.aggregate([
        {
          $lookup: {
            from: "payments",
            localField: "payment_id",
            foreignField: "_id",
            as: "payment",
          },
        },
        { $match: { user_id: req.userId } },
        
      ]);
      res.status(200).send(orderData);
    }else{
      const orderData = await Order.aggregate([
        {
          $lookup: {
            from: "payments",
            localField: "payment_id",
            foreignField: "_id",
            as: "payment",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "user",
          },
        },
      ]);
      res.status(200).send(orderData);
    }

  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/order/:id",authenticate, async (req, res, next) => {
  try {
    const _id = req.params.id;
    const orderData = await Order.findById(_id);
    if (!orderData) {
      throw new BadRequestError("order not found");
    }
    res.status(200).json(orderData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/order/search/:key",authenticate, async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await Order.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/order",authenticate, async (req, res, next) => {
  try {
    let data = {}
    let list =[]
    let totalAmount = 0;
    let payment_id = (new Date().getTime().toString(18))
    let order_id = (new Date().getTime())
    let user_id = req.userId
    const cartData = await Cart.aggregate([
      {
        $lookup: {
          from: "productskus",
          localField: "product",
          foreignField: "_id",
          as: "product",
        },
      },
      { $match: { user: req.userId } },
    ]);

    cartData.forEach(item =>{
        list.push({
          product: item.product[0].name,
          sku_code: item.product[0].sku_code,
          qty: item.qty,
          price: item.product[0].price,
          discount: item.product[0].discount,
        });
    });

    list.map((item)=>{
      totalAmount = totalAmount + (item.price - item.discount) * item.qty
    })
    
    const payment = new Payment({amount:totalAmount,method:req.body.method,payment_id:payment_id});
    const createPayment = await payment.save();

    data = {list:list,order_id:order_id,user_id:user_id,payment_id:createPayment._id}

    const order = new Order(data);
    const createOrder = await order.save();

    

    // var instance = new Razorpay({
    //   key_id: config.RAZORPAY_API_KEY,
    //   key_secret: config.RAZORPAY_API_SECRET,
    // });

    // instance.orders.create({
    //   amount: 50000,
    //   currency: "INR",
    //   receipt: order_id,
    // });

    res.status(201).send(createOrder);

  } catch (error) {
    next(error);
  }
});

// update a record
Router.patch("/order/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateOrder = await Order.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    if (!updateOrder) {
      throw new BadRequestError("order not found");
    }
    res.status(201).send(updateOrder);
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/order/:id",authenticate, async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteOrder = await Order.findByIdAndDelete(_id);
    if (!deleteOrder) {
      throw new BadRequestError("order not found");
    }
    res.status(200).send(deleteOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
