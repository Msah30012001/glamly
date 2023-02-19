import React from 'react'
import { Link } from "react-router-dom";

const CategoryCard = (props) => {

    const {name,noOfProducts,slug} = props
  return (
    <>
      <div className="post-item mt-50">
        <div className="inner-content">
          <div className="content">
            <h4 className="title">
              <Link to={`/${slug}`}>{name}</Link>
            </h4>
            <div className="meta">
              <h1 style={{ color: "#ec6b81" }}>{noOfProducts}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard