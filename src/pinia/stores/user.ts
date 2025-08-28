import { defineStore } from "pinia"

const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: {
      username: "",
      password: ""
    }
  }),
  actions: {
    setUserInfo(userInfo: { username: string, password: string }) {
      this.userInfo = userInfo
    },
    clearUserInfo() {
      this.userInfo = { username: "", password: "" }
    },
    logout() {
      this.clearUserInfo()
    }
  }
})

export { useUserStore }
