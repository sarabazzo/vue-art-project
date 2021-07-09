<template>
  <div class="drawings">

    <div class="top-section">
      <h1> Drawings </h1>
    </div>

    <div class="container cat-images">
      <div v-if="pictures"> 
        <div class="row">
          <div class="col-lg-6 col-md-12" v-for="pic in pictures" :key="pic.id">
            <div class="card text-center">
              <img v-bind:src="pic.webImage.url" alt="image" style="width:85%;" class="card-img-top mx-auto" />
              <div class="card-body">
                <p class="pic-title"> {{ pic.title }} </p> 
                <p class="pic-author"> {{ pic.principalOrFirstMaker }}</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>   

    <p class="see-also">
      See also: 
      <router-link to="/paintings" class="item">Paintings</router-link> or
      <router-link to="/prints" class="item">Prints</router-link>   
    </p>

  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Drawings', 

    data() {
      return {
        pictures: []
      }
    }, 

    mounted() {
      fetch('https://www.rijksmuseum.nl/api/nl/collection?key=4MZu3ZFk&p=1&ps=10&imgonly=True&q=landschap&type=tekening')
        .then(res => res.json())
        .then(data => this.pictures = data.artObjects)
        .catch(err => console.log(err.message))  
    }

  })
</script>


<style scoped>

  .drawings{
    margin-top: 75px; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #F0F0F0;
  }

  .top-section{
    background-color: #DCDCDC; 
    background-image: linear-gradient(#B0B0B0, #F0F0F0);
    padding-top: 70px;
    padding-bottom: 30px;
    margin-bottom: 10px; 
  }

  h1{
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
  }

  .cat-images{
    margin-top: 60px;
  }
    
  .card{
    border: none; 
    background-color: #F0F0F0;
    margin-bottom: 40px; 
  }

  .pic-title{
    color:black; 
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .pic-author{
    color:black;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
  }

  .see-also{
    margin-left: 10%;
    font-family: 'Rufina', serif;
    margin-bottom: 50px; 
  }

  .item{
    text-decoration: none;
    color: black; 
  }

  .item:hover{ 
    color: #EC9706; 
    text-decoration: underline;
  }


</style>

