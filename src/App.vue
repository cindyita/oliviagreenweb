<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import footerComponent from '@/components/footerComponent.vue';
  import menuPrimaryComponent from '@/components/menuPrimaryComponent.vue';

  const title = "Olivia Green";
</script>

<template>


  <div class="content-main py-4 px-1 p-lg-5">
    <header class="d-flex px-4 px-lg-5 w-100 align-items-center justify-content-between">
      <router-link to="/">
        <div class="logo">
          <img src="../src/assets/identity/icon-logo2.png">
          <div class="text d-none d-lg-flex">{{ title }}</div>
        </div>
      </router-link>

      <div class="menu d-none d-xl-flex">
        <menu-primary-component />
      </div>

      <div class="d-flex justify-content-end align-items-center gap-3">
        <div class="wrapper">
          <router-link to="/login">
            <button class="btn button-outline d-none d-lg-flex">Log in / Sign up</button>
          </router-link>
          <router-link to="/login">
            <button class="btn button-menu-outline d-flex d-lg-none">
              <i class="fa-solid fa-user"></i>
            </button>
          </router-link>
        </div>

        <button type="button" class="btn button-menu-primary d-block d-xl-none" data-bs-toggle="collapse" data-bs-target="#menuMobile">
          <i class="fa-solid fa-bars-staggered"></i>
        </button>
      </div>

    </header>
    <div id="menuMobile" class="collapse text-center menu-vertical">
      <div>
        <menu-primary-component />
      </div>
    </div>

    <div class="content-all px-3 px-lg-5">
      <transition name="slide-fade">

        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>

      </transition>
    </div>

    <footer-component />

  </div>
  
</template>

<style scoped>
  header {
    padding-bottom: 25px;
  }
  content-all {
    min-height: 100vh;
  }
  /* Transition */
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }


</style>