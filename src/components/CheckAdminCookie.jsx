import { useEffect } from "react";
// import { useHistory } from "react-router-dom";

const CheckAdminCookie = (props) => {
  //   const history = useHistory();
  const { path } = props;
  const CHECK_ADMIN_COOKIE_WEB = "http://localhost:5000/web";
  const redirectAccount = [
    "child-category",
    "main-category",
    "product",
    "product-sku",
    "product-type",
    "feedback",
    "sub-category",
    "dashboard",
    "user",
    "order",
    "brand"
  ];
  const redirectLogin = ["login"];

  useEffect(() => {
    if (redirectAccount.includes(path)) {
      fetch(`${CHECK_ADMIN_COOKIE_WEB}/redirect-admin-account`, {
        credentials: "include",
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            window.location.href = "/admin/login";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (redirectLogin.includes(path)) {
      fetch(`${CHECK_ADMIN_COOKIE_WEB}/redirect-admin-login`, {
        credentials: "include",
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            window.location.href = "/admin/";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [path]);

  return null;
};
export default CheckAdminCookie;
