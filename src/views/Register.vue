<script lang="ts" setup>
import { ref } from "vue"
import router from "@/router"
import { register } from "@/service/apis"

const username = ref("")
const status = ref(0) // 账户状态 0 激活 1 未激活
const password = ref("")
const loading = ref(false)
const errorMsg = ref("")
const successMsg = ref("")

async function handleRegister() {
  errorMsg.value = ""
  successMsg.value = ""
  if (!username.value || !password.value || status.value === null) {
    errorMsg.value = "请填写完整信息"
    return
  }
  loading.value = true
  try {
    // 示例：请根据实际接口调整
    const res: any = await register({ username: username.value, status: status.value, password: password.value })
    if (res.code === 0) {
      successMsg.value = "注册成功！"
      ElMessage.success("注册成功，请登录！")
      router.replace({ name: "Login" })
    } else {
      errorMsg.value = res.data.message || "注册失败"
    }
  } catch (e: any) {
    errorMsg.value = e.message || "注册失败"
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="register-wrapper">
    <div class="register-container">
      <h2>注册账号</h2>
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label for="username">用户名</label>
          <input id="username" v-model="username" type="text" placeholder="请输入用户名" required>
        </div>
        <div class="input-group">
          <label for="password">密码</label>
          <input id="password" v-model="password" type="password" placeholder="请输入密码" required>
        </div>
        <!-- 账户状态 0 激活 1 未激活 -->
        <div class="input-group">
          <label for="status">状态</label>
          <select v-model="status" id="status">
            <option :value="0">
              激活
            </option>
            <option :value="1">
              未激活
            </option>
          </select>
        </div>
        <button class="register-btn" type="submit" :disabled="loading">
          {{ loading ? '注册中...' : '注册' }}
        </button>
        <div v-if="errorMsg" class="error-message">
          {{ errorMsg }}
        </div>
        <div v-if="successMsg" class="success-message">
          {{ successMsg }}
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.register-wrapper {
  min-height: 93.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
  box-sizing: border-box;
}

.register-container {
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: 16px;
  padding: 40px 32px;
  box-shadow: 0 8px 24px #0001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: break-all;
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.input-group label {
  margin-bottom: 6px;
  color: #666;
  font-size: 15px;
}

.input-group input {
  padding: 12px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.2s;
}

.input-group input:focus {
  border-color: #409eff;
  outline: none;
}

.register-btn {
  width: 100%;
  padding: 12px;
  background: #409eff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;
}

.register-btn:disabled {
  background: #a0cfff;
  cursor: not-allowed;
}

.error-message {
  color: #ff4d4f;
  margin-top: 12px;
  text-align: center;
}

.success-message {
  color: #52c41a;
  margin-top: 12px;
  text-align: center;
}
</style>
