const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const Cart = require("../model/CartModel");
const authenticate = require("../middleware/authenticate");

// fetch all records
Router.get("/cart",authenticate, async (req, res, next) => {
  try {

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
    res.status(200).send(cartData);

  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/cart/:id",authenticate, async (req, res, next) => {
  try {
    const _id = req.params.id;
    const cartData = await Cart.findById(_id);
    if (!cartData) {
      throw new BadRequestError("cart not found");
    }
    res.status(200).json(cartData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/cart/search/:key",authenticate, async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await Cart.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/cart",authenticate, async (req, res, next) => {
  try {
    let data = {}
    data = {user:req.userId,...req.body}
    const isProductExist = await Cart.find({product:req.body.product})
    if(isProductExist.length > 0){
      throw new BadRequestError("product is already exist in your cart")
    }
    const cart = new Cart(data);
    const createCart = await cart.save();

    res.status(201).send(cart);
  } catch (error) {
    next(error);
  }
});

// update a record
Router.patch("/cart/:id",authenticate, async (req, res, next) => {
  try {
    const _id = req.params.id;
    console.log(req.body)
    const updateCart = await Cart.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!updateCart) {
      throw new BadRequestError("cart not found");
    }
    res.status(201).send(updateCart);
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/cart/:id",authenticate, async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteCart = await Cart.findByIdAndDelete(_id);
    if (!deleteCart) {
      throw new BadRequestError("cart not found");
    }
    res.status(200).send(deleteCart);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
