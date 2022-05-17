import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USERLOGINP_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_SINGAL_PRODUCT,
  // VIEW_PRODUCT_REQUEST,
  // VIEW_PRODUCT_SUCCESS,
  // VIEW_PRODUCT_FAIL,
} from "./../constants/user-constants";

export const userReducer = (
  state = { userInfo: {}, loggedIn: {}, profile: {} },
  { type, payload }
) => {
  switch (type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case USER_SIGNUP_SUCCESS:
      return { ...state, isLoading: false, signup: true, userInfo: payload };
    case USER_SIGNUP_FAIL:
      return { ...state, isLoading: false, error: payload };

    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, isloading: false, logIn: true, loggedIn: payload };
    case USERLOGINP_FAIL:
      return { ...state, isloading: false, error: payload };

    // case USER_PROFILE_REQUEST:
    //   return { ...state, isLoading: true };
    // case USER_PROFILE_SUCCESS:
    //   return { ...state, isloading: false, useProfile: true, profile: payload };
    // case USER_PROFILE_FAIL:
    //   return { ...state, isloading: false, error: payload };

    default:
      return state;
  }
};

export const productReducer = (
  state = { productInfo: {}, AllProduct: {}, singalProduct: {} },
  { type, payload }
) => {
  switch (type) {
    case ADD_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, isloading: false, productInfo: payload };
    case ADD_PRODUCT_FAIL:
      return { ...state, isloading: false, error: payload };

    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isloading: false, AllProduct: payload };
    case GET_PRODUCT_FAIL:
      return { ...state, isloading: false, error: payload };

    // case VIEW_PRODUCT_REQUEST:
    //   return { ...state, isLoading: true };
    // case VIEW_PRODUCT_SUCCESS:
    //   return { ...state, isloading: false, singalProduct: payload };
    // case VIEW_PRODUCT_FAIL:
    //   return { ...state, isloading: false, error: payload };

    default:
      return state;
  }
};
