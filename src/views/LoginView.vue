<template>

  <div class="login py-5 w-100">
    <div class="text-center text-danger">For this example, just log in with the credentials are already written</div>
    <div class="py-5 w-100 d-flex flex-column justify-content-center align-items-center">

      <h2>Login</h2>

      <form>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" class="input" value="example@virtualblux.com">
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Password:</label>
          <input type="password" class="input" value="123456">
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input checkbox" type="checkbox" checked>
          <label class="form-check-label">Remember me</label>
        </div>
        <div class="text-center">
          <button type="submit" class="btn button-primary">Submit</button>
        </div>

        <div class="d-flex flex-column align-items-center mt-4">
          <a href="#"><span>¿Don't have an account? Sign up</span></a>
          <a href="#"><span>I forgot my password</span></a>
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