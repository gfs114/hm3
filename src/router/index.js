import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Article from '@/views/Article.vue'
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirct: '/article',
    children: [
      { path: '/article', component: Article },
      { path: '/collect', component: Collect },
      { path: '/like', component: Like },
      { path: '/user', component: User }
    ]
  },
  {
    path: "/detail/:id",
    component: ArticleDetail
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import('@/views/NotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
