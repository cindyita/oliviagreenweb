<script setup>
  import { RouterLink, RouterView } from "vue-router";

  const title = "Olivia Green";
</script>

<template>

  <div class="content-main p-5">
    <header class="d-flex px-5">
      <div class="logo">
        <img src="../src/assets/identity/icon-logo2.png">
        <div class="text">{{ title }}</div>
      </div>

      <div class="menu">
        <ul>
          <a href="#"><li>About me</li></a>
          <a href="#"><li>Services</li></a>
          <a href="#"><li>Schedule</li></a>
          <a href="#"><li>Blog</li></a>
          <a href="#"><li>Testimonials</li></a>
          <a href="#"><li>FaQs</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </div>

      <div class="wrapper">
        <button class="btn button-outline">Log in / Sign up</button>
      </div>
    </header>

    <div class="px-5">
      <RouterView />
    </div>
  </div>
  
</template>