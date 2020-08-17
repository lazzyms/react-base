import axios from "axios";
export const USER_LOGIN = "user:userLogin";
export const USER_LOGOUT = "user:userLogout";

export function userLogin(newUser) {
  return {
    type: USER_LOGIN,
    payload: {
      user: newUser,
      isLoggedIn: true,
    },
  };
}

export function userLogout() {
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
