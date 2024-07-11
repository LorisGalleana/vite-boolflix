<script>
import TvseriesCard from './TvseriesCard.vue';

//import dello store
import { store } from '../store';


    export default {
        name: 'TvseriesContainer',
        components: {
            TvseriesCard,
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
            <TvseriesCard :info="tv" />
        </div>
        
  </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.series-container {
    color: white;
    
    display: flex;
    flex-wrap: wrap;
}
.series {
    width: calc(100% / 4);
    padding: 0 5px 50px;
}
.empty {
    font-size: 24px;
}


</style>

