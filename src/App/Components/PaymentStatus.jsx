import React, { useEffect, useState } from "react";
import CheckCookie from "../../components/CheckCookie";
import { fetchSingleOrder } from "../../redux/async/order.async";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// import { db } from "./firebase";

const PaymentStatus = ({ match }) => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch()
    const param = useParams();

  useEffect(() => {
    dispatch(fetchSingleOrder(param.orderId))
  }, []);
  return (
    <>
      <CheckCookie path="thank-you" />
      <section>
        <div className="container p-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-4">
              <div className="card border-0 text-center">
                {order.data.status === "SUCCESS" && (
                  <>
                    <i
                      className="fa fa-circle-check fa-bounce text-success"
                      style={{ fontSize: "15em" }}
                    ></i>
                    <h2 className="text-success">Successfully Order Placed</h2>
                  </>
                )}
                {order.data.status === "FAILED" && (
                  <>
                    <i
                      className="fa fa-circle-exclamation fa-bounce text-danger"
                      style={{ fontSize: "15em" }}
                    ></i>
                    <h2 className="text-danger">Order Failed</h2>
                  </>
                )}
                {order.data.status === "PENDING" && (
                  <>
                    <i
                      className="fa fa-clock fa-bounce text-warning"
                      style={{ fontSize: "15em" }}
                    ></i>
                    <h2 className="text-warning">Order Pending</h2>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentStatus;
