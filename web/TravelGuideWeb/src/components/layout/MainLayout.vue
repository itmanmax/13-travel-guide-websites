<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import '@/css/components/layout/mainLayout.css'

const router = useRouter()
const collapsed = ref(false)

const menuItems = [
  {
    icon: 'user',
    title: '个人信息',
    path: '/profile'
  },
  {
    icon: 'forum',
    title: '论坛',
    path: '/forum'
  },
  {
    icon: 'compass',
    title: '首页',
    children: [
      {
        title: '施工定位',
        path: '/destinations'
      },
      {
        title: '热门景点',
        path: '/hot-spots'
      }
    ]
  },
  {
    icon: 'service',
    title: '服务',
    path: '/services'
  }
]

const handleMenuClick = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="layout-container">
    <aside class="sidebar" :class="{ collapsed }">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo">
        <span v-if="!collapsed">旅游指南</span>
      </div>
      
      <nav class="menu">
        <div 
          v-for="item in menuItems" 
          :key="item.title"
          class="menu-item"
        >
          <div 
            class="menu-title"
            @click="item.path && handleMenuClick(item.path)"
          >
            <i :class="['icon', `icon-${item.icon}`]"></i>
            <span v-if="!collapsed">{{ item.title }}</span>
          </div>
          
          <div class="submenu" v-if="item.children && !collapsed">
            <div 
              v-for="child in item.children"
              :key="child.title"
              class="submenu-item"
              @click="handleMenuClick(child.path)"
            >
              {{ child.title }}
            </div>
          </div>
        </div>
      </nav>

      <div class="collapse-btn" @click="collapsed = !collapsed">
        <i :class="['icon', collapsed ? 'icon-right' : 'icon-left']"></i>
      </div>
    </aside>

    <div class="main-container">
      <slot></slot>
    </div>
  </div>
</template> 