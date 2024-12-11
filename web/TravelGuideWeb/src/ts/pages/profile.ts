import { ref } from 'vue'

interface UserInfo {
  username: string
  email: string
  phone: string
  avatar: string
}

export function useProfile() {
  const userInfo = ref<UserInfo>({
    username: '旅行者',
    email: 'traveler@example.com',
    phone: '13800138000',
    avatar: '/images/default-avatar.jpg'
  })

  const isEditing = ref(false)

  const toggleEdit = () => {
    isEditing.value = !isEditing.value
  }

  const handleSave = async () => {
    // TODO: 实现保存逻辑
    console.log('保存用户信息:', userInfo.value)
    isEditing.value = false
  }

  const handleAvatarChange = (event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          userInfo.value.avatar = e.target.result as string
        }
      }
      reader.readAsDataURL(input.files[0])
    }
  }

  return {
    userInfo,
    isEditing,
    toggleEdit,
    handleSave,
    handleAvatarChange
  } satisfies {
    userInfo: typeof userInfo
    isEditing: typeof isEditing
    toggleEdit: () => void
    handleSave: () => Promise<void>
    handleAvatarChange: (event: Event) => void
  }
} 