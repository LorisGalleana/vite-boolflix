<script>
import FilmCard from './FilmCard.vue';

//import dello store
import { store } from '../store';


    export default {
        name: 'FilmContainer',
        components: {
            FilmCard,
        },
        data() {
            return {
                store,
            }
        }
                   
    }
</script>


<template>
  <div class="film-container">
        <div class="film" v-for="film in store.filmsList" :key="film.id" >
            <FilmCard :info="film" />
        </div>
  </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.film-container {
    color: white;
    font-size: 36px;
    display: flex;
    flex-wrap: wrap;
}
.film {
    width: calc(100% / 5);
    padding-bottom: 50px;
}


</style>

