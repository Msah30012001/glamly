import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CheckAdminCookie from "../components/CheckAdminCookie";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductSku } from "../redux/async/productsku.async";
import { fetchMainCategory } from "../redux/async/maincategory.async";
import { fetchSubCategory } from "../redux/async/subcategory.async";
import { fetchChildCategory } from "../redux/async/childcategory.async";
import { fetchUser } from "../redux/async/user.async";
import { fetchOrder } from "../redux/async/order.async";

const Dashboard = () => {
  const dispatch = useDispatch();
  const mainCategory = useSelector((state) => state.mainCategory);
  const subCategory = useSelector((state) => state.subCategory);
  const childCategory = useSelector((state) => state.childCategory);
  const productSku = useSelector((state) => state.productSku);
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchChildCategory());
    dispatch(fetchMainCategory());
    dispatch(fetchSubCategory());
    dispatch(fetchProductSku());
    dispatch(fetchUser());
    dispatch(fetchOrder());
  }, [dispatch]);

  return (
    <>
      <CheckAdminCookie path="dashboard" />
      <div class="product-header-wrap"></div>
      <div class="product-body-wrap">
        <div className="row">
          <div className="col-6">
            <div class="card m-3">
              <div class="card-body">
                <div className="row text-center align-items-center justify-content-center">
                  <div className="col-6">
                    <p>
                      <i class="fas fa-shopping-cart fa-5x"></i>
                    </p>
                    <h3 class="card-title">Order</h3>
                  </div>
                  <div className="col-6">
                    <h1 class="card-text">{order.data.length}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card m-3">
              <div class="card-body">
                <div className="row text-center align-items-center justify-content-center">
                  <div className="col-6">
                    <p>
                      <i class="fas fa-box fa-5x"></i>
                    </p>
                    <h3 class="card-title">Product</h3>
                  </div>
                  <div className="col-6">
                    <h1 class="card-text">{productSku.data.length}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card m-3">
              <div class="card-body">
                <div className="row text-center align-items-center justify-content-center">
                  <div className="col-6">
                    <p>
                      <i class="fas fa-book fa-5x"></i>
                    </p>
                    <h3 class="card-title">Category</h3>
                  </div>
                  <div className="col-6">
                    <h1 class="card-text">
                      {mainCategory.data.length +
                        subCategory.data.length +
                        childCategory.data.length}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card m-3">
              <div class="card-body">
                <div className="row text-center align-items-center justify-content-center">
                  <div className="col-6">
                    <p>
                      <i class="fas fa-user fa-5x"></i>
                    </p>
                    <h3 class="card-title">User</h3>
                  </div>
                  <div className="col-6">
                    <h1 class="card-text">{user.data.length}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
