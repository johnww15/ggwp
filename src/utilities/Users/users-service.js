import * as usersAPI from "./users-api";

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function getToken() {
  const token = localStorage.getItem("token");
  console.log("token", token);
  if (!token) return null;
  // if have token, obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // console.log(payload);

  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export async function userLogin(email, password) {
  const body = {
    email: email,
    password: password,
  };
  const token = await usersAPI.userLogin(body);
  localStorage.setItem("token", token);
  return getUser();
}
