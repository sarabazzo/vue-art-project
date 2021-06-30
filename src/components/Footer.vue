<template>
  <div class="footer">
    <p> &copy; {{ getYear()}} | <router-link to="/sitemap" class="router">Sitemap</router-link> </p>
  </div>
</template>


<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        year: Number, 
      }
    }, 
    methods: {
      getYear: function() {
        const year = new Date().getFullYear()
        return year
      }
    }
  })

</script>



<style scoped>

  .footer{
    background-color: #C0C0C0;
    height:150px; 
    margin-top: auto;
    text-align: center;
  }

  p{
    font-family: 'Montserrat', sans-serif;
    padding-top: 110px;
  }

  .router{
    color: black; 
    text-decoration: none;
  }

  .router:hover{
    text-decoration: underline;
  }

</style>