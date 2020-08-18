import axios from "axios";
import { Cookies } from "react-cookie";

export const USER_LOGIN = "user:userLogin";
export const USER_LOGOUT = "user:userLogout";

let cookie = new Cookies();
export function userLogin(newUser) {
  cookie.set("user", newUser);
  return {
    type: USER_LOGIN,
    payload: {
      user: newUser,
      isLoggedIn: true,
    },
  };
}

export function userLogout() {
  cookie.set("user", null);
  return {
    type: USER_LOGIN,
    payload: {
      user: null,
      isLoggedIn: false,
    },
  };
}

export function apiRequest() {
  return (dispatch) => {
    axios
      .get("https://mauliksompura.in")
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("fail");
      });
  };
}

// TODO store cookie on login and destroy it on logout
