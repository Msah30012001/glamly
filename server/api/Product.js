const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const Product = require("../model/ProductModel");

// fetch all records
Router.get("/product", async (req, res, next) => {
  try {
    const productData = await Product.aggregate([
      {
        $lookup: {
          from: "maincategories",
          localField: "mainCategory",
          foreignField: "_id",
          as: "main_category",
        },
      },
     
      {
        $lookup: {
          from: "subcategories",
          localField: "subCategory",
          foreignField: "_id",
          as: "sub_category",
        },
      },
      {
        $lookup: {
          from: "childcategories",
          localField: "childCategory",
          foreignField: "_id",
          as: "child_category",
        },
      },
      {
        $lookup: {
          from: "producttypes",
          localField: "productType",
          foreignField: "_id",
          as: "product_type",
        },
      },
    ]);
    res.status(200).send(productData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/product/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const productData = await Product.findById(_id);
    if (!productData) {
      throw new BadRequestError("product  not found");
    }
    res.status(200).json(productData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/product/search/:key", async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await Product.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/product", async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const createProduct = await product.save();
    res.status(201).send(createProduct);
  } catch (error) {
    next(error);
  }
});

// update a record
Router.patch("/product/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateProduct = await Product.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    if (!updateProduct) {
      throw new BadRequestError("product  not found");
    }
    res.status(201).send(updateProduct);
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/product/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteProduct = await Product.findByIdAndDelete(_id);
    if (!deleteProduct) {
      throw new BadRequestError("product  not found");
    }
    res.status(200).send(deleteProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
