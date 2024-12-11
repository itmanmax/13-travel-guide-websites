import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Destinations from '../pages/Destinations.vue'
import Services from '../pages/Services.vue'
import ServiceSettings from '../pages/ServiceSettings.vue'
import ServiceRequest from '../pages/ServiceRequest.vue'
import Profile from '../pages/Profile.vue'
import Forum from '../pages/Forum.vue'
import ForumPost from '../pages/ForumPost.vue'
import Login from '../pages/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destinations',
    name: 'Destinations',
    component: Destinations
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/services/settings',
    name: 'ServiceSettings',
    component: ServiceSettings
  },
  {
    path: '/services/request',
    name: 'ServiceRequest',
    component: ServiceRequest
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  },
  {
    path: '/forum/post/:id',
    name: 'ForumPost',
    component: ForumPost
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default routes 