const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: ".env" });

const PORT = process.env.PORT || 5000;
const {
  Error,
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
  UnAuthorizedError,
} = require("./Errors/error");
require("./db/conn");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true,
  })
);
app.use(cookieParser());

// api middleware
const mainCategory = require("./api/MainCategory");
const subCategory = require("./api/SubCategory");
const childCategory = require("./api/ChildCategory");
const user = require("./api/User");
const productType = require("./api/ProductType");
const product = require("./api/Product");
const productSku = require("./api/ProductSku");
const order = require("./api/Order");
const feedback = require("./api/Feedback");
const wishlist = require("./api/Wishlist");
const cart = require("./api/Cart");
const payment = require("./api/Payment");
const admin = require("./api/Admin");
const checkCookie = require("./web/CheckCookie")
const productList = require("./api/ProductList");
const productDetail = require("./api/ProductDetail")
const brand = require("./api/Brand")

//use api middleware
app.use("/api", mainCategory);
app.use("/api", subCategory);
app.use("/api", childCategory);
app.use("/api", user);
app.use("/api", productType);
app.use("/api", product);
app.use("/api", productSku);
app.use("/api", order);
app.use("/api", feedback);
app.use("/api", wishlist);
app.use("/api", cart);
app.use("/api", payment);
app.use("/api", admin);
app.use("/api", productList);
app.use("/api",productDetail)
app.use("/api",brand)


app.use("/web",checkCookie)
// error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof ValidationError) {
    res.status(error.status).json(error);
  } else if (error instanceof BadRequestError) {
    res.status(error.status).json(error);
  } else if (error instanceof UnAuthorizedError) {
    res.status(error.status).json(error);
  } else if (error instanceof ForbiddenError) {
    res.status(error.status).json(error);
  } else if (error instanceof NotFoundError) {
    res.status(error.status).json(error);
  } else {
    res.status(500).json(new Error(`Internal server Error ${error}`));
  }
  next();
});

//server listening port
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
