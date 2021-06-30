<template>
  <div class="randomizer">
    <div class="container">
        <button @click="atClick()" class="btn btn-dark btn-lg random-btn">Generate a new random item</button>
    </div> 

    <div class="content">
        <div v-if='oneObject'>
            <img v-bind:src="oneObject.webImage.url" alt="image" style="width: 55%" />
            <p class="pic-title"> {{ oneObject.longTitle }}</p>
            <a :href="oneObject.links.web" class="btn btn-dark btn-lg view-btn"> View this item on the Rijksmuseum website</a>
        </div>          
    </div>   

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Randomizer', 

    data(){
        return{
            randomArray: [],
            oneObject: null
        }
    },
        
    // API CALL
    mounted() {
        fetch('https://www.rijksmuseum.nl/api/nl/collection?key=4MZu3ZFk&ps=20&imgonly=True&q=landschap' )
            .then(res => res.json())
            .then(data => this.randomArray = data.artObjects)
            .then(() => this.oneObject = this.randomArray[this.generateNum()])
            .catch(err => console.log(err.message))       
    },
    methods: {
        atClick: function() {
            const y = this.generateNum()   
            return this.oneObject = this.randomArray[y]                      
        },

        generateNum: function() {
            const x = Math.floor(Math.random() * 20)
            return x 
        }
    }
        
})


</script>

<style scoped>

    .randomizer{
        padding-top: 100px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: #F0F0F0;
        padding-left: 50px;
        padding-right: 50px;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 60px;        
    }

    .content{
        margin-top: 70px;
        margin-bottom: 50px;
    }

    .pic-title{
        font-family: 'Merriweather Sans', sans-serif;
        font-size: 2rem;
        margin-top: 40px;
        margin-bottom: 60px;
    }

    .random-btn:hover{
        background-color: #303030;
        color: lightblue; 
    }

    .view-btn:hover{
        background-color: #DCDCDC;
        color: black; 
    }

</style>
