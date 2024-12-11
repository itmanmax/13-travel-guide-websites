<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <div class="container nav-container">
      <RouterLink to="/" class="logo">
        旅游攻略
      </RouterLink>
      
      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/destinations">目的地</RouterLink>
        <RouterLink to="/guides">攻略</RouterLink>
        <RouterLink to="/community">社区</RouterLink>
      </div>
    </div>
  </nav>
</template> 