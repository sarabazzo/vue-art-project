<template>
  <div class="not-found">
    <div class="content">
      <img src="../assets/unicorn.png" alt="not-found-icon" style="width: 7%;">
      <h2>404</h2>
      <h3>Page not found</h3>

      <div>
        <ul>
          <li>
            <router-link to="/home" class="redirect"><i class="fas fa-caret-right"></i> Go back to the home page</router-link> 
          </li>
          <li>
            <router-link to="/randomizer" class="redirect"><i class="fas fa-caret-right"></i> Discover a random image</router-link>
          </li>
          <li>
            <router-link to="/prints" class="redirect"><i class="fas fa-caret-right"></i> Browse our categories</router-link>
          </li>
        </ul>
      </div>

      
      
      
    </div>
      
  </div>
</template>



<style scoped>

  .not-found {
    background-color: #DCDCDC; 
    background-image: linear-gradient(#B0B0B0, #F0F0F0);
    display: flex;
    flex-direction: column;
    min-height: 90vh;
  }

  .content{    
    margin-top: 140px;
    text-align:center; 
    font-family: 'Rufina', serif;
  }

  h2{
    font-size: 5rem;
  }

  h3{
    font-size: 3rem;
    margin-bottom: 100px;
  }

  ul{
    list-style: none;
  }

  .redirect{
    text-decoration: none;
    color: black; 
  }

  .redirect:hover{
    text-decoration: underline;
  }


</style>
