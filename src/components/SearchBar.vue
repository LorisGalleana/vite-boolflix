<script>
import { store } from '../store';

    export default {
        name: 'SearchBar',
        data() {
            return {
                store,
            }
        }
            
    }
</script>


<template>
  <div class="search-container">
        <input type="search" class="search-input" v-model="store.searchFilm" placeholder="Cerca...">
        
  </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;


.search-input {
    margin-right: 2%;
    outline: none;
}

</style>

