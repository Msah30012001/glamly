const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const Brand = require("../model/BrandModel");

// fetch all records
Router.get("/brand", async (req, res, next) => {
  try {
    const brandData = await Brand.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "brand",
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
    res.status(200).send(brandData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/brand/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const childCategoryData = await Brand.findById(_id);
    if (!childCategoryData) {
      throw new BadRequestError("child category not found");
    }
    res.status(200).send(childCategoryData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/brand/search/:key", async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await Brand.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/brand", async (req, res, next) => {
  try {
    let data = { slug: "" };

    data.slug = req.body.name
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
    data = { ...data, ...req.body };
    const childCategory = new Brand(data);
    const createBrand = await childCategory.save();
    res.status(201).send(createBrand);
  } catch (error) {
    next(error);
  }
});

// update a record
Router.patch("/brand/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateBrand = await Brand.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    if (!updateBrand) {
      throw new BadRequestError("child category not found");
    }
    res.status(201).send(updateBrand);
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/brand/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteBrand = await Brand.findByIdAndDelete(_id);
    if (!deleteBrand) {
      throw new BadRequestError("child category not found");
    }
    res.status(200).send(deleteBrand);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
