import * as types from "./actionTypes";

const userdata=JSON.parse(localStorage.getItem("UserData"))||{};
// console.log(userdata)
const initialState = {
  isAuth: !!userdata?.token || false,
  token: userdata.token || "",
  isLoading: false,
  isError: false,
  userdata: JSON.parse(localStorage.getItem("UserData")) || {}
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case types.REGISTER_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };

    case types.SETUSER:
      return{...state,userdata:payload}
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };
      case types.LOGOUT:
        return { ...state, isLoading: false, isAuth: false, token: "",userdata:{} };
    default:
      return state;
  }
};
export { reducer };
