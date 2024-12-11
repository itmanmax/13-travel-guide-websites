import { ref } from 'vue'
import type { Destination } from '@/ts/types'

export function useFeaturedDestinations() {
  const destinations = ref<Destination[]>([
    {
      id: 1,
      name: '巴厘岛',
      description: '印度尼西亚最受欢迎的旅游目的地',
      imageUrl: '/images/bali.jpg',
      rating: 4.8,
      location: '印度尼西亚'
    },
    {
      id: 2,
      name: '京都',
      description: '日本古都，文化与现代的完美融合',
      imageUrl: '/images/kyoto.jpg',
      rating: 4.9,
      location: '日本'
    }
  ])

  return {
    destinations
  }
} 