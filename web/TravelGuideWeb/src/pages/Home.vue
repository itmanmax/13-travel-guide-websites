<script setup lang="ts">
import FeaturedDestinations from '../components/home/FeaturedDestinations.vue'
import SearchBar from '../components/common/SearchBar.vue'
import '@/css/pages/home.css'
</script>

<template>
  <div class="home">
    <section class="hero">
      <h1>发现精彩旅程</h1>
      <SearchBar />
    </section>
    <FeaturedDestinations />
  </div>
</template> 