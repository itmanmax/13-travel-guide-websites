import { ref } from 'vue'
import { useRouter, type RouteLocationRaw } from 'vue-router'

interface LoginForm {
  username: string
  password: string
}

export function useLogin() {
  const router = useRouter()
  const loginForm = ref<LoginForm>({
    username: '',
    password: ''
  })

  const handleLogin = async () => {
    console.log('登录信息:', loginForm.value)
    await router.push({ path: '/' } as RouteLocationRaw)
  }

  return {
    loginForm,
    handleLogin
  } satisfies {
    loginForm: typeof loginForm
    handleLogin: () => Promise<void>
  }
} 