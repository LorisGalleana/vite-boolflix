<script >


import UpperBar from './components/UpperBar.vue'
import MainPage from './components/MainPage.vue';


//import dello store
import { store, getFilms } from './store';


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
        'store.searchFilm': 'getFilms'
    },
  methods: {
    getFilms
  },
  created() {
    this.getFilms();
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
