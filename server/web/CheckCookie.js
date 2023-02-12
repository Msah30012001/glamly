const Router = require("express").Router();
const { BadRequestError,UnAuthorizedError } = require("../Errors/error");
const authenticate = require("../middleware/authenticate");

Router.get("/redirect-account", authenticate, async (req, res, next) => {
  try {
    if (req.type != "user") {
        throw new UnAuthorizedError("Please login !!! cookie not set");
    }
    res.status(200).send()
  } catch (error) {
    next(error);
  }
});
Router.get("/redirect-login", authenticate, async (req, res, next) => {
  try {
    if (req.type != "user") {
      throw new UnAuthorizedError("Please login !!! cookie not set");
    }
    res.status(200).send("set");
  } catch (error) {
    next(error);
  }
});
Router.get("/redirect-admin-account", authenticate, async (req, res, next) => {
  try {
    if (req.type != "admin") {
      throw new UnAuthorizedError("Please login !!! cookie not set");
    }
    res.status(200).send();
  } catch (error) {
    next(error);
  }
});
Router.get("/redirect-admin-login", authenticate, async (req, res, next) => {
  try {
    if (req.type != "admin") {
      throw new UnAuthorizedError("Please login !!! cookie not set");
    }
    res.status(200).send("set");
  } catch (error) {
    next(error);
  }
});
Router.get("/redirect-order", authenticate, async (req, res, next) => {
  try {
    if (req.type != "user" || !req.cookies.orderStatus) {
      throw new UnAuthorizedError("Please login !!! cookie not set");
    }
    res.status(200).send();
  } catch (error) {
    next(error);
  }
});

module.exports = Router;