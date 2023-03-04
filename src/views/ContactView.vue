<template>

  <div class="contact py-5">

    <div class="form-contact w-100 d-flex justify-content-center">
      <form class="card-primary">
        <h2 class="display-section text-center">Contact</h2>
        <div class="mb-2 mt-3">
          <label class="form-label">Name:</label>
          <input type="name" class="input" placeholder="Enter name">
        </div>
        <div class="mb-2 mt-3">
          <label class="form-label">Email:</label>
          <input type="email" class="input" placeholder="Enter email">
        </div>
        <div class="mb-2 mt-3">
          <label class="form-label">Select requirment:</label>
          <select class="form-select select">
            <option>Book a session</option>
            <option>View Case</option>
            <option>Sugesttion</option>
            <option>Cancel session</option>
            <option>Contact</option>
          </select>
        </div>

        <div class="mb-2 mt-3">
          <label class="mb-2">Comments:</label>
          <textarea class="form-control textarea" rows="5" placeholder="your comments"></textarea>
        </div>
        
        <div class="text-center">
          <button class="btn button-primary mt-4">Submit</button>
        </div>
      </form>
    </div>
    
  </div>

  <div class="spacer"></div>

</template>

<script>
  export default {
    name: 'contact-component',
  }
</script>