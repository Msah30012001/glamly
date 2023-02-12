import adminService from "../services/admin.service";
import {
  fetchAdminRequest,
  fetchAdminSuccess,
  fetchAdminFailure,
  postAdminRequest,
  postAdminSuccess,
  postAdminFailure,
  updateAdminRequest,
  updateAdminSuccess,
  updateAdminFailure,
  deleteAdminRequest,
  deleteAdminSuccess,
  deleteAdminFailure,
  searchAdminRequest,
  searchAdminSuccess,
  searchAdminFailure,
  authAdminRequest,
  authAdminSuccess,
  authAdminFailure,
  destroyAuthAdminRequest,
  destroyAuthAdminSuccess,
  destroyAuthAdminFailure,
} from "../actions";

export const fetchAdmin = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchAdminRequest());
      const response = await adminService.getAdmin();
      dispatch(fetchAdminSuccess(response));
    } catch (error) {
      dispatch(fetchAdminFailure(error));
    }
  };
};

export const fetchSingleAdmin = (id = "") => {
  return async (dispatch) => {
    try {
      dispatch(fetchAdminRequest());
      const response = await adminService.getSingleAdmin(id);
      dispatch(fetchAdminSuccess(response));
    } catch (error) {
      dispatch(fetchAdminFailure(error));
    }
  };
};

export const authAdmin = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(authAdminRequest());
      const response = await adminService.authAdmin(Data);
      dispatch(authAdminSuccess(response));
      window.location.href = "/admin";
    } catch (error) {
      dispatch(authAdminFailure());
    }
  };
};

export const destroyAuthAdmin = () => {
  return async (dispatch) => {
    try {
      dispatch(destroyAuthAdminRequest());
      const response = await adminService.destroyAuthAdmin();
      console.log(response);
      dispatch(destroyAuthAdminSuccess(response));
      window.location.href = "/admin/login";
    } catch (error) {
      dispatch(destroyAuthAdminFailure());
    }
  };
};

export const postAdmin = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postAdminRequest());
      const response = await adminService.postAdmin(Data);
      dispatch(postAdminSuccess(response));
    } catch (error) {
      dispatch(postAdminFailure(error));
    }
  };
};

export const updateAdmin = (id = "", Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateAdminRequest());
      const response = await adminService.updateAdmin(id, Data);
      dispatch(updateAdminSuccess(response));
    } catch (error) {
      dispatch(updateAdminFailure(error));
    }
  };
};

export const deleteAdmin = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteAdminRequest());
      const response = await adminService.deleteAdmin(id);
      dispatch(deleteAdminSuccess(response));
      if (response) {
        dispatch(fetchAdmin());
      }
    } catch (error) {
      dispatch(deleteAdminFailure(error));
    }
  };
};

export const searchAdmin = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchAdminRequest());
      const response = await adminService.searchAdmin(Data);
      dispatch(searchAdminSuccess(response));
    } catch (error) {
      dispatch(searchAdminFailure(error));
    }
  };
};
