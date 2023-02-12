const Router = require("express").Router();
const { BadRequestError } = require("../Errors/error");
const ProductSku = require("../model/ProductSkuModel");
const multer = require("multer");
const multerConf = require("../config/multer");
const upload = multer(multerConf);
const fs = require("fs");
const path = require("path");

// fetch all records
Router.get("/product-sku", async (req, res, next) => {
  try {
    const productSkuData = await ProductSku.find();
    res.status(200).send(productSkuData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/product-sku/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const productSkuData = await ProductSku.findById(_id);
    if (!productSkuData) {
      throw new BadRequestError("product sku not found");
    }
    res.status(200).json(productSkuData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/product-sku/search/:key", async (req, res, next) => {
  try {
    const s = req.params.key;
    const data = await ProductSku.find({
      $or: [{ name: { $regex: s, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//create a record
Router.post("/product-sku",  upload.fields([{ name: "thumbnail", maxCount: 1 },{ name: "thumbnail_hover", maxCount: 1 },{ name: "image", maxCount: 5 }]), async (req, res, next) => {
    let data = {
      thumbnail: "",
      thumbnail_hover: "",
      image: [],
    };
    try {
       let d = { slug: "" };

       d.slug = req.body.name.toString().toLowerCase()
         .replace(/\s+/g, "-")
         .replace(/[^\w-]+/g, "")
         .replace(/--+/g, "-")
         .replace(/^-+/, "")
         .replace(/-+$/, "");
      let obj = {};
      data = { ...data,slug:d.slug, ...req.body , specification:JSON.parse(req.body.specification) };
      if (req.files.thumbnail.length > 0) {
        data.thumbnail = req.files.thumbnail[0].filename;
      }
      if (req.files.thumbnail_hover.length > 0) {
        data.thumbnail_hover = req.files.thumbnail_hover[0].filename;
      }
      if (req.files.image.length > 0) {
        for (let i = 0; i < req.files.image.length; i++) {
          data.image.push(req.files.image[i].filename);
        }
      }
      const productSku = new ProductSku(data);
      const createProductSku = await productSku.save()
      res.status(201).send(createProductSku);
    } catch (error) {
      fs.unlink(
        `${path.resolve("./public/assets/upload")}/${data.thumbnail}`,
        (error) => {
          console.log(error);
        }
      );
      fs.unlink(
        `${path.resolve("./public/assets/upload")}/${data.thumbnail_hover}`,
        (error) => {
          console.log(error);
        }
      );
      data.image.map((item) => {
        fs.unlink(
          `${path.resolve("./public/assets/upload")}/${item}`,
          (error) => {
            console.log(error);
          }
        );
      });
      next(error);
    }
  }
);

// update a record
Router.patch("/product-sku/:id",  upload.fields([{ name: "thumbnail", maxCount: 1 },{ name: "thumbnail_hover", maxCount: 1 },{ name: "image", maxCount: 5 }]), async (req, res, next) => {
   let data = {
     thumbnail: "",
     thumbnail_hover: "",
     image: [],
   };
  try {
    const _id = req.params.id;

     let d = { slug: "" };

     d.slug = req.body.name
       .toString()
       .toLowerCase()
       .replace(/\s+/g, "-")
       .replace(/[^\w-]+/g, "")
       .replace(/--+/g, "-")
       .replace(/^-+/, "")
       .replace(/-+$/, "");
    
    data = {
      ...data,
      slug: d.slug,
      ...req.body,
      specification: JSON.parse(req.body.specification),
    };
    if (req.files.thumbnail.length > 0) {
      data.thumbnail = req.files.thumbnail[0].filename;
    }
    if (req.files.thumbnail_hover.length > 0) {
      data.thumbnail_hover = req.files.thumbnail_hover[0].filename;
    }
    if (req.files.image.length > 0) {
      for (let i = 0; i < req.files.image.length; i++) {
        data.image.push(req.files.image[i].filename);
      }
    }

    const productSkuData = await ProductSku.findById(_id);
    if (!productSkuData) {
      throw new BadRequestError("product sku not found");
    }

     if (req.files.thumbnail.length > 0) {
          fs.unlink(
          `${path.resolve("./public/assets/upload")}/${productSkuData.thumbnail}`,
          (error) => {
            console.log(error);
          }
        );
     }
     if (req.files.thumbnail_hover.length > 0) {
        fs.unlink(
          `${path.resolve("./public/assets/upload")}/${
            productSkuData.thumbnail_hover
          }`,
          (error) => {
            console.log(error);
          }
        );
     }
     if (req.files.image.length > 0) {
        productSkuData.image.map((item) => {
          fs.unlink(
            `${path.resolve("./public/assets/upload")}/${item}`,
            (error) => {
              console.log(error);
            }
          );
        });
     }

    const updateProductSku = await ProductSku.findByIdAndUpdate(_id, data, {
      new: true,
    });
    if (!updateProductSku) {
      throw new BadRequestError("product sku not found");
    }
    res.set("Access-Control-Allow-Origin", "*");
    res.status(201).send(updateProductSku);
  } catch (error) {
    fs.unlink(
      `${path.resolve("./public/assets/upload")}/${data.thumbnail}`,
      (error) => {
        console.log(error);
      }
    );
    fs.unlink(
      `${path.resolve("./public/assets/upload")}/${data.thumbnail_hover}`,
      (error) => {
        console.log(error);
      }
    );
    data.image.map((item) => {
      fs.unlink(
        `${path.resolve("./public/assets/upload")}/${item}`,
        (error) => {
          console.log(error);
        }
      );
    });
    next(error);
  }
});

//delete a record
Router.delete("/product-sku/:id", async (req, res, next) => {
  let data = {
    thumbnail: "",
    thumbnail_hover: "",
    image: [],
  };
  try {
    const _id = req.params.id;
    const productSkuData = await ProductSku.findById(_id);
    if (!productSkuData) {
      throw new BadRequestError("product sku not found");
    }
    data = { ...data, thumbnail: productSkuData.thumbnail,thumbnail_hover: productSkuData.thumbnail_hover, image:productSkuData.image };
    if (data.thumbnail != "") {
       fs.unlink(
         `${path.resolve("./public/assets/upload")}/${data.thumbnail}`,
         (error) => {
           console.log(error);
         }
       );
    }
    if (data.thumbnail_hover != "") {
      fs.unlink(
        `${path.resolve("./public/assets/upload")}/${data.thumbnail_hover}`,
        (error) => {
          console.log(error);
        }
      );
    }
    if (data.image.length > 0) {
      data.image.map((item) => {
        fs.unlink(
          `${path.resolve("./public/assets/upload")}/${item}`,
          (error) => {
            console.log(error);
          }
        );
      });
    }
    const deleteProductSku = await ProductSku.findByIdAndDelete(_id);
    if (!deleteProductSku) {
      throw new BadRequestError("product sku not found");
    }
    res.status(200).send(deleteProductSku);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
