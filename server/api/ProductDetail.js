const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const ProductSku = require("../model/ProductSkuModel");
const Product = require("../model/ProductModel");
const ChildCategory = require("../model/ChildCategoryModel");
const SubCategory = require("../model/SubCategoryModel");
// fetch all records
Router.get("/product-detail/:slug", async (req, res, next) => {
  try {
    let slug = req.params.slug;
    const productDetail = await ProductSku.aggregate([
      {
        $lookup: {
          from: "feedbacks",
          localField: "_id",
          foreignField: "product",
          as: "feedback",
        },
      },
      {
        $addFields: {
          avg: {
            $avg: "$feedbacks.rate",
          },
        },
      },
      { $match: { slug: slug } },
    ]);
    res.status(200).send(productDetail);
 } catch (error) {
    next(error);
  }
});

module.exports = Router;
