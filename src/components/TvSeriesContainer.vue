<script>
import TvSeriesCard from './TvSeriesCard.vue';

//import dello store
import { store } from '../store';


    export default {
        name: 'TvSeriesContainer',
        components: {
            TvSeriesCard,
        },
        data() {
            return {
                store,
            }
        }
                   
    }
</script>


<template>
  <div class="series-container">
        <div class="series" v-for="tv in store.tvSeriesList" :key="tv.id" v-if="store.searchContent !== '' " >
            <TvSeriesCard :info="tv" />
        </div>
        
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

