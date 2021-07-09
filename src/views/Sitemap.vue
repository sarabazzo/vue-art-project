<template>
  <div class="sitemap">
    <div class="content">

      <h1>Landscape Art Sitemap</h1>

      <ul>
        <li>
          <router-link to="/home" class="item"><i class="fas fa-caret-square-right fa-xs"></i> Home</router-link>
        </li>
        <li>
          <router-link to="/randomizer" class="item"><i class="fas fa-caret-square-right fa-xs"></i> Randomizer</router-link> 
        </li>
        <li>
          <p class="categ"><i class="fas fa-caret-square-right fa-xs"></i> Categories</p>
        </li>
          <ul>
            <li><router-link to="/paintings" class="sub-item"><i class="fas fa-chevron-right fa-xs"></i> Paintings</router-link></li>
            <li><router-link to="/drawings" class="sub-item"><i class="fas fa-chevron-right fa-xs"></i> Drawings</router-link></li>
            <li><router-link to="/prints" class="sub-item"><i class="fas fa-chevron-right fa-xs"></i> Prints</router-link></li>
          </ul>
      </ul>

    </div>    
     
  </div>
</template>


<style scoped>

  .sitemap {
    background-color: #DCDCDC; 
    background-image: linear-gradient(#B0B0B0, #F0F0F0);
    display: flex;
    flex-direction: column;
    min-height: 85vh;
  }

  .content{    
    margin-top: 140px;
    margin-left: 8%;
    font-family: 'Rufina', serif;
  }

  li {
    font-size: 1.3rem; 
    list-style: none;
    margin: 1.7rem; 
  }

  .item, 
  .categ, 
  .sub-item {
    text-decoration: none;
    color: black; 
  }

  .item:hover, 
  .sub-item:hover {
    text-decoration: underline;
  }

</style>
