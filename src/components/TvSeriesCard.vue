<script>
import {store, convertLanguage} from '../store';

    export default {
        name: 'TvseriesCard',
        data() {
            return {
                store,
            }
        },
        props:['infotv'],
        methods: {
            calcVote() {
                return Math.ceil((this.infotv.vote_average /2))
            },
            convertLanguage,
            emptyStars() {
                // Calcola il numero di stelle vuote da visualizzare
                return 5 - this.calcVote(); // 5 stelle totali - stelle piene
            }
        }          
    }
</script>


<template>
  
  <div class="tv-series-card">
    <div class="poster-image">
        <img :src="store.posterIMG + infotv.poster_path " alt="" class="cover-image">
        <div class="black-screen">
            <div class="hide">
                <div class="tv-series-title">{{ infotv.name }}</div>
                <div v-if="infotv.name !== infotv.original_name" class="tv-series-title-original">
                    {{ infotv.original_name }}
                </div>
                <div class="original-language">
                    <img :src="'https://flagcdn.com/32x24/' + convertLanguage(infotv.original_language) + '.png'" alt="">
                </div>
                <div class="vote" >
                    <span class="star" v-for="n in calcVote()" :key="'star-' + n"><i class="fa-solid fa-star"></i></span>
                    <span class="empty-star" v-for="n in emptyStars()" :key="'empty-star-' + n"><i class="fa-regular fa-star"></i></span>
                </div>
                <div class="overview">
                    {{ infotv.overview }}
                </div>
            </div>
        </div>
    </div>
    
    
    
    

  </div>

</template>



<style scoped lang="scss">
@use '../style/partials/variable' as *;

.tv-series-title {
    color: white;
    font-size: 24px;
    padding-top: 15%;
}
.tv-series-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.vote {
    display: flex;
    justify-content: center;
}
.poster-image {
    position: relative;
}
.hide {
    display: none;
}
.black-screen {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.black-screen:hover .hide {
    display: block;
    background: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    overflow: auto;
}
.cover-image {
    width: 100%;
    height: 500px;
}
.overview {
    margin: 5%;
}


</style>

