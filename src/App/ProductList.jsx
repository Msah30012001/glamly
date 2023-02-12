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
  // const data = [
  //   {
  //     title: "Fila Locker Room varsity Jacket",
  //     thumbnail: "assets/img/shop/13.jpg",
  //     thumbnailHover: "assets/img/shop/13-h1.jpg",
  //     rate: "4",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "Juicy Couture Tricot Logo Stripe Jacket",
  //     thumbnail: "assets/img/shop/12.jpg",
  //     thumbnailHover: "assets/img/shop/12-h1.jpg",
  //     rate: "5",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "New Balance Fresh Foam LAZR v1 Sport",
  //     thumbnail: "assets/img/shop/07.jpg",
  //     thumbnailHover: "assets/img/shop/07-h1.jpg",
  //     rate: "5",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "New Balance Fresh Foam Kaymin",
  //     thumbnail: "assets/img/shop/06.jpg",
  //     thumbnailHover: "assets/img/shop/06-h1.jpg",
  //     rate: "5",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "Water and Wind Resistant Insulated Ja...",
  //     thumbnail: "assets/img/shop/05.jpg",
  //     thumbnailHover: "assets/img/shop/05-h1.jpg",
  //     rate: "4",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "Trans-Weight Hooded Wind and Water...",
  //     thumbnail: "assets/img/shop/04.jpg",
  //     thumbnailHover: "assets/img/shop/04-h1.jpg",
  //     rate: "5",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "Madden by Steve Madden Cale 6",
  //     thumbnail: "assets/img/shop/03.jpg",
  //     thumbnailHover: "assets/img/shop/03-h1.jpg",
  //     rate: "5",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "Calvin Klein Jeans Reflactive Logo Full zip",
  //     thumbnail: "assets/img/shop/11.jpg",
  //     thumbnailHover: "assets/img/shop/11-h1.jpg",
  //     rate: "4",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "Fila Locker Room varsity Jacket",
  //     thumbnail: "assets/img/shop/10.jpg",
  //     thumbnailHover: "assets/img/shop/10-h1.jpg",
  //     rate: "4",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "Fila Locker Room varsity Jacket",
  //     thumbnail: "assets/img/shop/09.jpg",
  //     thumbnailHover: "assets/img/shop/02-h1.jpg",
  //     rate: "5",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "Fila Locker Room varsity Jacket",
  //     thumbnail: "assets/img/shop/02.jpg",
  //     thumbnailHover: "assets/img/shop/02-h1.jpg",
  //     rate: "4",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  //   {
  //     title: "Fila Locker Room varsity Jacket",
  //     thumbnail: "assets/img/shop/08.jpg",
  //     thumbnailHover: "assets/img/shop/08-h1.jpg",
  //     rate: "4",
  //     price: "1000",
  //     discount: "50",
  //     desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
  //     stock: "300",
  //   },
  // ];
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
