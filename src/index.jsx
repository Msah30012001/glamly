import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import './assets/css/bootstrap.min.css'
import './assets/css/ionicons.min.css'
import './assets/css/simple-line-icons.css'
import './assets/css/lineIcons.css'
import './assets/css/font-awesome.min.css'
import './assets/css/animate.css'
import './assets/css/swiper.min.css'
import './assets/css/range-slider.css'
import './assets/css/fancybox.min.css'
import './assets/css/slicknav.css'
import './assets/css/owlcarousel.min.css'
import './assets/css/owltheme.min.css'
import './assets/css/spacing.css'
import './assets/css/theme-font.css'
import './assets/css/style.css'

import './assets/js/modernizr.js'
// import './assets/js/jquery-main.js'
import './assets/js/jquery-migrate.js'
// import './assets/js/bootstrap.min.js'
import './assets/js/jquery.appear.js'
import './assets/js/swiper.min.js'
// import './assets/js/fancybox.min.js'
import './assets/js/slicknav.js'
// import './assets/js/waypoints.js'
import './assets/js/owlcarousel.min.js'
import './assets/js/jquery-match-height.min.js'
import './assets/js/jquery-zoom.min.js'
// import './assets/js/countdown.js'
import './assets/js/custom.js'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/*" element={<App />} />
            <Route path="admin/*" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
