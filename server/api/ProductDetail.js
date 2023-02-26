const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const ProductSku = require("../model/ProductSkuModel");
const Product = require("../model/ProductModel");
const Order = require("../model/OrderModel");
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
            $avg: "$feedback.rate",
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
Router.get("/product-detail/similar/:slug", async (req, res, next) => {
  try {
    let slug = req.params.slug;
    const product = await ProductSku.aggregate([{$match: {slug:slug}}]);
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
            $avg: "$feedback.rate",
          },
        },
      },
      { $match:{$and:[{ product: product[0].product },{slug: {$ne: slug}}]} },
    ]);
    res.status(200).send(productDetail);
  } catch (error) {
    next(error);
  }
});
Router.get("/product-detail/p/trend/", async (req, res, next) => {
  try {
    const monthly = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000); // Calculate the date 7 days ago
    const order = await Order.aggregate([
      { $match: { date: { $gte: monthly } } },
    ]);
    let sku_code = [];

    order.forEach((item) => {
      item.list.forEach((sku) => {
        sku_code.push(sku.sku_code);
      });
    });
    sku_code.filter((item, index) => sku_code.indexOf(item) === index);
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
            $avg: "$feedback.rate",
          },
        },
      },
      {
        $match: {
          sku_code: { $in: [...sku_code] },
        },
      },
    ]);
    res.status(200).send(productDetail);
  } catch (error) {
    next(error);
  }
});
Router.get("/product-detail/p/most-viewed/", async (req, res, next) => {
  try {
  
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
            $avg: "$feedback.rate",
          },
        },
      },
      { $sort: { view: -1 } },
      { $limit: 15 },
    ]);
    res.status(200).send(productDetail);
  } catch (error) {
    next(error);
  }
});
module.exports = Router;
