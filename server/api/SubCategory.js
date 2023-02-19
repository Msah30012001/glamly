const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const SubCategory = require("../model/SubCategoryModel");

// fetch all records
Router.get("/sub-category", async (req, res, next) => {
  try {
    const subCategoriesData = await SubCategory.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "subCategory",
          as: "product",
        },
      },
      {
        $lookup: {
          from: "productskus",
          localField: "product._id",
          foreignField: "product",
          as: "productskus",
        },
      },
    ]);

    res.status(200).send(subCategoriesData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/sub-category/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const subCategoryData = await SubCategory.findById(_id);
    if (!subCategoryData) {
      throw new BadRequestError("sub category not found");
    }
    res.status(200).json(subCategoryData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/sub-category/search/:key", async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await SubCategory.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/sub-category", async (req, res, next) => {
  try {
    let data = { slug: "" };

    data.slug = req.body.name
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
    data = { ...data, ...req.body };
    const subCategory = new SubCategory(data);
    const createSubCategory = await subCategory.save();
    res.status(201).send(createSubCategory);
  } catch (error) {
    next(error);
  }
});

// update a record
Router.patch("/sub-category/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateSubCategory = await SubCategory.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    if (!updateSubCategory) {
      throw new BadRequestError("sub category not found");
    }
    res.status(201).send(updateSubCategory);
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/sub-category/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteSubCategory = await SubCategory.findByIdAndDelete(_id);
    if (!deleteSubCategory) {
      throw new BadRequestError("sub category not found");
    }
    res.status(200).send(deleteSubCategory);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
