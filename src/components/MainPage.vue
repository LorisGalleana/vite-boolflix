<script>

import FilmContainer from './FilmContainer.vue';
import TvseriesContainer from './TvseriesContainer.vue';

//import dello store
import { store } from '../store';


    export default {
        name: 'MainPage',
        components: {
            FilmContainer,
            TvseriesContainer
        },
        data() {
            return {
                store,
            }
        }
            
    }
</script>


<template>
  <div class="page-container">
        <div class="films">
            <FilmContainer  />
            <TvseriesContainer  />
        </div>
  </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.page-container {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-color: $main-bg-color;
}
.films {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    font-weight: bold;
    color: white;
}

</style>

