<script>
    export default {
        name: 'SearchBar',
            
    }
</script>


<template>
  <div class="search-container">
        <input type="search" name="" id="" class="search-input">
        <button class="searc-button">CERCA</button>
        
  </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.search-container {
    width: 20%;
}
.search-input {
    margin-right: 2%;
    outline: none;
}

</style>

