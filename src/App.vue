<script >


import UpperBar from './components/UpperBar.vue'
import MainPage from './components/MainPage.vue';


//import dello store
import { store, getFilms, getTvSeries } from './store';


export default {
  name: "App",
  components: {
    UpperBar,
    MainPage
  },
  data() {
    return {
      store,
    }
  },
  watch: {
      'store.searchContent': 'getFilms',
      'store.searchContent': 'getTvSeries'
    },
  methods: {
    getFilms,
    getTvSeries,
    searchAll() {
      this.getFilms();
      this.getTvSeries();
    }
  },
  created() {
    this.searchAll
  }
}
</script>

<template>
  <UpperBar  />
  <MainPage  />

</template>

<style lang="scss">
@use './style/general.scss';

</style>
