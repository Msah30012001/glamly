import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from "./Components/Breadcrumb";
import ProductCard from "./Components/Product/ProductCard";
import { useParams } from "react-router-dom";
import ProductCardRect from "./Components/Product/ProductCardRect";
import { fetchProductList } from "../redux/async/productlist.async";

const ProductList = () => {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const param = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("s")) {
      dispatch(fetchProductList(`?s=${searchParams.get("s")}`));
    } else {
      dispatch(fetchProductList(`${param.slug}/?s=${searchParams.get("s")}`));
    }
    console.log(param.slug);
  }, [dispatch, searchParams.get("s"), param.slug]);
  return (
    <>
      <Breadcrumb />
      <section className="product-area">
        <div className="container pb-80">
          <div className="row">
            {productList.data.map((item) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3" key={item._id}>
                  <ProductCard
                    _id={item._id}
                    slug={item.slug}
                    title={item.name}
                    thumbnail={item.thumbnail}
                    thumbnailHover={item.thumbnail_hover}
                    rate={item.avg}
                    price={item.price}
                    discount={item.discount}
                  />
                </div>
              );
            })}
            {productList.data.length === 0 && (
              <>
                <i
                  className="fa fa-circle-exclamation fa-bounce text-danger text-center"
                  style={{ fontSize: "15em" }}
                ></i>
                <h2 className="text-danger text-center">Oops ! Cosmetic not available</h2>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
