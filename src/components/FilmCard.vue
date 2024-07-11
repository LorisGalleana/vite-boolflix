<script>
    export default {
        name: 'FilmCard',
        props:['info'],          
    }
</script>


<template>
  <div class="film-card">
        <div class="film-title" >{{ info.title }}</div>
  </div>
    
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.film-title {
    color: white;
    font-size: 24px;
}


</style>

