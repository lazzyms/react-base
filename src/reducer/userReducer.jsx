import { USER_LOGIN, USER_LOGOUT } from "../actions/userActions";
import { Cookies } from "react-cookie";

function initState() {
  let cookie = new Cookies();
  let user = cookie.get("user");
  if (user) {
    return {
      user: user,
      isLoggedIn: true,
    };
  } else {
    return {
      user: null,
      isLoggedIn: false,
    };
  }
}

export default function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case USER_LOGIN:
      return payload;
    case USER_LOGOUT:
      return payload;
    default:
      return state;
  }
}
