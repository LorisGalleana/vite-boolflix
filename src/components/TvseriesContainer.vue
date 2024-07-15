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
        },
        
                   
    }
</script>


<template>
    <div class="tv-seriers-found" v-if="store.searchContent !== '' ">
        SERIE TV TROVATE:
    </div>
  <div class="series-container">
    <div class="series" v-for="tv in store.tvSeriesList" :key="tv.id"  >
        <TvseriesCard :infotv="tv" />
    </div>   
  </div>  
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.series-container {
    color: white;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
}
.series {
    width: calc(100% / 4 - 40px);
    padding: 0 5px 50px;
}
.empty {
    font-size: 24px;
}
.tv-seriers-found {
    margin-bottom: 2%;
    font-size: 24px;
    color: red;
}


</style>
