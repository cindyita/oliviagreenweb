import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/schedule",
      name: "schedule",
      component: () => import("../views/ScheduleView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
    },
    {
      path: "/testimonials",
      name: "testimonials",
      component: () => import("../views/TestimonialsView.vue"),
    },
    {
      path: "/faqs",
      name: "faqs",
      component: () => import("../views/FaqsView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("../views/TermsView.vue"),
    },
  ],
});

export default router;
