<script>
import {store, convertLanguage} from '../store';
import axios from 'axios'

    export default {
        name: 'FilmCard',
        props:['info'],
        data() {
            return {
                store,
                imageAvailable: true,
                altText1: 'IMMAGINE NON DISPONIBILE',
                altText2: 'PASSA SOPRA CON IL MOUSE',
                actorsList: [],
            }
        },
        methods: {
            calcVote() {
                return Math.ceil((this.info.vote_average /2))
            },
            convertLanguage,
            emptyStars(maxstars) {
                // Calcola il numero di stelle vuote da visualizzare
                return maxstars - this.calcVote(); // 5 stelle totali - stelle piene
            },
            getActors(card_id, n_actors) {
                if (store.searchContent === "") {
                    actorsList = [];
                    return;
                }
                
                const endPointActors = `https://api.themoviedb.org/3/movie/${card_id}/credits?${store.apiKey}`;
                
                    
                axios.
                    get(endPointActors)
                    .then(res => {
                    console.log(res.data.cast);
                    this.actorsList = res.data.cast.slice(0, n_actors);
                    })
                    .catch(err => {
                    console.log(err)
                    actorsList = [];
                    });
            }
        },
        mounted() {
        // Chiama getActors quando il componente è montato
            this.getActors(this.info.id, 5); // primi 5 attori
        },          
    }
</script>


<template>
  
  <div class="film-card">
    <div class="poster-image">
        <div class="image-container" :class="{ 'no-image': !imageAvailable }">
            <img
            v-if="imageAvailable"
            :src="store.posterIMG + info.poster_path"
            @error="imageAvailable = false"
            alt=""
            class="cover-image"
            />
            <div v-else class="alt-text">
                <div>{{ altText1 }} </div>
                <div>{{ altText2 }}</div>    
            </div>
        </div>
        <div class="black-screen">
            <div class="hide">
                <div class="film-title">{{ info.title }}</div>
                <div v-if="info.title !== info.original_title" class="film-title-original">
                    {{ info.original_title }}
                </div>
                <div class="original-language">
                    <img :src="'https://flagcdn.com/32x24/' + convertLanguage(info.original_language) + '.png'" alt="">
                </div>
                <div class="vote" >
                    <span class="star" v-for="n in calcVote()" :key="'star-' + n"><i class="fa-solid fa-star"></i></span>
                    <span class="empty-star" v-for="n in emptyStars(5)" :key="'empty-star-' + n"><i class="fa-regular fa-star"></i></span>
                </div>
                <div class="overview">
                    {{ info.overview }}
                </div>
                <ul>
                    <li v-for="actor in actorsList" :key="actor.id">{{ actor.name }} nel ruolo di {{ actor.character }} </li>
                </ul>
            </div>
        </div>
    </div>
    

  </div>

</template>



<style scoped lang="scss">
@use '../style/partials/variable' as *;

.film-title {
    color: white;
    font-size: 24px;
    padding-top: 15%;
}
.film-card {
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
    height: 475px;
    width: 325px;
}
.black-screen:hover .hide {
    display: block;
    background: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    overflow: auto;
}
.cover-image {
    width: 325px;
    height: 475px;
}
.overview {
    margin: 5%;
}
.image-container {
  position: relative;
  width: 325px; /* Imposta la larghezza desiderata */
  height: 475px; /* Imposta l'altezza desiderata */
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-image {
  background-color: #f0f0f0; /* Colore di sfondo quando l'immagine non è disponibile */
}

.alt-text {
  position: absolute;
  color: #000;
  font-size: 16px;
  text-align: center;
  
}

</style>

