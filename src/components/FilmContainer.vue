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
    <div v-if="store.searchContent == '' " class="empty">
        COSA VUOI VEDERE OGGI?
    </div>
    <div class="film-found" v-if="store.searchContent !== '' ">
        FILM TROVATI:
    </div>
  <div class="film-container">
    
        <div class="film" v-for="film in store.filmsList" :key="film.id" v-if="store.searchContent !== '' " >
            <FilmCard :info="film" />
        </div>
  </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.film-container {
    color: white;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
}
.film {
    width: calc(100% / 4 - 40px);
    padding: 0 5px 50px;
}
.empty {
    font-size: 24px;
}
.film-found {
    margin-bottom: 2%;
    font-size: 24px;
    color: red;
}


</style>

