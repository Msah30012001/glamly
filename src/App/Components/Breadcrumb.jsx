import React from 'react'
import {Link } from "react-router-dom"
const Breadcrumb = () => {
  return (
    <>
      <div
        className="page-header-area bg-img"
        style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/assets/img/photos/bg-02.jpg")` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="page-header-content">
                <nav className="breadcrumb-area">
                  <ul className="breadcrumb">
                    <li>
                      <Link to="index.html">Home</Link>
                    </li>
                    <li className="breadcrumb-sep">
                      <i className="fa fa-angle-right"></i>
                    </li>
                    <li>Shop List Sidebar</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb