<template>
  <div class="randomizer">

    <div class="content">
        <div v-if='oneObject'>
            <img v-bind:src="oneObject.webImage.url" alt="image" class="random-img" />
            <p class="pic-title"> {{ oneObject.longTitle }}</p>
            <span>
                <button @click="atClick()" class="btn btn-dark btn-lg random-btn"> <i class="fas fa-redo-alt fa-sm" style="color:#EC9706;"> </i> Generate a new random item</button>
                <a :href="oneObject.links.web" class="btn btn-dark btn-lg random-btn"> <i class="fas fa-search fa-sm" style="color:#EC9706;"></i> View this item on the Rijksmuseum website</a>
            </span>
            
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

    .random-img{
        height: 40vw; 
    }

    .pic-title{
        font-family: 'Merriweather Sans', sans-serif;
        font-size: 2rem;
        margin-top: 40px;
        margin-bottom: 60px;
    }

    .random-btn{
        margin: 10px;
    }

    .random-btn:hover{
        background-color: black;
        box-shadow: 2px 2px 5px gray; 
    }

</style>
