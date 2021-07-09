<template>
  <div class="details">
            
      <div v-for="x in newArray" :key=x.id>

        <div v-if='x.id === id'>
            <h1>{{ x.title }}</h1>
            <img v-bind:src="x.webImage.url" alt="image" style="width: 70%" />
            <div class="container">
              <span class="merri">Title:<p class="pic-title"> {{ x.title }}</p></span>
              <span class="merri">Author:<p class="pic-title"> {{ x.principalOrFirstMaker }}</p></span>
              <span class="merri">Full Title:<p class="pic-title"> {{ x.longTitle }}</p></span>
            </div>
            <a :href="x.links.web" class="btn btn-dark btn-lg"><i class="fas fa-search"></i> View this item on the Rijksmuseum website</a>
        </div>

    </div>

  </div>
</template>


<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'PaintingDetails', 
        data() {
            return {
                id: this.$route.params.id,
                newArray: []
            }
        }, 

        mounted() {
        fetch('https://www.rijksmuseum.nl/api/nl/collection?key=4MZu3ZFk&p=1&ps=10&imgonly=True&q=landschap&type=schilderij')
          .then(res => res.json())
          .then(data => this.newArray = data.artObjects)
          .catch(err => console.log(err.message))      
        }
        
    })

</script>


<style scoped>

  .details{
    padding-top: 100px;
    text-align: center;
    background-color: #F0F0F0;
    padding-bottom: 100px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1{
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: 35px;
    margin-top: 30px;
  }

  .container{
    margin-top: 60px;
    margin-bottom: 60px;
    text-align: left;
  }

  .pic-title{
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 2rem;
  }

  .merri{
    font-family: 'Merriweather', serif;
  }

  .btn:hover{
    background-color:black; 
    box-shadow: 2px 2px 5px gray; 
  }

</style>