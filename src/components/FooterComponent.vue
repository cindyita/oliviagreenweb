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

    <div class="mt-2 d-flex gap-5 justify-content-center align-items-center">

      <a href="#">
        <div class="socialmedia">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
      </a>

      <a href="#">
        <div class="socialmedia">
          <i class="fa-brands fa-twitter"></i>
        </div>
      </a>

      <a href="#">
        <div class="socialmedia">
            <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </a>

    </div>

    <div class="p-4 d-flex gap-5 justify-content-center align-items-center text-center">
      Olivia Green Psycology @ 2023
    </div>

  </footer>
  
</template>

<style scoped>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align:center;
  }
  hr {
    width: 90%;
  }
  .socialmedia {
    font-size:12pt;
    color: var(--primary);
  }
  .socialmedia:hover {
    color: var(--text);
  }
</style>