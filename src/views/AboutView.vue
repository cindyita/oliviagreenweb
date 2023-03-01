<template>

  <div class="about py-5">

    <div class="content d-flex flex-column flex-lg-row justify-content-between gap-4">

      <div class="img d-flex d-lg-none">
        <div class="content"></div>
        <img src="../assets/img/about/person1.jpg">
      </div>
      <div class="d-flex flex-column justify-content-center align-items-start align-items-lg-end p-3 p-lg-5">
        <h1 class="display-banner-ch">About me</h1>
        <h4 class="display-title">Dra. Olivia Green Aline</h4>
        <p>Therapist psychologist</p>
        <hr>
        <p class="text-start text-lg-end">I am a licensed clinical psychologist with experience in providing therapy to individuals, couples, and families. My approach to therapy is grounded in the belief that each person has the potential for growth, and my goal is to help my clients access that potential. With training in Aline Therapy, I offer a unique approach that combines traditional talk therapy with mindfulness and somatic practices to help clients heal from trauma, manage stress, and achieve greater overall well-being.
        <br><br>
        I have worked with clients from a wide range of backgrounds and cultures, and I am dedicated to providing an open, non-judgmental, and supportive environment where clients can feel safe to explore their thoughts, feelings, and experiences.
        <br><br>
        </p>
        <span class="display-title">I look forward to the opportunity to work with you and support you on your own path to healing and growth</span>
      </div>
      <div class="img d-none d-lg-flex">
        <div class="content"></div>
        <img src="../assets/img/about/person1.jpg">
      </div>
      
    </div>
    <!--/About section 1--->

    <div class="spacer"></div>

    <div class="w-100 p-5">

      <div class="row">

        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 text-center">
          <div class="count-box">
            <i class="fa-solid fa-graduation-cap"></i>
            <div>
              <h4 class="display-title" >
              <span :id="contadorId" v-text="contador3"></span> +
              </h4>
            </div>
            <h4>Certificates</h4>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 text-center">
          <div class="count-box">
            <i class="fa-solid fa-book"></i>
            <div>
              <h4 class="display-title" >
              <span :id="contadorId" v-text="contador4"></span> +
              </h4>
            </div>
            <h4>Publications</h4>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 text-center">
          <div class="count-box">
            <i class="fa-solid fa-users"></i>
            <div>
              <h4 class="display-title" >
              <span :id="contadorId" v-text="contador"></span> +
              </h4>
            </div>
            <h4>Patients</h4>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 text-center">
          <div class="count-box">
            <i class="fa-solid fa-clipboard"></i>
            <div>
              <h4 class="display-title" >
              <span :id="contadorId" v-text="contador2"></span> +
              </h4>
            </div>
            <h4>Therapy hours</h4>
          </div>
        </div>

      </div>

    </div>
    <!--/About section 2--->

    <div class="spacer"></div>

    <div id="resume" class="resume">

      <div class="container" data-aos="fade-up">

        <div class="section-title text-center">
          <h2 class="display-section">Resume</h2>
          <p>My academic achievements and professional experience have equipped me with a unique skill set that allows me to approach complex problems from a variety of perspectives. I am eager to leverage my education and professional experience to make a meaningful impact in the lives of those I serve.</p>
        </div>
        <br><br>

        <div class="row">
          <div class="col-lg-6">

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Neuropsychology PhD</h4>
              <h5>2013 - 2017</h5>
              <p><em>Stanford Neuropsychology Program, Stanford, CA</em></p>
              <p>I pursued a PhD in Neuropsychology from the Stanford Neurobiology Program in Stanford, CA. As part of my doctoral research, I focused on studying the effects of stress on the brain. This involved conducting several experiments and analyzing complex data sets.</p>
            </div>
            <div class="resume-item">
              <h4>Clinical psychology</h4>
              <h5>2003 - 2007</h5>
              <p><em>Institute of Psychology University, Atlanta, GE</em></p>
              <p>I completed a specialization in clinical psychology from the Institute of Psychology University in Atlanta, GE. This program was focused on studying the relationship between childhood experiences and mental health issues.</p>
            </div>
            <div class="resume-item">
              <h4>Degree in psychology</h4>
              <h5>1995 - 1999</h5>
              <p><em>Institute of psychology, Orlando, FL</em></p>
              <p>During this time, I gained a strong foundation in the principles and theories of psychology. I took courses in social psychology, developmental psychology, cognitive psychology, and abnormal psychology, among others.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Olivia Green Private clinic</h4>
              <h5>2011 - Present</h5>
              <p><em>Stanford, CA </em></p>
              <ul>
                <li>Worked at a private clinic, providing individual therapy to patients with anxiety disorders, depression, and eating disorders.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Therapy to employees</h4>
              <h5>2007 - 2011</h5>
              <p><em>Stepping Stone, Stanford, CA</em></p>
              <ul>
                <li>Was hired by a technology company to provide counseling and therapy to employees, with the goal of improving emotional well-being and reducing work-related stress.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Clinical internship at a psychiatric hospital</h4>
              <h5>2000 - 2003</h5>
              <p><em>Intership Hospital, Atlanta, GE</em></p>
              <ul>
                <li>Completed a clinical internship at a psychiatric hospital, where provided individual and group therapy to patients with severe mental disorders, such as schizophrenia and bipolar disorder.</li>
                <li>Participated in a research team that focused on the effect of cognitive-behavioral therapy on social anxiety.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
    <!--/About section 3--->

    <div class="spacer"></div>
    
  </div>

</template>

<style>
  .about {
    height: 100%;
  }
  .about .content div {
      width: 50%;
  }
  .about .img {
    border-radius:50px;
    position: relative;
  }
  .about .img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:50px;
    z-index:1;
  }
  .about .img .content{
  background: rgb(145,128,238);
  background: linear-gradient(0deg, rgba(145,128,238,0.2) 0%, rgba(145,128,238,0.30155812324929976) 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius:50px;
    z-index:2;
  }
  .about .content {
    width: 100%;
  }

  .count-box i {
    margin-bottom:13px;
    font-size: 24px;
    background: var(--primary);
    color: var(--font);
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
  }

  /*--------------------------------------------------------------
# Resume
--------------------------------------------------------------*/
.resume .resume-title {
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
}
.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid var(--primary);
  position: relative;
}
.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 10px;
}
.resume .resume-item h5 {
  font-size: 16px;
  padding: 5px 0;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}
.resume .resume-item ul {
  padding-left: 20px;
}
.resume .resume-item ul li {
  padding-bottom: 10px;
}
.resume .resume-item:last-child {
  padding-bottom: 0;
}
.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: var(--primary);
}


  @media (max-width: 1200px) {
    .about .content div {
      width: 100%;
    }
  }
</style>

<script>

export default {
  name: 'about-component',
  data() {
    return {
      contadorId: 'contador',
      contador: 200,
      contador2: 1299,
      contador3: 1,
      contador4: 20
    }
  },
  mounted() {
  this.observer = new IntersectionObserver(this.handleIntersect, {
    rootMargin: "0px",
    threshold: 1.0
  });

  this.$nextTick(() => {
    this.observer.observe(document.getElementById(this.contadorId));
  });
  },
  methods: {
    handleIntersect(entries) {
      if (entries[0].isIntersecting) {
        let interval = setInterval(() => {
          if (this.contador < 300) {
            this.contador++;
          }
          if (this.contador2 < 1500) {
            this.contador2++;
          }
          if (this.contador3 < 8) {
            this.contador3++;
          }
          if (this.contador4 < 36) {
            this.contador4++;
          }
        }, 10);
      }
    }
  }

}

</script>
