import request from "./request"

export function login(data: { username: string, password: string }) {
  return request({
    url: "/login",
    method: "post",
    data
  })
}

export function register(data: { username: string, status: number, password: string }) {
  return request({
    url: "/register",
    method: "post",
    data
  })
}

export function getUserInfo() {
  return request({
    url: "/getUserInfo",
    method: "get"
  })
}

export function updata(data: { name: string, age: number }) {
  return request({
    url: "/updata",
    method: "post",
    data
  })
}
