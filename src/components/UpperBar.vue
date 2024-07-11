<script>
import SearchBar from './SearchBar.vue';

    export default {
        name: 'UpperBar',
        components: {
            SearchBar,
        }
            
    }
</script>


<template>
  <div class="bar-container">
        <div class="title">
            BOOLFLIX
        </div>
        <SearchBar  />
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

