<template>

  <div class="top-section">
    <h1> {{ maintitle }} </h1>
    <button @click="handleClickTitle('title')" class="btn btn-dark btn-sm"> Sort by Title</button>
    <button @click="handleClickAuthor('principalOrFirstMaker')" class="btn btn-dark btn-sm">Sort by Author</button>
  </div>

  <div class="container">
    <div v-if="pictures"> 
      <div class="row">
          <transition-group  name="list" tag="div" class="col-lg-6 col-md-12" v-for="pic in pictures" :key="pic.id">
            <div class="card">
              <router-link :to="{ name: 'PaintingDetails', params: { id: pic.id } }" class="router">
                <img v-bind:src="pic.webImage.url" alt="art image" style="width:80%;" />
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
      fetch('https://www.rijksmuseum.nl/api/nl/collection?key=4MZu3ZFk&p=1&ps=10&imgonly=True&q=landschap' )
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
    background-color: #C0C0C0;
    padding-top: 45px;
    padding-bottom: 30px;
    margin-bottom: 30px; 
  }

  h1{
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    padding-bottom: 25px;
  }

  .btn{
    margin: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
  }
  
  .btn:hover{
    background-color: white;
    color: black; 
  }

  .container{
    margin-top: 60px; 
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



