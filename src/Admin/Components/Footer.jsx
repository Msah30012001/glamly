import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className="footer-area p-0">    
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="copyright">Copyright © 2022 All Rights Reserved | Made with <i className="fa fa-heart-o"></i> by <Link target="_blank" to="https://www.hasthemes.com/">HasThemes.</Link></p>
                        </div>
                        <div className="col-lg-6">
                            <div className="payment">
                                <img src={`assets/img/photos/payment.png`} alt="Payment"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
