import axios from "axios";
import { ADMIN_API } from "../api";

const service = () => {
  const getAdmin = () => {
    return axios
      .get(ADMIN_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const getSingleAdmin = (id = "") => {
    return axios
      .get(`${ADMIN_API}/${id}`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const authAdmin = async (Data) => {
    return await fetch(`${ADMIN_API}/auth`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(Data),
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };

  const destroyAuthAdmin = () => {
    return axios
      .get(`${ADMIN_API}/destroy-auth`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const postAdmin = (Data) => {
    return axios
      .post(ADMIN_API, Data, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const updateAdmin = (id, Data) => {
    return axios
      .patch(`${ADMIN_API}/${id}`, Data, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const deleteAdmin = (id) => {
    return axios
      .delete(`${ADMIN_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const searchAdmin = (key) => {
    return axios
      .get(`${ADMIN_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  return {
    getAdmin,
    getSingleAdmin,
    postAdmin,
    updateAdmin,
    deleteAdmin,
    searchAdmin,
    authAdmin,
    destroyAuthAdmin,
  };
};

const adminService = service();

export default adminService;
