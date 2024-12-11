<script setup lang="ts">
import { useGuideDetail } from '@/ts/pages/guideDetail'
import '@/css/pages/guideDetail.css'

const { guide } = useGuideDetail()
</script>

<template>
  <div class="guide-detail" v-if="guide">
    <div class="guide-header">
      <h1>{{ guide.title }}</h1>
      <div class="meta-info">
        <span>作者: {{ guide.author }}</span>
        <span>发布时间: {{ new Date(guide.publishDate).toLocaleDateString() }}</span>
      </div>
    </div>
    
    <div class="guide-content">
      <img :src="guide.destination.imageUrl" :alt="guide.destination.name">
      <div class="content-text">
        {{ guide.content }}
      </div>
    </div>
  </div>
  <div v-else class="loading">
    加载中...
  </div>
</template> 