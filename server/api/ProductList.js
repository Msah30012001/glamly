const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const ProductSku = require("../model/ProductSkuModel");
const Product = require("../model/ProductModel");
const ChildCategory = require("../model/ChildCategoryModel");
const SubCategory = require("../model/SubCategoryModel");
// fetch all records
Router.get("/product-list/:slug*?", async (req, res, next) => {
  try {
    let slug = req.params.slug;
    let s = req.query.s;
        if (slug) {
      const subCategory = await SubCategory.find({ slug: slug });
      const childCategory = await ChildCategory.find({ slug: slug });
      let category = subCategory.length > 0 ? subCategory : childCategory;
      const product = await Product.find({
        $or: [{ subCategory: category }, { childCategory: category }],
      });
      let productData = product.length ? product : null;

      let id = [];
      if (!productData) {
        throw new BadRequestError("product not exist");
      }
      productData.map((item) => {
        id.push(item._id);
      });
      const productSku = await ProductSku.aggregate([
        {
          $lookup: {
            from: "feedbacks",
            localField: "_id",
            foreignField: "product",
            as: "feedbacks",
          },
        },
        {
          $addFields: {
            avg: {
              $avg: "$feedbacks.rate",
            },
          },
        },
        { $match: { $or: [{ product: { $in: id } }] } },
      ]);
      res.status(200).send(productSku);
    } else {
      const productSku = await ProductSku.aggregate([
        {
          $lookup: {
            from: "feedbacks",
            localField: "_id",
            foreignField: "product",
            as: "feedbacks",
          },
        },
        {
          $addFields: {
            avg: {
              $avg: "$feedbacks.rate",
            },
          },
        },
        { $match: { $or: [{ name: { $regex: s, $options: "i" } },{description: {$regex: s, $options: "i"}}] } },
      ]);
      res.status(200).send(productSku);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
