import request from "./request";

export const login = (data: { username: string; password: string }) => {
  return request({
    url: "/login",
    method: "post",
    data
  });
};

export const register = (data: { username: string; status: number; password: string }) => {
  return request({
    url: "/register",
    method: "post",
    data
  });
};

export const getUserInfo = () => {
  return request({
    url: "/getUserInfo",
    method: "get"
  });
};

export const updata = (data: { name: string; age: number }) => {
  return request({
    url: "/updata",
    method: "post",
    data
  });
};
