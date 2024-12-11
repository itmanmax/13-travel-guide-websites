<script setup lang="ts">
import { useLogin } from '@/ts/pages/login'
import '@/css/pages/login.css'

const { loginForm, handleLogin } = useLogin()
</script>

<template>
  <div class="login-page">
    <h1>登录/注册</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <input v-model="loginForm.username" type="text" placeholder="用户名">
      </div>
      <div class="form-group">
        <input v-model="loginForm.password" type="password" placeholder="密码">
      </div>
      <button type="submit">登录</button>
      <div class="register-link">
        <a href="#">还没有账号？立即注册</a>
      </div>
    </form>
  </div>
</template> 