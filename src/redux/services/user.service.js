import axios from "axios";
import { USER_API } from "../api";

const service = () => {
  const getUser = () => {
    return axios
      .get(USER_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSingleUser = (id ="") => {
    return axios
      .get(`${USER_API}/${id}`,{
        withCredentials: true
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const authUser = async (Data) => {
 return axios
   .post(`${USER_API}/auth`,Data, {
     withCredentials: true,
   })
   .then((res) => res.data)
   .catch((err) => {
     throw err.response.data.message;
   });
    // return await fetch(`${USER_API}/auth`, {
    //   method: "POST",
    //   mode: "cors",
    //   credentials:"include",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials":true
    //   },
    //   body: JSON.stringify(Data),
    // })
    // .then((res)=>res)
    // .catch((err)=>{throw err});
  };
  
  const destroyAuthUser = () => {
    return axios
      .get(`${USER_API}/destroy-auth`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const postUser = (Data) => {
    return axios
      .post(USER_API, Data,{
        withCredentials: true
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const updateUser = (id, Data) => {
    return axios
      .patch(`${USER_API}/${id}`, Data,{
        withCredentials: true
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const deleteUser = (id) => {
    return axios
      .delete(`${USER_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchUser = (key) => {
    return axios
      .get(`${USER_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getUser,
    getSingleUser,
    postUser,
    updateUser,
    deleteUser,
    searchUser,
    authUser,
    destroyAuthUser
  };
};

const userService = service();

export default userService;
