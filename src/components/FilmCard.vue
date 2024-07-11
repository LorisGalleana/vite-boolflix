<script>
    export default {
        name: 'FilmCard',
        props:['info'],
        methods: {
            calcVote() {
                return Math.ceil((this.info.vote_average /2))
            }
        }          
    }
</script>


<template>
  
  <div class="film-card">

    <div class="film-title">{{ info.title }}</div>
    <div v-if="info.title !== info.original_title" class="film-title-original">{{ info.original_title }}</div>
    <div class="original-language">{{ info.original_language }}</div>
    <div class="vote">{{calcVote()}}</div>

  </div>

</template>



<style scoped lang="scss">
@use '../style/partials/variable' as *;

.film-title {
    color: white;
    font-size: 24px;
}
.film-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
}


</style>

