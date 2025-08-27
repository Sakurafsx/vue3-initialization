<template>
    <div class="upload-form">
        <h2>登陆页</h2>
        <form @submit.prevent="handleSubmit">
            <label>
                用户名：
                <input type="text" v-model="username" placeholder="请输入用户名" />
            </label>
            <label>
                描述：
                <input type="text" v-model="password" placeholder="请输入密码" />
            </label>
            <button type="submit">登录</button>
        </form>
    </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue';

const username = ref('');
const password = ref('');



async function handleSubmit() {
    // json 格式上传
    fetch('/api/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        })
    }).then(res => res.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}



</script>

<style scoped>
.upload-form {
    max-width: 400px;
    margin: 40px auto;
    padding: 24px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #fafbfc;
    box-shadow: 0 2px 8px #0001;
}

.upload-form h2 {
    margin-bottom: 16px;
    text-align: center;
}

.upload-form form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.upload-form .success {
    color: #52c41a;
    margin-top: 12px;
    text-align: center;
}

.upload-form .error {
    color: #ff4d4f;
    margin-top: 12px;
    text-align: center;
}
</style>
