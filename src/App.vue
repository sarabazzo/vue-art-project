<template>
  <div>

    <HeaderMobile v-if="mobileView" />
    <Header v-if="!mobileView"/>  
    <router-view/>
    <Footer />

  </div>   
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from './components/Header.vue'
  import HeaderMobile from './components/HeaderMobile.vue'
  import Footer from './components/Footer.vue'
 

  export default defineComponent({
    components: { Header, HeaderMobile, Footer }, 
    data() {
      return {
        mobileView: true
      }
    }, 
    methods: {
      handleView() {
        this.mobileView = window.innerWidth <= 990
      }
    }, 
    created() {
      this.handleView() 
    }
    
  })
</script>

