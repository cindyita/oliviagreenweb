<script setup>

</script>

<template>

  <div class="slider">
    <swiper
        :spaceBetween="70"

        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 4500,
          disableOnInteraction: false
        }"
        :modules="modules"
        class="swiperHome"
      >

        <swiper-slide>
          <div class="slide-card">
            <div class="content-text text-start">
              <span class="display-title">THE THERAPY YOU NEED</span>
              <h1 class="display-banner">Learn to manage<br> your emotions</h1>
              <p>Find inner peace and learn to manage your emotions with the help of a professional psychologist. Schedule an appointment today and start your journey towards wellness.</p>
              <br><br>
              <button class="button-primary">Book a session</button>
            </div>
            <div class="content-image">
              <div>
                <img src="../assets/img/slider/img1.png">
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="slide-card">
            <div class="content-text text-start">
              <span class="display-title">THE THERAPY YOU NEED</span>
              <h1 class="display-banner">You're not alone<br> I can help you</h1>
              <p>Feeling anxious, stressed, or depressed? You're not alone. Together, we can work to overcome your challenges and achieve a more fulfilling life. Contact me to book a therapy session.</p>
              <br><br>
              <button class="button-primary">Book a session</button>
            </div>
            <div class="content-image">
              <div>
                <img src="../assets/img/slider/img2.png">
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="slide-card">
            <div class="content-text text-start">
              <span class="display-title">THE THERAPY YOU NEED</span>
              <h1 class="display-banner">A safe and<br> respectful environment</h1>
              <p>Sometimes, life's difficulties can make us feel overwhelmed. we can explore the challenges you face and work together to find practical solutions.</p>
              <br><br>
              <button class="button-primary">Book a session</button>
            </div>
            <div class="content-image">
              <div>
                <img src="../assets/img/slider/img3.png">
              </div>
            </div>
          </div>
        </swiper-slide>
        
      </swiper>
  </div>

  <div class="spacer"></div>

  <div class="services-card">
    <div class="card-primary">
      <img src="../assets/img/cards/types/individual2.png">
      <span class="display-title">INDIVIDUAL THERAPY</span>
      <p>Is a type of mental health treatment that involves meeting one-on-one with a trained therapist. The goal of individual therapy is to help people gain insight into their thoughts, feelings, and behaviors, and develop effective coping skills to manage their symptoms.</p>
    </div>
    <div class="card-primary">
      <img src="../assets/img/cards/types/group2.png">
      <span class="display-title">GROUP SESSIONS</span>
      <p>Is a form of mental health treatment that involves meeting with a therapist and a group of individuals who share similar experiences or concerns. The goal of group therapy is to provide a supportive and safe environment for people to explore their thoughts, feelings, and behaviors.</p>
    </div>
    <div class="card-primary">
      <img src="../assets/img/cards/types/online2.png">
      <span class="display-title">ONLINE THERAPY</span>
      <p>In Online therapy sessions, you can receive therapy from anywhere with an internet connection, making it a convenient option for people who may have difficulty attending in-person sessions, such as those who live in remote areas or have mobility issues.</p>
    </div>
  </div>

  <div class="spacer"></div>

  <div class="aboutme-card">
    <div class="content-image w-50">
      <img src="../assets/img/cards/about/tasks.png">
    </div>
    <div class="content-text w-50">
      <span class="display-section">ABOUT ME AND MY WORK</span>
      <p>As a certified psychologist providing therapy, I can tell you that my job involves helping people understand and overcome the emotional and mental challenges.
      <br>
      I believe in a personalized and patient-centered approach to therapy, which tailors to the individual needs of each person. My aim is to provide a safe and compassionate environment for my patients, helping them to better understand their thoughts and feelings, and find effective ways to address the challenges they face.
      Know more about my education and my work.</p>
      <br>
      <button class="btn button-primary">View more</button>
    </div>
    
  </div>

  <div class="spacer"></div>

  <div>Here the footer component</div>
  
</template>

<style scoped>
  .services-card {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    gap: 50px;
    text-align:center;
  }
  .services-card .card-primary {
    height:700px;
  }
  .aboutme-card {
    display:flex;
    justify-content: center;
    align-items: center;
    gap:50px;
  }
  .aboutme-card .content-image {
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .aboutme-card .content-image img{
    width: 70%;
  }
  .aboutme-card .content-text {
    text-align:end;
    padding-right:90px;
  }

</style>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/effect-fade";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import { Autoplay, Pagination } from "swiper";
  
  export default {
    components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Autoplay, Pagination],
        };
      },
  };
</script>
