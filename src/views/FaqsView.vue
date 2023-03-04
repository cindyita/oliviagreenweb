<template>

  <div class="faqs py-5">

    <div class="container mt-2 d-flex flex-column align-items-center w-100">
      <span class="display-section">FaQs</span>
      <p>Click in the question to show the answer.</p>

      <div id="accordion" class="accordion w-100 mt-4">
        <div class="card">
          <a class="btn" data-bs-toggle="collapse" href="#faq1">
            <div class="card-header">
                How do I schedule an appointment with you online?
            </div>
          </a>
          <div id="faq1" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              To schedule an appointment online, please go to the "Schedule" section on our website's menu. From there, you can choose an available date and time slot, click on the desired time, and fill out your contact information. Once you submit your information, you'll receive a questionnaire via email to complete before your appointment. Finally, you'll receive a confirmation email to confirm your scheduled appointment.
            </div>
          </div>
        </div>

        <div class="card">
          <a class="collapsed btn" data-bs-toggle="collapse" href="#faq2">
            <div class="card-header">
              What information do I need to provide to book a session?
            </div>
          </a>
          <div id="faq2" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              To book a session, you need to provide your full name, email, phone number, and optionally, a comment. Additionally, you will need to complete the questionnaire that will be sent to you via email.
            </div>
          </div>
        </div>

        <div class="card">
          <a class="collapsed btn" data-bs-toggle="collapse" href="#faq3">
            <div class="card-header">
                How many sessions will I need?
            </div>
          </a>
          <div id="faq3" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              The number of sessions needed can vary depending on the individual and their needs. We can discuss this during your initial appointment and adjust as necessary.
            </div>
          </div>
        </div>

        <div class="card">
          <a class="collapsed btn" data-bs-toggle="collapse" href="#faq4">
            <div class="card-header">
                Is therapy confidential?
            </div>
          </a>
          <div id="faq4" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              Yes, therapy is confidential. I take client confidentiality very seriously and will only share information with others with your consent or as required by law.
            </div>
          </div>
        </div>

        <div class="card">
          <a class="collapsed btn" data-bs-toggle="collapse" href="#faq5">
            <div class="card-header">
                What if I need to cancel or reschedule an appointment?
            </div>
          </a>
          <div id="faq5" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              Please contact me as soon as possible if you need to cancel or reschedule. I have a 24-hour cancellation policy and appreciate advance notice so that I can offer the time slot to another client.
            </div>
          </div>
        </div>

        <div class="card">
          <a class="collapsed btn" data-bs-toggle="collapse" href="#faq6">
            <div class="card-header">
                How do I know if therapy is right for me?
            </div>
          </a>
          <div id="faq6" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              Therapy can be beneficial for anyone who wants to improve their mental health and well-being. If you're unsure if therapy is right for you, we can discuss this during our initial appointment and decide together if it's a good fit.
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

  <div class="spacer"></div>

</template>

<script>
  export default {
    name: 'faqs-component',
  }
</script>