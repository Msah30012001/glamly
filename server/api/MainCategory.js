const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const MainCategory = require("../model/MainCategoryModel");

// fetch all records
Router.get("/main-category", async (req, res, next) => {
  try {
    const mainCategoriesData = await MainCategory.find();
    res.status(200).send(mainCategoriesData);
  } catch (error) {
    next(error);
  }
});

Router.get("/main-category/all", async (req, res, next) => {
  try {
    const categoryData = await MainCategory.aggregate([
      {
        $lookup: {
          from: "subcategories",
          localField: "_id",
          foreignField: "mainCategory",
          as: "sub_category",
        },
      },
      {
        $lookup: {
          from: "childcategories",
          localField: "sub_category._id",
          foreignField: "subCategory",
          as: "child_category",
        },
      },
    ]);
    res.status(200).send(categoryData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/main-category/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const mainCategoryData = await MainCategory.findById(_id);
    if (!mainCategoryData) {
      throw new BadRequestError("main category not found");
    }
    res.status(200).json(mainCategoryData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/main-category/search/:key", async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await MainCategory.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/main-category", async (req, res, next) => {
  try {
    let data = { slug: "" };

    data.slug = req.body.name
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
    data = { ...data, ...req.body };

    const mainCategory = new MainCategory(data);
    const createMainCategory = await mainCategory.save();
    res.status(201).send(createMainCategory);
  } catch (error) {
    next(error);
  }
});

// update a record
Router.patch("/main-category/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateMainCategory = await MainCategory.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    if (!updateMainCategory) {
      throw new BadRequestError("main category not found");
    }
    res.status(201).send(updateMainCategory);
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/main-category/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteMainCategory = await MainCategory.findByIdAndDelete(_id);
    if (!deleteMainCategory) {
      throw new BadRequestError("main category not found");
    }
    res.status(200).send(deleteMainCategory);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
