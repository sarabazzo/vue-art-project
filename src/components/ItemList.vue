<template>

  <div class="top-section">
    <h1> {{ maintitle }} </h1>
  </div>

  <p class="sorting">Sort by: 
      <button @click="handleClickTitle('title')" class="btn"> Title</button> |
      <button @click="handleClickAuthor('principalOrFirstMaker')" class="btn">Author</button>
  </p>

  <div class="img-container">
    <div v-if="pictures"> 
      <div class="row">
          <transition-group  name="list" tag="div" class="col-lg-4 col-md-12" v-for="pic in pictures" :key="pic.id">
            <div class="card">
              <router-link :to="{ name: 'PaintingDetails', params: { id: pic.id } }" class="router">
                <img v-bind:src="pic.webImage.url" alt="art image" style="width:80%;" class="img" />
                <div class="card-body">
                  <p class="pic-title"> {{ pic.title }} </p>
                  <p class="pic-author"> {{ pic.principalOrFirstMaker }}</p>
                </div>
              </router-link>
            </div>
          </transition-group>
      </div>
    </div> 
  </div>    
    
</template>

<script lang="ts">
  import { defineComponent } from 'vue' 

  export default defineComponent({
      name: 'ItemList', 
      props: ['maintitle'],

      data(){
        return{
          pictures: []
        }
      },
      
      // API CALL
      mounted() {
      fetch('https://www.rijksmuseum.nl/api/nl/collection?key=4MZu3ZFk&p=1&ps=10&imgonly=True&q=landschap')
        .then(res => res.json())
        .then(data => this.pictures = data.artObjects)
        .catch(err => console.log(err.message))      
      },
      

      // SORTING FUNCTIONS 
      methods: {
    
        handleClickTitle: function(term: 'title') {
          const picArray = this.pictures
          const sorting = [...picArray].sort(function(a: any , b: any) {
            return a.title > b.title ? 1 : -1  
          })
          this.pictures = sorting
          
          return this.pictures 
        }, 

        handleClickAuthor: function(term: 'principalOrFirstMaker') {
            const picArray = this.pictures
            const sorting = [...picArray].sort(function(a: any , b: any) {
              return a.principalOrFirstMaker > b.principalOrFirstMaker ? 1 : -1  
            }) 
            this.pictures = sorting

            return this.pictures
        }
      }
      
  })
</script>


<style scoped>

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
    margin-top: 10px; 
  }

  .btn{
    margin: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    margin: 0; 
  }

  .btn:focus {
    outline: none;
    box-shadow: none;
  }

  .btn:hover{
    text-decoration: underline;
    color: #EC9706; 
    font-weight: bold;
  }

  .sorting{ 
    text-align: left;
    margin-left: 10%;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
  }

  .img{
    width: 100%; 
    height: 20vw; 
    object-fit: cover;
    margin-top: 20px; 
  }

  .img-container{
    margin-top: 20px; 
    margin-left: 8%; 
    margin-right: 8%; 
  }

  .list-move {
    transition: all 1s;
  }

  .card{
    border: none;  
    background-color: #F0F0F0;
    margin-bottom: 40px;
  }

  .card:hover{
    background-color: #E8E8E8; 
    box-shadow: 5px 5px 5px #A9A9A9;
  }

  .router{
    text-decoration: none;
  }

  .pic-title{
    color:black; 
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .pic-title:hover{
    text-decoration: underline;
  }

  .pic-author{
    color:black;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
  }
 
</style>



