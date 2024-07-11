<script>
    export default {
        name: 'TvSeriesCard',
        props:['info'],
        methods: {
            calcVote() {
                return Math.ceil((this.info.vote_average /2))
            }
        }          
    }
</script>


<template>
  
  <div class="tv-series-card">

    <div class="tv-series-title">{{ info.name }}</div>
    <div v-if="info.title !== info.original_title" class="tv-series-title-original">{{ info.original_name }}</div>
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

