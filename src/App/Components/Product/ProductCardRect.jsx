import React  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postWishlist } from "../../../redux/async/wishlist.async";
import { postCart } from "../../../redux/async/cart.async";

const ProductCardRect = (props) => {
  const dispatch = useDispatch();
  const {
    _id,
    slug,
    thumbnail,
    thumbnailHover,
    title,
    rate,
    price,
    discount,
    desc,
    stock,
  } = props;
  return (
    <>
      <div className="product-item">
        <div className="inner-content product-list-item">
          <div className="row m-0">
            <div className="col-sm-4 p-0">
              <div className="product-thumb">
                <Link to={`/d/${slug}`}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/upload/${thumbnail}`}
                    alt={`HasTech`}
                  />
                  <img
                    className="second-image"
                    src={`${process.env.PUBLIC_URL}/assets/upload/${thumbnailHover}`}
                    alt={`HasTech`}
                  />
                </Link>
                <div className="product-action">
                  <div className="addto-wrap">
                    <Link
                      className="add-wishlist"
                      to="wishlist.html"
                      title="Add to wishlist"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(postWishlist({ product: _id }));
                      }}
                    >
                      <i className="icon-heart icon"></i>
                    </Link>
                    <Link className="add-compare" to="#" title="Add to compare">
                      <i className="icon-shuffle icon"></i>
                    </Link>
                  </div>
                </div>
                <ul className="product-flag">
                  <li className="new">New</li>
                  <li className="discount visually-hidden">-10%</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-8 p-0">
              <div className="product-desc">
                <div className="product-info">
                  <h4 className="title">
                    <Link to={`/d/${slug}`}>{title}</Link>
                  </h4>
                  <div className="star-content">
                    {((rate) => {
                      if (rate >= 0 && rate < 1) {
                        return (
                          <>
                            <i className="ion-md-star icon-color-gray"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                          </>
                        );
                      } else if (rate >= 1 && rate < 2) {
                        return (
                          <>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                          </>
                        );
                      } else if (rate >= 2 && rate < 3) {
                        return (
                          <>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                          </>
                        );
                      } else if (rate >= 3 && rate < 4) {
                        return (
                          <>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                          </>
                        );
                      } else if (rate >= 4 && rate < 5) {
                        return (
                          <>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </>
                        );
                      }
                    })(rate)}
                  </div>
                  <div className="prices">
                    <span
                      className={`price-old ${
                        !discount ? "visually-hidden" : ""
                      }`}
                    >
                      {price} Rs
                    </span>
                    <span className={`price ${!discount ? "text-black" : ""}`}>
                      {price - discount} Rs
                    </span>
                  </div>
                  <ul className="product-desc-list">
                    {desc}
                  </ul>
                  <div className="availability-list">
                    Availability: <span>{stock} In Stock</span>
                  </div>
                </div>
                <div className="product-footer">
                  <Link
                    className="btn-product-add"
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(postCart({ product: _id }));
                    }}
                  >
                    Add to cart
                  </Link>
                  <Link className="btn-quick-view" to="#" title="Quick view">
                    Quick view
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardRect;
