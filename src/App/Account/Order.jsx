import React, { useState, useEffect } from "react";
import { fetchSingleUser } from "../../redux/async/user.async";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../../redux/async/order.async";

const Order = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(fetchOrder());
  }, []);
  console.log(order);

  return (
    <>
      <div id="order" className="modal fade" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Order History
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body register-form-content">
              <form className="register-form">
                <div className="row justify-content-center">
                  <div className="col-sm-12">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order Id</th>
                          <th>Product</th>
                          <th>Payment Info</th>
                          <th>Order Status</th>
                          {/* <th>Method</th>
                          <th>Amount</th>
                          <th>Payment status</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {order.data.map((item) => {
                          let x = "";
                          let y = "";
                          if (item.status === "SUCCESS") {
                            y = "table-success";
                          } else if (item.status === "FAILED") {
                            y = "table-danger";
                          } else {
                            y = "table-warning";
                          }
                          if (item.payment[0].status === "SUCCESS") {
                            x = "list-group-item-success";
                          } else if (item.payment[0].status === "FAILED") {
                            x = "list-group-item-danger";
                          } else {
                            x = "list-group-item-warning";
                          }

                          return (
                            <tr key={item._id}>
                              <th>{item.order_id}</th>
                              <td>
                                <ul class="list-group list-group-flush">
                                  {item.list.map((x) => {
                                    return (
                                      <li
                                        className="list-group-item"
                                        key={x._id}
                                      >
                                        {x.product}
                                        <br />
                                        {x.sku_code}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </td>
                              <td>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    {item.payment[0].payment_id}
                                  </li>
                                  <li class="list-group-item">
                                    {item.payment[0].amount} Rs
                                  </li>
                                  <li class="list-group-item">
                                    {item.payment[0].method}
                                  </li>
                                  <li class={`list-group-item ${x}`}>
                                    {item.payment[0].status}
                                  </li>
                                </ul>
                              </td>
                              <td className={y}>{item.status}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
