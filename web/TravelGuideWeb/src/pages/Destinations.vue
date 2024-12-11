<script setup lang="ts">
import SearchBar from '../components/common/SearchBar.vue'
import { useDestinations } from '@/ts/pages/destinations'
import '@/css/pages/destinations.css'

const { destinations, handleSearch } = useDestinations()
</script>

<template>
  <div class="destinations-page">
    <div class="search-section">
      <h1>探索目的地</h1>
      <SearchBar @search="handleSearch" />
    </div>
    
    <div class="destinations-grid">
      <div 
        v-for="dest in destinations" 
        :key="dest.id"
        class="destination-card"
      >
        <div class="card-image">
          <img :src="dest.imageUrl" :alt="dest.name">
        </div>
        <div class="card-content">
          <h3>{{ dest.name }}</h3>
          <p>{{ dest.description }}</p>
          <div class="card-footer">
            <span class="location">{{ dest.location }}</span>
            <span class="rating">{{ dest.rating }}分</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 