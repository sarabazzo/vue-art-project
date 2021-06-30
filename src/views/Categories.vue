<template>
  <div class="categories">
    <div class="container">
      <button class="btn btn-dark" @click="getPaintings()">PAINTINGS</button>
      <button class="btn btn-dark" @click="getDrawings()">DRAWINGS</button>
      <button class="btn btn-dark" @click="getPrints()">PRINTS</button>
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

  </div>
</template>


<script lang="ts">
  
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Categories', 

    data(){
      return{
        pictures: [], 
        searchWord: ""
        }
    },
    
    mounted() {
      this.getPaintings()  
    },

    methods: {
        getApi() {
          fetch('https://www.rijksmuseum.nl/api/nl/collection?key=4MZu3ZFk&p=1&ps=10&imgonly=True&q=landschap&type=' + this.searchWord)
            .then(res => res.json())
            .then(data => this.pictures = data.artObjects)
            .catch(err => console.log(err.message))  
          return this.pictures
        },

        getPaintings: function() {
          const type = "schilderij"
          this.searchWord = type
          return this.getApi()
        }, 

        getDrawings: function() {
          const type = "tekening"
          this.searchWord = type
          return this.getApi()
        }, 

        getPrints: function() {
          const type = "prent"
          this.searchWord = type
          return this.getApi()
        }
    }
        
  })

</script>


<style scoped>

    .categories{
        padding-top: 100px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: #F0F0F0;
    }

    .btn{
        margin: 10px; 
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        letter-spacing: 1px;
    }

    .btn:hover{
        color: lightblue;
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

</style>
