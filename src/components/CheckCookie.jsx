import { useEffect } from "react";
// import { useHistory } from "react-router-dom";

const CheckCookie = (props) => {
  //   const history = useHistory();
  const { path } = props;
  const CHECK_COOKIE_WEB = "http://localhost:5000/web/";
  const redirectAccount = ["cart","thank-you", "checkout", "wishlist", "account", "order"];
  const redirectLogin = ["login", "register"];

  useEffect(() => {
    if (redirectAccount.includes(path)) {
      fetch(`${CHECK_COOKIE_WEB}/redirect-account`, {
        credentials: "include",
      })
        .then((response) => {
          console.log(response);
          if(!response.ok){
                window.location.href="/login"
            }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (redirectLogin.includes(path)) {
      fetch(`${CHECK_COOKIE_WEB}/redirect-login`, {
        credentials: "include",
      })
        .then((response) => {
          console.log(response);
          if(response.ok){
                window.location.href="/account"
            }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [path]);

  return null;
};
export default CheckCookie;
