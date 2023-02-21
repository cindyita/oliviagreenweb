<script>
export default {
    name: 'footer-component',
    data() {
        return {
        count: 0
        }
    }
    }
</script>

<template>
  <footer id="footer-component">
    <hr>
    <div class="p-4">
      Olivia Green Psycology @ 2023
    </div>
  </footer>
  
</template>

<style scoped>
  footer,footer div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align:center;
  }
  hr {
    width: 80%;
  }
</style>