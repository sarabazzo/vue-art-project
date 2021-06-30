<template>
  <div>
    <nav class="navbar fixed-top navbar-dark bg-dark bar">
      <div class="container">
        <router-link to="/home" class="nav-item mx-auto">HOME</router-link> 
        <router-link to="/randomizer" class="nav-item mx-auto">RANDOMIZER</router-link>
        <router-link to="/categories" class="nav-item mx-auto">CATEGORIES</router-link>      
      </div>
    </nav> 
  </div>
</template>


<style scoped>

    .bar{
        padding: 20px;
    }
    
    .nav-item {
        color:white; 
        font-family: 'Questrial', sans-serif;
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: 2.5px;
        text-decoration: none;
    }

    .nav-item:hover{
        text-decoration: underline 2px;
        text-decoration-color: lightblue;
    }

    .bar a.router-link-exact-active {
        color: lightblue;
    }

</style>
