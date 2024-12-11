import { ref } from 'vue'

export interface Destination {
  id: number
  name: string
  description: string
  location: string
  rating: number
  imageUrl: string
}

export function useDestinations() {
  const destinations = ref<Destination[]>([
    {
      id: 1,
      name: '东京',
      description: '日本最大的都市，现代与传统的完美融合',
      location: '日本',
      rating: 4.8,
      imageUrl: '/images/tokyo.jpg'
    }
  ])

  const handleSearch = (searchText: string) => {
    console.log('搜索:', searchText)
    // TODO: 实现搜索逻辑
  }

  return {
    destinations,
    handleSearch
  }
} 