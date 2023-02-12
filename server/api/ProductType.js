const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const ProductType = require("../model/ProductTypeModel");

// fetch all records
Router.get("/product-type", async (req, res, next) => {
  try {
    const productTypeData = await ProductType.find();
    res.status(200).send(productTypeData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/product-type/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const productTypeData = await ProductType.find({
      $or: [{ _id:_id }, {product: _id }],
    });
    res.status(200).json(productTypeData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/product-type/search/:key", async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await ProductType.find({
      $or: [
        {
          name: { $regex: s, $options: "i" },
        },
        {
          attribute: { $regex: s, $options: "i" },
        },
      ],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/product-type", async (req, res, next) => {
  try {
    const productType = new ProductType(req.body);
    const createProductType = await productType.save();
    res.status(201).send(createProductType);
  } catch (error) {
    next(error);
  }
});

// update a record
Router.patch("/product-type/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateProductType = await ProductType.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    if (!updateProductType) {
      throw new BadRequestError("product type not found");
    }
    res.status(201).send(updateProductType);
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/product-type/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteProductType = await ProductType.findByIdAndDelete(_id);
    if (!deleteProductType) {
      throw new BadRequestError("product type not found");
    }
    res.status(200).send(deleteProductType);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
