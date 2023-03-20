import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CheckCookie from "../../components/CheckCookie";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart ,deleteCart , updateCart } from "../../redux/async/cart.async";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let TotalPrice = 0
  // const [TotalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  console.log(cart);

  return (
    <>
      <CheckCookie path="cart" />
      <section className="product-area">
        <div className="container" data-padding-top="62">
          <div className="shopping-cart-wrap">
            <div className="row">
              <div className="col-lg-8">
                <div className="shopping-cart-content">
                  <h4 className="title">Shopping Cart</h4>
                  {cart.data.map((item) => {
                    return (
                      <div className="shopping-cart-item" key={item._id}>
                        <div className="row">
                          <div className="col-4 col-md-3">
                            <div className="product-thumb">
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/upload/${item.product[0].thumbnail}`}
                                alt="Has"
                              />
                            </div>
                          </div>
                          <div className="col-8 col-md-4">
                            <div className="product-content">
                              <h5 className="title">
                                <Link to="single-product.html">
                                  {item.product[0].name}
                                </Link>
                              </h5>
                              <h6 className="product-price">
                                {item.product[0].price -
                                  item.product[0].discount}{" "}
                                Rs
                              </h6>
                              {/* <span className="product-size">Size: S</span> */}
                            </div>
                          </div>
                          <div className="col-6 offset-4 offset-md-0 col-md-5">
                            <div className="product-info">
                              <div className="row">
                                <div className="col-md-10 col-xs-6">
                                  <div className="row">
                                    <div className="col-md-6 col-xs-6 qty">
                                      <div className="product-quick-qty">
                                        <div className="pro-qty">
                                          <input
                                            type="text"
                                            id="quantity"
                                            title="Quantity"
                                            defaultValue={item.qty}
                                            onChange={(e) => {
                                              e.preventDefault();
                                              dispatch(updateCart(item._id,{qty:e.target.value}));
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-xs-2 price">
                                      <h6 className="product-price">
                                        {(item.product[0].price -
                                          item.product[0].discount) *
                                          item.qty}{" "}
                                        Rs
                                      </h6>
                                      <span className="visually-hidden">
                                        {
                                          (TotalPrice =
                                            TotalPrice +
                                            (item.product[0].price -
                                              item.product[0].discount) *
                                              item.qty)
                                        }
                                      </span>
                                      {/* {
                                        setTotalPrice(TotalPrice + ((item.product[0].price - item.product[0].discount) * item.qty))
                                      } */}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2 col-xs-2 text-end">
                                  <div className="product-close">
                                    <Link
                                      to="#"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(deleteCart(item._id));
                                      }}
                                    >
                                      <i className="ion-md-trash"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <Link className="btn-primary" to="/all">
                    Continue shopping
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="shopping-cart-summary mt-md-70">
                  <div className="cart-detailed-totals">
                    <div className="card-block">
                      <div className="card-block-item">
                        <span className="label">{cart.data.length} items</span>
                        <span className="value">{TotalPrice} Rs</span>
                      </div>
                      <div className="card-block-item">
                        <span className="label">Shipping</span>
                        <span className="value">Free</span>
                      </div>
                    </div>
                    <div className="separator"></div>
                    <div className="card-block">
                      <div className="card-block-item">
                        <span className="label">Total (Tax Incl.)</span>
                        <span className="value">{TotalPrice} Rs</span>
                      </div>
                    </div>
                    <div className="separator"></div>
                  </div>
                  {cart.data.length ? (
                    <div className="checkout-shopping">
                      <Link className="btn-checkout" to="/checkout">
                        Proceed to checkout
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="block-reassurance">
                  <ul>
                    <li>
                      <img
                        src="assets/img/shop/cart/verified-user.png"
                        alt="Has"
                      />
                      <span>
                        Security Policy (Edit With Customer Reassurance Module)
                      </span>
                    </li>
                    <li>
                      <img
                        src="assets/img/shop/cart/local-shipping.png"
                        alt="Has"
                      />
                      <span>
                        Delivery Policy (Edit With Customer Reassurance Module)
                      </span>
                    </li>
                    <li>
                      <img
                        src="assets/img/shop/cart/swap-horiz.png"
                        alt="Has"
                      />
                      <span>
                        Return Policy (Edit With Customer Reassurance Module)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
