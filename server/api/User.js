const Router = require("express").Router();
const { BadRequestError, UnAuthorizedError } = require("../Errors/error");
const User = require("../model/UserModel");
const Admin = require("../model/AdminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authenticate = require("../middleware/authenticate");

//authentication
Router.post("/user/auth", async (req, res, next) => {
  try {
    let token;
    let { email, password } = req.body;
    // password = await bcrypt.hash(password,12)
    const userAuth = await User.findOne({ email: email, password: password });
    if (!userAuth) {
      throw new UnAuthorizedError("invalid authenticate credentials");
    }
    token = await userAuth.generateAuthToken();
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });
    res.status(200).send({ success: "user login successfully" });
  } catch (error) {
    next(error);
  }
});
Router.get("/user/destroy-auth",authenticate, async (req, res, next) => {
  try {
       const user = await User.findOne({ _id: req.userId });
       user.tokens = user.tokens.filter((token) => {
         return token.token !== req.token;
       });

       await user.save();
    res.clearCookie('jwt',{httpOnly:true})
    res.status(200).send({ success: "user logout successfully" });
  } catch (error) {
    next(error);
  }
});

// fetch all records
Router.get("/user", async (req, res, next) => {
  try {
    const userData = await User.find();
    res.status(200).send(userData);
  } catch (error) {
    next(error);
  }
});

//fetch single record
Router.get("/user/:id?", authenticate, async (req, res, next) => {
  try {
    const userId = req.userId;
    const _id = req.params.id;
    if (userId) {
      const userData = await User.findById(userId);
      res.status(200).json(userData);
    } else {
      const userData = await User.findById(_id);
      res.status(200).json(userData);
    }
  } catch (error) {
    next(error);
  }
});

// search for record
Router.get("/user/search/:key", async (req, res, next) => {});

//create a record
Router.post("/user", async (req, res, next) => {
  try {
    const user = new User(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (error) {
    next(error);
  }
});

// Router.post("/user/admin",async(req,res,next)=>{
//     try{
//         const admin = new Admin(req.body);
//         const createAdmin = await admin.save();
//         res.status(201).send(createAdmin)

//     }catch(error){
//         next(error)
//     }
// })

// update a record
Router.patch("/user/:id?", authenticate, async (req, res, next) => {
  try {
    const _id = req.params.id;
    const userId = req.userId;

    if (userId) {
      const updateUser = await User.findByIdAndUpdate(userId,req.body, {
        new: true,
      });
      if (!updateUser) {
        throw new BadRequestError("user not found");
      }
      res.status(201).send(updateUser);
    } else {
      const updateUser = await User.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      if (!updateUser) {
        throw new BadRequestError("user not found");
      }
      res.status(201).send(updateUser);
    }
  } catch (error) {
    next(error);
  }
});

//delete a record
Router.delete("/user/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(_id);
    if (!deleteUser) {
      throw new BadRequestError("user not found");
    }
    res.status(200).send(deleteUser);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
