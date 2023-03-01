<script>
import { RouterLink } from "vue-router";
export default {
      name: 'menu-primary-component',
      data() {
          return {
          count: 0
          }
      }
}

</script>

<template>
  <ul id="menu-primary-component">
    <router-link to="/about"><li>About me</li></router-link>
    <router-link to="/services"><li>Services</li></router-link>
    <router-link to="/schedule"><li>Schedule</li></router-link>
    <router-link to="/blog"><li>Blog</li></router-link>
    <router-link to="/testimonials"><li>Testimonials</li></router-link>
    <router-link to="/faqs"><li>FaQs</li></router-link>
    <router-link to="/contact"><li>Contact</li></router-link>
  </ul>
</template>
