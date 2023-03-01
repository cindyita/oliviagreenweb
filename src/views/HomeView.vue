
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
              <br><br class="d-none d-xl-block">
              <div>
                <button class="button-primary">Book a session</button>
              </div>
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
              <br><br class="d-none d-xl-block">
              <div>
                <button class="button-primary">Book a session</button>
              </div>
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
              <br><br class="d-none d-xl-block">
              <div>
                <button class="button-primary">Book a session</button>
              </div>
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

  <div class="banner1">
    <div class="content"></div>
    <h2 class="display-section">
      It's okay to not feel okay
    </h2>
    <p>
      Negative emotions are a natural part of the human experience, and learning to manage and work through them can lead to personal growth and resilience.
    </p>
  </div>

  <div class="spacer"></div>

  <div class="container-fluid">
    <div class="container">
      <h2 class="pb-5 pt-2 display-section text-center">HOW TO BOOK A SESSION</h2>
      <!------------>
      <div class="row align-items-center how-it-works">
        <div class="col-2 text-center bottom">
          <div class="circle">1</div>
        </div>
        <div class="col-6">
          <h5>Shedule day and hour</h5>
          <p>Click on schedule in the menu and choose a day and time that is available, choose if you want the session online or in person.</p>
        </div>
      </div>
      <!------------>
      <div class="row timeline">
        <div class="col-2">
          <div class="corner top-right"></div>
        </div>
        <div class="col-8">
          <hr/>
        </div>
        <div class="col-2">
          <div class="corner left-bottom"></div>
        </div>
      </div>
      <!------------>
      <div class="row align-items-center justify-content-end how-it-works">
        <div class="col-6 text-end">
          <h5>Answer a form</h5>
          <p>Answer a questionnaire that will help me to know a little more about you and prepare the session in the best way.</p>
        </div>
        <div class="col-2 text-center full">
          <div class="circle">2</div>
        </div>
      </div>
      <!------------>
      <div class="row timeline">
        <div class="col-2">
          <div class="corner right-bottom"></div>
        </div>
        <div class="col-8">
          <hr/>
        </div>
        <div class="col-2">
          <div class="corner top-left"></div>
        </div>
      </div>
      <!------------>
      <div class="row align-items-center how-it-works">
        <div class="col-2 text-center top">
          <div class="circle">3</div>
        </div>
        <div class="col-6">
          <h5>Wait for a response</h5>
          <p>Once you schedule it, your session is not yet confirmed, wait for a confirmation email.</p>
        </div>
      </div>
    </div>

    <div class="text-center mt-5 pt-2">
      <button class="btn button-outline-g">Book a session</button>
    </div>

  </div>

  <div class="spacer"></div>

  <div class="testimonialsSlider text-center">
    <span class="display-section">TESTIMONIALS</span>
    <br><br>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper pb-5"
    >
      <swiper-slide>
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
      </swiper-slide>
      <swiper-slide>
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
      </swiper-slide>
      <swiper-slide>
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
      </swiper-slide>
      <swiper-slide>
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
      </swiper-slide>
      <swiper-slide>
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
      </swiper-slide>

    </swiper>
    <br><br>
    <button class="btn button-primary">View more</button>
  </div>

  <div class="spacer"></div>

  <div class="testimonialsSlider text-center">
    <span class="display-section">LASTEST POSTS</span>
    <br><br><br>
    <div class="d-flex gap-4 flex-wrap justify-content-center align-items-center">
      <div class="card-secondary card">
        <div class="img-post"><img src="../assets/img/post/1.jpg"></div>
        <div class="img-post-text">
          <span class="text-mute">
            <a href="#">Therapy</a> | 
            <a href="#">Anxiety</a>
          </span>
          <strong class="title text-start">Understanding Anxiety: Symptoms, Causes and Treatment Options</strong>
          <p>Anxiety can manifest in many different ways, including physical symptoms such as rapid heartbeat, sweating, and muscle tension[...]</p>
        </div>
        <div class="viewmore"><button class="btn button-outline">View more</button></div>
      </div>
      <div class="card-secondary card">
        <div class="img-post"><img src="../assets/img/post/2.jpg"></div>
        <div class="img-post-text">
          <span class="text-mute">
            <a href="#">News</a> | 
            <a href="#">Therapy</a> | 
            <a href="#">Childhood</a>
          </span>
          <strong class="title text-start">Helping Children Cope: Strategies for Supporting</strong>
          <p>As a parent, you want to do everything you can to support your child's mental health and well-being. Here are some strategies[...]</p>
        </div>
        <div class="viewmore"><button class="btn button-outline">View more</button></div>
      </div>
      <div class="card-secondary card">
        <div class="img-post"><img src="../assets/img/post/3.jpg"></div>
        <div class="img-post-text">
          <span class="text-mute">
            <a href="#">Therapy</a> | 
            <a href="#">Group therapy</a>
          </span>
          <strong class="title text-start">How Group Therapy Can Help You Improve Your Mental Health</strong>
          <p>Support and Validation from Peers: Group therapy provides a safe and supportive environment where you can connect[...]</p>
        </div>
        <div class="viewmore"><button class="btn button-outline">View more</button></div>
      </div>
      <div class="card-secondary card">
        <div class="img-post"><img src="../assets/img/post/4.jpg"></div>
        <div class="img-post-text">
          <span class="text-mute">
            <a href="#">News</a> | 
            <a href="#">Study</a>
          </span>
          <strong class="title text-start">Study Shows the Power of Positive Thinking: Optimism</strong>
          <p>A recent study published in the journal JAMA Network Open has found that a positive outlook on life may be linked to a lower risk of heart[...]</p>
        </div>
        <div class="viewmore"><button class="btn button-outline">View more</button></div>
      </div>
      <div class="card-secondary card">
        <div class="img-post"><img src="../assets/img/post/6.jpg"></div>
        <div class="img-post-text">
          <span class="text-mute">
            <a href="#">Therapy</a> | 
            <a href="#">Opinion</a>
          </span>
          <strong class="title text-start">How Practicing Gratitude Can Improve Your Mental Health</strong>
          <p>Gratitude has numerous benefits for mental health, including increased happiness, greater satisfaction with life[...]</p>
        </div>
        <div class="viewmore"><button class="btn button-outline">View more</button></div>
      </div>
      <div class="card-secondary card">
        <div class="img-post"><img src="../assets/img/post/5.jpg"></div>
        <div class="img-post-text">
          <span class="text-mute">
            <a href="#">News</a> | 
            <a href="#">Therapy</a> | 
            <a href="#">Childhood</a>
          </span>
          <strong class="title text-start">Why Emotional Health in Childhood Matters</strong>
          <p>Emotional health is an important aspect of overall well-being, and this is especially true in childhood. Children who have a strong emotional[...]</p>
        </div>
        <div class="viewmore"><button class="btn button-outline">View more</button></div>
      </div>

    </div>
    <br>

    <button class="btn button-primary mt-5">View all posts</button>
    
  </div>

  <div class="spacer"></div>

  <div class="form-contact w-100 d-flex justify-content-center d-none">
    <form class="card-primary">
      <h2 class="display-section text-center">Contact</h2>
      <div class="mb-2 mt-3">
        <label class="form-label">Name:</label>
        <input type="name" class="form-control" placeholder="Enter name">
      </div>
      <div class="mb-2 mt-3">
        <label class="form-label">Email:</label>
        <input type="email" class="form-control" placeholder="Enter email">
      </div>
      <div class="mb-2 mt-3">
        <label class="form-label">Select requirment:</label>
        <select class="form-select">
          <option>Book a session</option>
          <option>View Case</option>
          <option>Sugesttion</option>
          <option>Contact</option>
        </select>
      </div>

      <div class="mb-2 mt-3">
        <label class="mb-2">Comments:</label>
        <textarea class="form-control" rows="5"></textarea>
      </div>
       
      <div class="text-center">
        <button class="btn button-primary mt-4">Submit</button>
      </div>
    </form>
  </div>

  <div class="spacer"></div>

  <div class="suscribe">
    <div class="card-primary d-flex align-items-center">
      <h1 class="display-section text-center">
        Suscribe our newsletter
        <p>For recieve the news of psychologist and new post alerts.</p>
      </h1>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Your Email">
        <span class="input-group-text cursor-pointer">Send</span>
      </div>
      <br>
    </div>
  </div>
  <br>
  
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
  .banner1 {
    width: 100%;
    height: 500px;
    padding: 50px;
    text-align:center;
    border-radius: 50px;
    background-image: url(../assets/img/cards/bannerimg/banner1.jpg);
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
  }
  .banner1 .content {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background: rgb(207,239,251);
    background: linear-gradient(0deg, rgba(207,239,251,0.4) 0%, rgba(207,239,251,0.5) 50%, rgba(169,156,236,0.7) 100%);
  }
  .banner1 h2,.banner1 p {
    color:white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  }
  /*-----------------------------------*/
  .circle {
    font-weight: bold;
    padding: 13px 20px 14px;
    border-radius: 50%;
    background-color: var(--primary);
    color: white;
    max-height: 50px;
    z-index: 2;
  }

  .how-it-works.row {
    display: flex;
  }
  .how-it-works.row .col-2 {
    display: inline-flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
  }
  .how-it-works.row .col-2::after {
    content: "";
    position: absolute;
    border-left: 3px solid var(--primary);
    z-index: 1;
  }
  .how-it-works.row .col-2.bottom::after {
    height: 50%;
    left: 50%;
    top: 50%;
  }
  .how-it-works.row .col-2.full::after {
    height: 100%;
    left: calc(50% - 3px);
  }
  .how-it-works.row .col-2.top::after {
    height: 50%;
    left: 50%;
    top: 0;
  }
  .timeline div {
    padding: 0;
    height: 40px;
  }
  .timeline hr {
    border-top: 3px solid var(--primary);
    margin: 0;
    top: 17px;
    position: relative;
  }
  .timeline .col-2 {
    display: flex;
    overflow: hidden;
  }
  .timeline .corner {
    border: 3px solid var(--primary);
    width: 100%;
    position: relative;
    border-radius: 15px;
  }
  .timeline .top-right {
    left: 50%;
    top: -50%;
  }
  .timeline .left-bottom {
    left: -50%;
    top: calc(50% - 3px);
  }
  .timeline .top-left {
    left: -50%;
    top: -50%;
  }
  .timeline .right-bottom {
    left: 50%;
    top: calc(50% - 3px);
  }
  /*-----------------------------------*/
  .testimonial-card p{
    color:var(--primary);
  }
  .testimonial-card span {
    display: flex;
    justify-content: center;
    align-items:center;
    gap:10px;
  }
  .testimonial-card .fa-circle {
    font-size: 5pt;
  }
  .testimonialsSlider .card{
    width: 25%;
  }
  .form-contact form {
    width:50%;
  }

  .suscribe .input-group {
    width:70%;
  }
  .suscribe input {
    padding: 10px 20px;
    border-radius:35px;
    color: var(--primary);
    border: 2px solid var(--primary);
  }
  .suscribe span {
    background-color: var(--primary);
    color:white;
    border:0;
    padding: 0 25px;
    border-radius: 0 35px 35px 0;
  }
  /*-----------------------------------*/
  /*------------RESPONSIVE-------------*/
  /*-----------------------------------*/

  @media (max-width: 1440px){
    .services-card {
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
      gap: 50px;
      text-align:center;
    }
    .testimonialsSlider .card{
      width: 50%;
    }
  }
  @media (max-width: 1200px){ /* laptop CH */
    .services-card {
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      padding: 0 5%;
      gap: 50px;
    }
    .services-card .card-primary {
      height:100%;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    .services-card .card-primary img {
      width:50%;
    }
    .aboutme-card {
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:50px;
    }
    .aboutme-card div {
      width:100% !important;
    }
    .aboutme-card .content-image img{
      width: 70%;
    }
    .aboutme-card .content-text {
      text-align:center;
      padding: 0 20px;
    }
    .testimonialsSlider .card{
      width: 70%;
    }
    .form-contact form {
      width:100%;
    }
  }
  @media (max-width: 500px){ /* Mobile */
    .services-card .card-primary img {
      width:100%;
    }
    .aboutme-card .content-image img{
      width: 100%;
    }
    .aboutme-card .content-text {
      text-align:center;
      padding: 0;
    }
    .aboutme-card .content-text p{
      margin-top: 15px;
    }
    .testimonialsSlider .card{
      width: 100%;
    }
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
    name: 'home-component',
      components: {
          Swiper,
          SwiperSlide,
        },
        setup() {
          return {
            modules: [Autoplay, Pagination],
          };
        }
  };

</script>
