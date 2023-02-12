const Router = require("express").Router();
const { BadRequestError, UnAuthorizedError } = require("../Errors/error");
const Wishlist = require("../model/WishlistModel");
const authenticate = require("../middleware/authenticate")

// fetch all records
Router.get("/wishlist",authenticate, async (req, res, next) => {
  try {
    const wishlistData = await Wishlist.aggregate([
      {
        $lookup: {
          from: "productskus",
          localField: "product",
          foreignField: "_id",
          as: "product",
        },
      },
      { $match: { user: req.userId} },
    ]);
    // .find({ user: req.userId });

    res.status(200).send(wishlistData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/wishlist/:id",authenticate, async (req, res, next) => {
  try {
    const _id = req.params.id;
    const wishlistData = await Wishlist.findById(_id);
    if (!wishlistData) {
      throw new BadRequestError("wishlist not found");
    }
    res.status(200).json(wishlistData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/wishlist/search/:key",authenticate, async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await Wishlist.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/wishlist",authenticate, async (req, res, next) => {
  try {
    if(!req.userId){
      throw new UnAuthorizedError("Please Login !!! cookie not set");
    }
    let data = {}
    const isProductExist = await Wishlist.find({user:req.userId,product:req.body.product})
    if(isProductExist.length > 0){
      throw new BadRequestError("product is already exist in wishlist")
    }
    data = {user:req.userId,...req.body}
    const wishlist = new Wishlist(data);
    const createWishlist = await wishlist.save();
    res.status(201).send(createWishlist);
  } catch (error) {
    next(error);
  }
});

// // update a record
// Router.patch("/wishlist/:id",authenticate, async (req, res, next) => {
//   try {
//     const _id = req.params.id;
//     const updateWishlist = await Wishlist.findByIdAndUpdate(
//       _id,
//       req.body,
//       { new: true }
//     );
//     if (!updateWishlist) {
//       throw new BadRequestError("wishlist not found");
//     }
//     res.status(201).send(updateWishlist);
//   } catch (error) {
//     next(error);
//   }
// });

//delete a record
Router.delete("/wishlist/:id",authenticate, async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteWishlist = await Wishlist.findByIdAndDelete(_id);
    if (!deleteWishlist) {
      throw new BadRequestError("wishlist not found");
    }
    res.status(200).send(deleteWishlist);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
