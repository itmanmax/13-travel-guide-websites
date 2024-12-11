<script setup lang="ts">
import { useProfile } from '@/ts/pages/profile'
import '@/css/pages/profile.css'

const { 
  userInfo, 
  isEditing, 
  toggleEdit, 
  handleSave, 
  handleAvatarChange 
} = useProfile()
</script>

<template>
  <div class="profile-page">
    <div class="profile-header">
      <div class="avatar-container">
        <img :src="userInfo.avatar" :alt="userInfo.username">
        <input 
          type="file" 
          accept="image/*" 
          @change="handleAvatarChange" 
          class="avatar-input"
        >
      </div>
      <h1>{{ userInfo.username }}的个人主页</h1>
    </div>

    <div class="profile-content">
      <div class="profile-section">
        <div class="section-header">
          <h2>基本信息</h2>
          <button @click="toggleEdit" class="edit-btn">
            {{ isEditing ? '取消' : '编辑' }}
          </button>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <label>用户名</label>
            <input 
              v-if="isEditing" 
              v-model="userInfo.username" 
              type="text"
            >
            <span v-else>{{ userInfo.username }}</span>
          </div>
          <div class="info-item">
            <label>邮箱</label>
            <input 
              v-if="isEditing" 
              v-model="userInfo.email" 
              type="email"
            >
            <span v-else>{{ userInfo.email }}</span>
          </div>
          <div class="info-item">
            <label>电话</label>
            <input 
              v-if="isEditing" 
              v-model="userInfo.phone" 
              type="tel"
            >
            <span v-else>{{ userInfo.phone }}</span>
          </div>
        </div>

        <button 
          v-if="isEditing" 
          @click="handleSave" 
          class="save-btn"
        >
          保存修改
        </button>
      </div>
    </div>
  </div>
</template> 