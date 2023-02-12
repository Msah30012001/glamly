import userService from "../services/user.service";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  postUserRequest,
  postUserSuccess,
  postUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
  searchUserRequest,
  searchUserSuccess,
  searchUserFailure,
  authUserRequest,
  authUserSuccess,
  authUserFailure,
  destroyAuthUserRequest,
  destroyAuthUserSuccess,
  destroyAuthUserFailure,
} from "../actions";

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserRequest());
      const response = await userService.getUser();
      dispatch(fetchUserSuccess(response));
    } catch (error) {
      dispatch(fetchUserFailure(error));
    }
  };
};

export const fetchSingleUser = (id = "") => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserRequest());
      const response = await userService.getSingleUser(id);
      dispatch(fetchUserSuccess(response));
    } catch (error) {
      dispatch(fetchUserFailure(error));
    }
  };
};

export const authUser = (Data) => {
  return async (dispatch) => {
    try{
      dispatch(authUserRequest());
      const response = await userService.authUser(Data);
      dispatch(authUserSuccess(response));
      window.location.href="/account"
    }catch(error){
      dispatch(authUserFailure());
    }
  }
}

export const destroyAuthUser = () => {
  return async (dispatch) => {
    try {
      dispatch(destroyAuthUserRequest());
      const response = await userService.destroyAuthUser();
      console.log(response)
      dispatch(destroyAuthUserSuccess(response));
      window.location.href = "/login";
    } catch (error) {
      dispatch(destroyAuthUserFailure());
    }
  };
};


export const postUser = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postUserRequest());
      const response = await userService.postUser(Data);
      dispatch(postUserSuccess(response));
    } catch (error) {
      dispatch(postUserFailure(error));
    }
  };
};

export const updateUser = (id="", Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateUserRequest());
      const response = await userService.updateUser(
        id,
        Data
      );
      dispatch(updateUserSuccess(response));
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteUserRequest());
      const response = await userService.deleteUser(id);
      dispatch(deleteUserSuccess(response));
      if (response) {
        dispatch(fetchUser());
      }
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
};

export const searchUser = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchUserRequest());
      const response = await userService.searchUser(Data);
      dispatch(searchUserSuccess(response));
    } catch (error) {
      dispatch(searchUserFailure(error));
    }
  };
};
