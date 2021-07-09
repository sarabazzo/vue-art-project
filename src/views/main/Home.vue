<template>
  <div class="home">
    <ItemList maintitle="Landscape Art at the Rijksmuseum" />  
  </div>  
</template>


<script lang="ts">

  import { defineComponent } from 'vue'
  import ItemList from '../../components/ItemList.vue' 

  export default defineComponent({
    name: 'Home',
    components: { ItemList }
  })
  
</script>


<style scoped>

  .home{
    padding-top: 60px; 
    text-align: center;
    background-color: #F0F0F0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
</style>