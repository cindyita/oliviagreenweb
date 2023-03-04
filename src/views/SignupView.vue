<template>

  <div class="login py-5 w-100">
    <div class="py-5 w-100 d-flex flex-column justify-content-center align-items-center">

      <h2 class="display-section">Signup</h2>

      <form>
        <div class="mb-3 mt-3">
          <label for="text" class="form-label">Full name:</label>
          <input type="text" class="input" placeholder="example@virtualblux.com">
        </div>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" class="input" placeholder="example@virtualblux.com">
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Password:</label>
          <input type="password" class="input" placeholder="password">
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Confirm password:</label>
          <input type="password" class="input" placeholder="password">
        </div>
        <div class="text-center">
          <button type="submit" class="btn button-primary">Submit</button>
        </div>

        <div class="d-flex flex-column align-items-center mt-4">
          <a href="#"><span>¿Already have an account? Log in</span></a>
        </div>
        
      </form>

    </div>
  </div>

</template>

<style scoped>
  form {
    width:25%;
  }
  /*-----------------------------------*/
  /*------------RESPONSIVE-------------*/
  /*-----------------------------------*/

  @media (max-width: 1400px){ /* laptop */
    form {
      width:50%;
    }
  }
  @media (max-width: 600px){ /* laptop */
    form {
      width:90%;
    }
  }
</style>

<script>
  
export default {
  name: 'signup-component',
}

</script>