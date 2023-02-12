const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const ChildCategory = require("../model/ChildCategoryModel");

// fetch all records
Router.get("/child-category", async (req, res, next) => {
  try {
    const childCategoriesData = await ChildCategory.find();
    res.status(200).send(childCategoriesData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/child-category/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const childCategoryData = await ChildCategory.findById(_id);
    if (!childCategoryData) {
      throw new BadRequestError("child category not found");
    }
    res.status(200).send(childCategoryData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/child-category/search/:key", async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await ChildCategory.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/child-category", async (req, res, next) => {
  try {
    let data = { slug: "" };

    data.slug = req.body.name
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
    data = { ...data, ...req.body };
    const childCategory = new ChildCategory(data);
    const createChildCategory = await childCategory.save();
    res.status(201).send(createChildCategory);
  } catch (error) {
    next(error);
  }
});

// update a record
Router.patch("/child-category/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateChildCategory = await ChildCategory.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    if (!updateChildCategory) {
      throw new BadRequestError("child category not found");
    }
    res.status(201).send(updateChildCategory);
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/child-category/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteChildCategory = await ChildCategory.findByIdAndDelete(_id);
    if (!deleteChildCategory) {
      throw new BadRequestError("child category not found");
    }
    res.status(200).send(deleteChildCategory);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
