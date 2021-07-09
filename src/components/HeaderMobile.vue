<template>
  <div>
    <nav class="navbar fixed-top navbar-dark bg-dark">
      <div class="container">
        <nav role="navigation">
          <ul>
            <li><img src="../assets/icon.png" alt="icon" class="icon-img" /></li>
            <li><router-link to="/home" class="nav-item mx-auto">HOME</router-link> </li>
            <li><router-link to="/randomizer" class="nav-item mx-auto">RANDOMIZER</router-link> </li>
            <li><p class="nav-item mx-auto" aria-haspopup="true">CATEGORIES <i class="fas fa-caret-down"></i></p>
              <ul class="dropdown" aria-label="submenu">
                <li><router-link to="/paintings" class="sub-item">PAINTINGS</router-link></li>
                <li><router-link to="/drawings" class="sub-item">DRAWINGS</router-link></li>
                <li><router-link to="/prints" class="sub-item">PRINTS</router-link></li>
              </ul> 
            </li>
  
          </ul>
        </nav>

      </div>
    </nav> 
  </div>
</template>


<style scoped> 
  
  .nav-item {
    color:white; 
    font-family: 'Questrial', sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 3px;
    text-decoration: none;
  }

  .nav-item:hover,
  .sub-item:hover {
    color: #EC9706;
  }

  p{
    margin-bottom: 0;
  }

  .icon-img{
    height: 25px; background-color: white; border-radius:50%;
  }
  
  ul {
    background: black;
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  li {
    color: white;
    display: block;
    float: left;
    padding: 1rem;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
  }
  
  .sub-item {
    color: white;
    font-family: 'Questrial', sans-serif;
    font-size: 1rem; 
    font-weight: bold;
    text-decoration: none;
  }

  ul li ul {
    visibility: hidden;
    opacity: 0;
    min-width: 5rem;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1rem;
    left: 0;
    display: none;
  }

  ul li:hover > ul,
  ul li ul:hover,
  ul li ul:focus {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  ul li ul li {
    clear: both;
    width: 100%;
  }


</style>
