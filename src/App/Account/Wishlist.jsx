import React, { useEffect } from "react";
import CheckCookie from "../../components/CheckCookie";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist,deleteWishlist } from "../../redux/async/wishlist.async";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  console.log(wishlist);
  return (
    <>
      <CheckCookie path="wishlist" />
      <section className="product-area">
        <div className="container" data-padding-top="62">
          <div className="shopping-wishlist-wrap">
            <div className="row">
              <div className="col-12">
                <div className="wishlist-content">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="item-name">Name</th>
                          <th className="item-qty">Price</th>
                          {/* <th className="item-qty">Qty</th>
                          <th className="item-viewed">Viewed</th> */}
                          {/* <th className="item-created">Created</th> */}
                          {/* <th className="item-direct-link">Direct Link</th> */}
                          {/* <th className="item-default">Default</th> */}
                          <th className="item-delete">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            wishlist.data.map((item)=>{
                                return (
                                  <tr>
                                    <td className="item-name">
                                      <span>
                                        <Link to="/product-details">{item.product[0].name}</Link>
                                      </span>
                                    </td>
                                    <td className="item-qty">
                                        <span>
                                            <del className="mx-2">{item.product[0].price} Rs</del> 
                                            {item.product[0].price - item.product[0].discount} Rs
                                        </span>
                                    </td>
                                    <td className="item-delete">
                                      <span>
                                        <Link to="#/" onClick={()=>{dispatch(deleteWishlist(item._id))}}>
                                          <i className="fa fa-trash"></i>
                                        </Link>
                                      </span>
                                    </td>
                                  </tr>
                                );
                            })
                        }
                        
                      </tbody>
                    </table>
                  </div>
                  <div className="wishlist-footer">
                    <Link to="/account" className="btn-wishlist">
                      Back to Your Account
                    </Link>
                    <Link to="/" className="btn-wishlist">
                      Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
