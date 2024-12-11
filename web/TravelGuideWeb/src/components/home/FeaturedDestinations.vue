<script setup lang="ts">
import { useFeaturedDestinations } from '@/ts/components/featuredDestinations'
import '@/css/components/featuredDestinations.css'

const { destinations } = useFeaturedDestinations()
</script>

<template>
  <section class="featured-destinations">
    <h2>热门目的地</h2>
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
  </section>
</template> 