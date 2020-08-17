import { USER_LOGIN, USER_LOGOUT } from "../actions/userActions";

export default function userReducer(
  state = { user: null, isLoggedIn: false },
  { type, payload }
) {
  switch (type) {
    case USER_LOGIN:
      return payload;
    case USER_LOGOUT:
      return payload;
    default:
      return state;
  }
}


