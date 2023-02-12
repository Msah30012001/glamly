import { useEffect } from "react";
// import { useHistory } from "react-router-dom";

const CheckOrder = (props) => {
  //   const history = useHistory();
  const { path } = props;
  const CHECK_COOKIE_WEB = "http://localhost:5000/web/";
  const redirectAccount = ["thank-you"];

  useEffect(() => {
    if (redirectAccount.includes(path)) {
      fetch(`${CHECK_COOKIE_WEB}/redirect-order`, {
        credentials: "include",
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            window.location.href = "/cart";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [path]);

  return null;
};
export default CheckOrder;
