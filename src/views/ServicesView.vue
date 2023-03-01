<template>

  <div class="services py-5 d-flex flex-column align-items-center">
    <h3 class="display-section">My Services</h3>

    <div class="d-flex flex-wrap gap-5 mt-4">

      <div class="d-flex justify-content-center align-items-center flex-column flex-lg-row gap-3 service-card">
        <div class="d-flex justify-content-center align-items-center"><img src="../assets/img/services/terapia1.png"></div>
        <div>
          <h4 class="display-title">Individual therapy</h4>
          <p>
          Individual therapy is a type of therapy in which a client meets one-on-one with a licensed therapist to work through a wide range of mental health and emotional issues. In this type of therapy, the therapist provides a safe, non-judgmental space for the client to talk about their thoughts, feelings, and experiences.<br><br>
          During the first session, the therapist typically conducts an initial assessment to better understand the client's concerns and goals for therapy. Based on this assessment, the therapist and client work together to create a treatment plan that is tailored to the client's specific needs and goals.
          </p>
          <div class="text-center text-lg-start">
            <button class="btn button-primary">Book a session</button>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center flex-column-reverse flex-lg-row gap-3 service-card">
        <div>
          <h4 class="display-title text-start text-lg-end">Couple therapy</h4>
          <p class="text-start text-lg-end">
          Couple therapy, also known as couples counseling, is a form of therapy that helps couples improve their communication, resolve conflicts, and strengthen their relationship. The goal of couple therapy is to create a safe and supportive space for partners to work through their issues and develop skills to enhance their relationship.<br><br>
          In couple therapy, both partners attend sessions together with a licensed therapist. The therapist will listen to each partner's perspective, identify patterns of communication or behavior that may be contributing to difficulties, and help the couple develop strategies to address those issues.
          </p>
          <div class="text-center text-lg-end w-100">
            <button class="btn button-primary">Book a session</button>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center"><img src="../assets/img/services/terapia2.png"></div>
      </div>

      <div class="d-flex justify-content-center align-items-center flex-column flex-lg-row gap-3 service-card">
        <div class="d-flex justify-content-center align-items-center"><img src="../assets/img/services/terapia3.png"></div>
        <div>
          <h4 class="display-title">Family therapy</h4>
          <p>
          Family therapy is a type of therapy that focuses on improving communication and relationships between family members. The goal of family therapy is to help families develop healthy communication patterns, resolve conflicts, and build stronger, more positive relationships.<br><br>
          In family therapy, all members of the family attend sessions together with a licensed therapist. The therapist helps the family identify patterns of communication or behavior that may be contributing to difficulties and guides the family in developing strategies to address those issues.
          </p>
          <div class="text-center text-lg-start">
            <button class="btn button-primary">Book a session</button>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center flex-column-reverse flex-lg-row gap-3 service-card">
        <div>
          <h4 class="display-title text-start text-lg-end">Online therapy</h4>
          <p class="text-start text-lg-end">
          Online therapy, also known as teletherapy or virtual therapy, is a type of therapy that is conducted over the internet. Online therapy has become increasingly popular in recent years due to its convenience and accessibility, particularly for individuals who may have difficulty accessing traditional in-person therapy due to geographical or logistical barriers.<br><br>
          Online therapy sessions can be conducted through a variety of platforms, such as video conferencing software or messaging platforms. Clients can attend therapy sessions from the comfort of their own home, office, or any other private location with a reliable internet connection.
          </p>
          <div class="text-center text-lg-end w-100">
            <button class="btn button-primary">Book a session</button>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center"><img src="../assets/img/services/terapia4.png"></div>
      </div>

      <div class="d-flex justify-content-center align-items-center flex-column flex-lg-row gap-3 flex-reverse service-card">
        <div class="d-flex justify-content-center align-items-center"><img src="../assets/img/services/terapia5.png"></div>
        <div>
          <h4 class="display-title">Group therapy</h4>
          <p>
          Group therapy is a type of therapy that involves multiple clients working together with a licensed therapist. Group therapy can be an effective way to address a wide range of mental health concerns, including depression, anxiety, addiction, and trauma.<br><br>
          In group therapy, clients attend sessions together with a licensed therapist and other group members. The therapist leads the group in discussions and activities designed to help clients address their concerns and develop skills to improve their mental health.
          </p>

          <div class="text-center text-lg-start">
            <button class="btn button-primary">Book a session</button>
          </div>

        </div>
      </div>

    </div>

  </div>

  <div class="spacer"></div>

</template>

<style scoped>
  .service-card {
    width: 100%;
  }
  .service-card div {
    width: 50%;
  }
  .service-card div img {
    width: 70%;
  }
    /*-----------------------------------*/
    /*------------RESPONSIVE-------------*/
    /*-----------------------------------*/

    @media (max-width: 1400px){ /* laptop */
      .service-card div,.service-card div img {
        width: 70%;
      }
    }
    @media (max-width: 1200px){ /* laptop */
      .service-card div,.service-card div img {
        width: 80%;
      }
    }
    @media (max-width: 700px){ /* laptop */
      .service-card div,.service-card div img {
        width: 90%;
      }
    }

</style>

<script>
  export default {
    name: 'services-component',
}

</script>