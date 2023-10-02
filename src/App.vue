<template>
  <div id="app">
    <Header />
    <div>
      <!-- <router-view></router-view> --> 
      <!-- <product-list-one></product-list-one> -->
      <!-- <product-list-two></product-list-two> -->
      <SelectVer />
      <DatalistVer />
    </div>
  </div>
</template>

<script>
  import Header from './components/layout/Header.vue'
  // import ProductListOne from './components/ProductListOne.vue'
  // import ProductListTwo from './components/ProductListTwo.vue'
  import SelectVer from './components/SelectVer.vue'
  import DatalistVer from './components/DatalistVer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      // ProductListOne,
      // ProductListTwo,
      DatalistVer,
      SelectVer,
    },
    data(){
      return{

      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
