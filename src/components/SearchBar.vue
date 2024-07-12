<script>
import { store } from '../store';

    export default {
        name: 'SearchBar',
        data() {
            return {
                store,
            }
        },
        methods: {
            emitSearch() {
            this.$emit('search');
            }
        }
    }
</script>


<template>
  <div class="search-container">
        <input type="search" class="search-input" v-model="store.searchContent" placeholder="Cerca..." @keyup.enter="emitSearch" >
    </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;


.search-input {
    margin-right: 2%;
    outline: none;
    padding: 5px;
    font-size: 20px;
}

</style>

