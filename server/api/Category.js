const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const MainCategory = require("../model/MainCategoryModel");

// fetch all records
Router.get("/main-category/all", async (req, res, next) => {
  try {
    const categoryData = await MainCategory.aggregate([
        {
            $lookup:{
                from: "subcategories",
                localField:"subCategory",
                foreignField:"_id",
                as:"sub_category"
            },
            $lookup:{
                from:"childcategories",
                localField:"sub_category.childCategory",
                foreignField:"_id",
                as:"child_category"
            }
        }
    ]);
    res.status(200).send(categoryData);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
