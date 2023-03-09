const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const ProductSku = require("../model/ProductSkuModel");
const Product = require("../model/ProductModel");
const ChildCategory = require("../model/ChildCategoryModel");
const SubCategory = require("../model/SubCategoryModel");
const Brand = require("../model/BrandModel");

// fetch all records
Router.get("/product-list/:slug*?", async (req, res, next) => {
  try {
    let slug = req.params.slug;
    let s = req.query.s;
    if (slug) {
      if(slug === "all"){
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
        ]);
        res.status(200).send(productSku);
      }else{

        const subCategory = await SubCategory.find({ slug: slug });
        const childCategory = await ChildCategory.find({ slug: slug });
        const brand = await Brand.find({name:slug});
  
        let category = subCategory.length > 0 ? subCategory : childCategory;
        let brandData = brand.length > 0 ?brand:"";
        const product = await Product.find({
          $or: [{ subCategory: category }, { childCategory: category },{brand:brand}],
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
      }

    } else {
       const subCategory = await SubCategory.find({ slug: s });
       const childCategory = await ChildCategory.find({ slug: s });
       const brand = await Brand.find({ name: s });

       let category = subCategory.length > 0 ? subCategory : childCategory;
       let brandData = brand.length > 0 ? brand : "";
       const product = await Product.find({
         $or: [
           { subCategory: category },
           { childCategory: category },
           { brand: brand },
         ],
       });
       let productData = product.length ? product : null;

       let id = [];
       if (productData) {
         productData.map((item) => {
           id.push(item._id);
         });
       }
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
        {
          $match: {
            $or: [
              { product: { $in: id } },
              { name: { $regex: s, $options: "i" } },
              { description: { $regex: s, $options: "i" } },
            ],
          },
        },
      ]);
      res.status(200).send(productSku);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
