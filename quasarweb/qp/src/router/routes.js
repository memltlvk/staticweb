
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/aboutus', component: () => import('pages/AboutUs.vue') },
      { path: '/services', component: () => import('pages/Services.vue') },
      { path: '/clients', component: () => import('pages/Clients.vue') },
      { path: '/contactus', component: () => import('pages/Contactus.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
