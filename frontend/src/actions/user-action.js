import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USERLOGINP_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_SINGAL_PRODUCT,
  VIEW_PRODUCT_REQUEST,
  VIEW_PRODUCT_SUCCESS,
  VIEW_PRODUCT_FAIL,
} from "./../constants/user-constants";
import axios from "axios";

export const userAction = (formData) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });
    const { data } = await axios.post(
      "http://localhost:5513/api/user",
      formData
    );

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.result });
    // dispatch(
    //   userLoginAction({ email: formData.email, password: formData.password })
    // );
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: error.response.data.error || "Something went wrong",
    });
  }
};

export const userLoginAction = (loginData) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post(
      "http://localhost:5513/api/auth",
      loginData
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data?.result });
  } catch (error) {
    dispatch({
      type: USERLOGINP_FAIL,
      payload: error.response.data.error || "Something went wrong",
    });
  }
};

export const AddProduct1 = (productdata) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    const { data } = await axios.post(
      "http://localhost:5513/api/product",
      productdata
    );

    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: error.response.data.error || "Something went wrong",
    });
  }
};
export const GetAllProduct = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    const { data } = await axios.get("http://localhost:5513/api/product");

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error.response.data.error || "Something went wrong",
    });
  }
};

// export const ViewProduct = (singalformdata) => async (dispatch) => {
//   try {
//     dispatch({ type: VIEW_PRODUCT_REQUEST });
//     const { data } = await axios.get("http://localhost:5513/api/singal");

//     dispatch({ type: VIEW_PRODUCT_SUCCESS, payload: data.result });
//   } catch (error) {
//     dispatch({
//       type: VIEW_PRODUCT_FAIL,
//       payload: error.response.data.error || "Something went wrong",
//     });
//   }
// };
