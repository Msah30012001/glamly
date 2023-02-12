import React from 'react'
import CheckCookie from "../components/CheckCookie"
import CheckOrder from "../components/CheckOrder"

const ThankYou = () => {
  return (
    <>
    <CheckOrder path="thank-you"/>
      <CheckCookie path="thank-you"/>
      <section>
        <div className="container" data-padding-top="62">
          <div className="row justify-content-center align-items-center">
            <div className="col-4">
              <div className="card border-0 text-center">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/success.png`}
                  className="img-fluid rounded-start"
                  alt="thank you"
                />
                <h1 className="text-success">Successfully Order Placed</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThankYou