<script >
import axios from 'axios'

import UpperBar from './components/UpperBar.vue'
import MainPage from './components/MainPage.vue';


//import dello store
import { store } from './store';


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
  methods: {
    getFilms() {
      axios.
        get(store.filmURL)
        .then(res => {
          console.log(res.data.results);
          store.filmsList = res.data.results;
        })
        .catch(err => {
          console.log(err)
        })
    }
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
