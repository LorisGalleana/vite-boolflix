<script>

import FilmContainer from './FilmContainer.vue';

//import dello store
import { store } from '../store';

    export default {
        name: 'MainPage',
        components: {
            FilmContainer,
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
        </div>
  </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.page-container {
    height: 1000px;
    width: 100%;
    background-color: $main-bg-color;
}
.films {
    display: flex;
    justify-content: center;
    padding: 50px;
    font-size: 36px;
    font-weight: bold;
    color: white;
}

</style>

