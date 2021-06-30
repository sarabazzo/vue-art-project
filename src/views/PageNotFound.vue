<template>
  <div class="not-found">
      <h2>404</h2>
      <h3>Page not found</h3>

      <router-link to="/home" class="redirect">Go back to the home page</router-link> or
      <router-link to="/randomizer" class="redirect">Discover a random image</router-link>
  </div>
</template>



<style scoped>

  .not-found{
    margin-top: 110px; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }

  h2{
    font-size: 5rem;
  }

  h3{
    font-size: 3rem;
    margin-bottom: 100px;
  }

  .redirect{
    text-decoration: none;
    color: black; 
  }

  .redirect:hover{
    text-decoration: underline;
    color: lightblue; 
  }


</style>
