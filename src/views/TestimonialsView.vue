<template>

  <div class="testimonials py-5 d-flex flex-column align-items-center w-100">
      
    <span class="display-section mb-2">Testimonials</span>

    <button class="button-primary mb-5" id="show-modal-testimonial" @click="showModalTestimonial = true">Write a testimonial</button>

    <div class="d-flex flex-wrap gap-3 gap-xxl-4 justify-content-center justify-content-xxl-start w-100">

      <div class="card-primary testimonial-card">
        <p>
        <i class="fa-solid fa-quote-left"></i>
          Working with Olivia Green has truly been life-changing for me. Their empathy, expertise, and guidance have helped me navigate through difficult times and gain a deeper understanding of myself. I highly recommend their services to anyone seeking professional help...
        <i class="fa-solid fa-quote-right"></i></p>
        <span>
          <i class="fa-solid fa-pencil"></i>
            Ryan Gray
        </span>
      </div>

      <div class="card-primary testimonial-card">
        <p>
        <i class="fa-solid fa-quote-left"></i>
        I had been struggling with anxiety and depression for years before I found Olivia Green. Their therapy sessions provided a safe and supportive space for me to address my issues and work on developing coping skills. I am grateful for their compassionate approach...
        <i class="fa-solid fa-quote-right"></i></p>
        <span>
          <i class="fa-solid fa-pencil"></i>
          Wensen Holiseo
        </span>
      </div>

      <div class="card-primary testimonial-card">
        <p>
        <i class="fa-solid fa-quote-left"></i>
          As someone who was skeptical about therapy, I was pleasantly surprised by my experience with Olivia Green. They created a comfortable and non-judgmental atmosphere that allowed me to open up about my struggles. Their insights and tools have helped me overcome...
        <i class="fa-solid fa-quote-right"></i></p>
        <span>
          <i class="fa-solid fa-pencil"></i>
            Michelle Tyson
        </span>
      </div>

      <div class="card-primary testimonial-card">
        <p>
        <i class="fa-solid fa-quote-left"></i>
          I cannot recommend Olivia Green enough. They are a true professional who is knowledgeable, kind, and compassionate. Their guidance and support have helped me overcome obstacles and lead a more fulfilling life. Thank you for everything...
        <i class="fa-solid fa-quote-right"></i></p>
        <span>
          <i class="fa-solid fa-pencil"></i>
            Richard Lopez
        </span>
      </div>

      <div class="card-primary testimonial-card">
        <p>
        <i class="fa-solid fa-quote-left"></i>
          I had been seeing Olivia Green for several months and I can honestly say it has been one of the best decisions I've made for my mental health. They have helped me process past traumas, understand my thought patterns, and develop effective coping strategies...
        <i class="fa-solid fa-quote-right"></i></p>
        <span>
          <i class="fa-solid fa-pencil"></i>
            Kate Parson
        </span>
      </div>

    </div>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal-component :show="showModalTestimonial" @close="showModalTestimonial = false">
      <template #header>
        <h3>Write a testimonial</h3>
      </template>
      <template #body>

        <div>

          <div class="mb-2">
            <label>Your full name:</label>
            <input class="input" type="text" placeholder="Your name">
          </div>

          <div class="mb-2">
            <label>Your email:</label>
            <input class="input" type="email" placeholder="Your email">
          </div>

          <div class="mb-2">
            <label>Testimonial:</label>
            <textarea class="textarea" rows="5" placeholder="Your testimonials"></textarea>
          </div>

        </div>

      </template>
      <template #btn>Send</template>
    </modal-component>
  </Teleport>

  <div class="spacer"></div>

</template>

<style scoped>
  .testimonial-card {
    width:32%;
  }
  .testimonial-card p {
    text-align: center;
  }

  @media (max-width: 1024px){ /* laptop */
    .testimonial-card {
      width:48%;
    }
  }
  @media (max-width: 700px){ /* laptop */
    .testimonial-card {
      width:90%;
    }
  }

</style>

<script>
import ModalComponent from '../components/ModalComponent.vue';
  
  export default {
    name: 'testimonials-component',
    components: {
        ModalComponent
  },
    data() {
        return {
          showModalTestimonial: false,
      }
    }
  }
</script>