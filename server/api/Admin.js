const Router = require("express").Router();
const { BadRequestError, UnAuthorizedError } = require("../Errors/error");
const Admin = require("../model/AdminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authenticate = require("../middleware/authenticate");

//authentication
Router.post("/admin/auth", async (req, res, next) => {
  try {
    let token;
    let { email, password } = req.body;
    // password = await bcrypt.hash(password,12)
    const adminAuth = await Admin.findOne({ email: email, password: password });
    if (!adminAuth) {
      throw new UnAuthorizedError("invalid authenticate credentials");
    }
    token = await adminAuth.generateAuthToken();
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });
    res.status(200).send({ success: "admin login successfully" });

    // let token;
    // const { email, password } = req.body;
    // password = bcrypt.hash(password, 12);
    // const adminAuth = await Admin.findOne({ email, password });
    // if (!adminAuth) {
    //   throw new UnAuthorizedError("invalid authenticate credentials");
    // }
    // token = await adminAuth.generateAuthToken();
    // res.cookie("jwt", token, {
    //   expires: new Date(Date.now() + 25892000000),
    //   httpOnly: true,
    // });
    // res.status(200).send({ success: "admin login successfully" });
  } catch (error) {
    next(error);
  }
});
Router.get("/admin/destroy-auth", authenticate, async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ _id: req.adminId });
    admin.tokens = admin.tokens.filter((token) => {
      return token.token !== req.token;
    });

    await admin.save();
    res.clearCookie("jwt", { httpOnly: true });
    res.status(200).send({ success: "admin logout successfully" });
  } catch (error) {
    next(error);
  }
});
// fetch all records
Router.get("/admin", async (req, res, next) => {
  try {
    const adminData = await Admin.find();
    res.status(200).send(adminData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/admin/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const adminData = await Admin.findById(_id);
    res.status(200).json(adminData);
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/admin/search/:key", async (req, res, next) => {});

//create a record
Router.post("/admin", async (req, res, next) => {
  try {
    const admin = new Admin(req.body);
    const createAdmin = await admin.save();
    res.status(201).send(createAdmin);
  } catch (error) {
    next(error);
  }
});

// Router.post("/admin/admin",async(req,res,next)=>{
//     try{
//         const admin = new Admin(req.body);
//         const createAdmin = await admin.save();
//         res.status(201).send(createAdmin)

//     }catch(error){
//         next(error)
//     }
// })

// update a record
Router.patch("/admin/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateAdmin = await Admin.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!updateAdmin) {
      throw new BadRequestError("admin not found");
    }
    res.status(201).send(updateAdmin);
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/admin/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteAdmin = await Admin.findByIdAndDelete(_id);
    if (!deleteAdmin) {
      throw new BadRequestError("admin not found");
    }
    res.status(200).send(deleteAdmin);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
