import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="header-area header-default header-style2"> 
        <div className="header-middle hidden-md-down">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col col-md-4 col-sm-12">
                <div className="header-logo-area text-center">
                  <Link to="index.html">
                    <img className="logo-main" src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="Logo" />
                    <img className="logo-light d-none" src={`assets/img/logo-light.png`} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col col-md-4 col-sm-12 offset-4">
                {/* <div className="header-action-area float-end">
                  <div className="search-content-wrap">
                    <button className="btn-search">
                      <span className="icon icon-search icon-magnifier"></span>
                    </button>
                    <div className="btn-search-content">
                      <form action="#" method="post">
                        <div className="form-input-item">
                          <input type="text"  placeholder="Enter your search key ..."/>
                          <button type="submit" className="btn-src">
                            <i className="icon-magnifier"></i>
                          </button>
                          <div className="search-categorie">
                            <select className="form-select" name="poscats">
                              <option defaultValue="all">All categories</option>
                              <option defaultValue="1">Beauty &amp; Health</option>
                              <option defaultValue="2">- - Makeup</option>
                              <option defaultValue="3">- - - - Eyes</option>
                              <option defaultValue="4">- - - - Lips</option>
                              <option defaultValue="5">- - - - Face</option>
                              <option defaultValue="6">- - - - Makeup Tools</option>
                              <option defaultValue="7"> - - Skin Care</option>
                              <option defaultValue="8">- - - - Face</option>
                              <option defaultValue="9">- - - - Eyes</option>
                              <option defaultValue="10">- - - - Body</option>
                              <option defaultValue="11">- - - - Skin Care Tools</option>
                              <option defaultValue="12">- - Health Care</option>
                              <option defaultValue="13">- - - - Massage &amp; Relaxation</option>
                              <option defaultValue="14">- - - - Household Health Monitors</option>
                              <option defaultValue="15">- - - - Chinese Medicine</option>
                              <option defaultValue="16">- - - - Personal Health Care Items</option>
                              <option defaultValue="17">- - Nail Art &amp; Tools</option>
                              <option defaultValue="18">- - - - Gel Nail Polish</option>
                              <option defaultValue="19">- - - - Nail Drills</option>
                              <option defaultValue="20">- - - - Nail Dryers</option>
                              <option defaultValue="21">- - - - Nail Glitter</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="shop-button-group">
                    <div className="shop-button-item">
                      <Link className="shop-button" to="#">
                        <i className="fa fa-user icon"></i>
                        <sup className="shop-count">2</sup>
                        <span className="cart-total">€58.32</span>
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
             
        <div className="responsive-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="header-item">
                  <button className="btn-menu" type="button"><i className="icon-menu"></i></button>
                </div>
              </div>
              <div className="col-4">
                <div className="header-item justify-content-center">
                  <div className="header-logo-area">
                    <Link to="index.html">
                      <img className="logo-main" src={`assets/img/logo.png`} alt="Logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="header-item justify-content-end">
                  <button className="btn-user"><i className="icon-user"></i></button>
                  <button className="btn-cart"><i className="icon-bag"></i> <span className="item-count">2</span></button>
                </div>
              </div>
              <div className="col-12">
                <div className="responsive-search-content">
                  <form action="#">
                    <div className="form-input-item">
                      <input type="text"  placeholder="Enter your search key ..."/>
                      <button type="submit" className="btn-src">
                        <i className="icon-magnifier"></i>
                      </button>
                      <div className="search-categorie">
                        <select className="form-select" name="poscats">
                          <option defaultValue="all">All categories</option>
                          <option defaultValue="1">Beauty &amp; Health</option>
                          <option defaultValue="2">- - Makeup</option>
                          <option defaultValue="3">- - - - Eyes</option>
                          <option defaultValue="4">- - - - Lips</option>
                          <option defaultValue="5">- - - - Face</option>
                          <option defaultValue="6">- - - - Makeup Tools</option>
                          <option defaultValue="7"> - - Skin Care</option>
                          <option defaultValue="8">- - - - Face</option>
                          <option defaultValue="9">- - - - Eyes</option>
                          <option defaultValue="10">- - - - Body</option>
                          <option defaultValue="11">- - - - Skin Care Tools</option>
                          <option defaultValue="12">- - Health Care</option>
                          <option defaultValue="13">- - - - Massage &amp; Relaxation</option>
                          <option defaultValue="14">- - - - Household Health Monitors</option>
                          <option defaultValue="15">- - - - Chinese Medicine</option>
                          <option defaultValue="16">- - - - Personal Health Care Items</option>
                          <option defaultValue="17">- - Nail Art &amp; Tools</option>
                          <option defaultValue="18">- - - - Gel Nail Polish</option>
                          <option defaultValue="19">- - - - Nail Drills</option>
                          <option defaultValue="20">- - - - Nail Dryers</option>
                          <option defaultValue="21">- - - - Nail Glitter</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </header>
    </>
  )
}

export default Header
