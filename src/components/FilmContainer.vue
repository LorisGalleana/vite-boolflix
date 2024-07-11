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
        <div class="film" v-for="film in store.filmsList" :key="film.id" v-if="store.searchFilm !== '' " >
            <FilmCard :info="film" />
        </div>
        <div v-else class="empty">COSA VUOI VEDERE OGGI?</div>
  </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.film-container {
    color: white;
    
    display: flex;
    flex-wrap: wrap;
}
.film {
    width: calc(100% / 4);
    padding: 0 5px 50px;
}
.empty {
    font-size: 24px;
}


</style>

