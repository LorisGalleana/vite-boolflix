<script>
import SearchBar from './SearchBar.vue';

import { store, getFilms } from '../store';

    export default {
        name: 'UpperBar',
        components: {
            SearchBar,
        },
        data() {
            return {
                store,
            }
        },
        methods: {
            getFilms
        },
        created() {
            this.getFilms();
        }
            
    }
</script>


<template>
  <div class="bar-container">
        <div class="title">
            BOOLFLIX
        </div>
        <SearchBar @search="getFilms" />
  </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.bar-container {
    height: 100px;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;

}
.title {
    color: red;
    font-size: 36px;
    font-weight: bold;
}

</style>

