import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Admin/Components/Header";
import PreLoader from "./App/Components/PreLoader";
import Footer from "./Admin/Components/Footer";
import Sidebar from "./Admin/Components/Sidebar";
import Dashboard from "./Admin/Dashboard";
import MainCategory from "./Admin/Main Category/MainCategory";
import SubCategory from "./Admin/Sub Category/SubCategory";
import ChildCategory from "./Admin/Child Category/ChildCategory";
import Brand from "./Admin/Brand/Brand";
import ProductType from "./Admin/Product Type/ProductType";
import Product from "./Admin/Product/Product";
import ProductSku from "./Admin/Product Sku/ProductSku";
import NotFound from "./components/NotFound";
import Login from "./Admin/Login";
import User from "./Admin/User/User"
import Order from "./Admin/Order/Order"
import Feedback from "./Admin/Feedback/Feedback"

const Admin = () => {
  return (
    <>
      <div className="wrapper home-default-wrapper">
        <PreLoader />
        <Header />
        <main className="main-content">
          <section className="product-area">
            <div className="container-fluid pb-55 bg-light">
              <div className="row">
                <div className="col-lg-3 order-1 order-lg-1">
                  <Sidebar />
                </div>
                <div className="col-lg-9 order-0 order-lg-2">
                  <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/main-category" element={<MainCategory />} />
                    <Route path="/sub-category" element={<SubCategory />} />
                    <Route path="/child-category" element={<ChildCategory />} />
                    <Route path="/brand" element={<Brand />} />
                    <Route path="/product-type" element={<ProductType />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product-sku" element={<ProductSku />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />

        <div id="scroll-to-top" className="scroll-to-top">
          <span className="ion-md-arrow-up"></span>
        </div>
      </div>
    </>
  );
};

export default Admin;
