import { reactive } from "vue";
import axios from 'axios'

export const store = reactive({
    filmsList: [],
    tvSeriesList: [],
    queryFilmUrl:"https://api.themoviedb.org/3/search/movie?query=",
    queryTvUrl:"https://api.themoviedb.org/3/search/tv?query=",
    apiKey:"api_key=43c9d549239b8a34c26493205a7c00a7",
    language:"language=it",
    searchContent: "",
    posterIMG: "https://image.tmdb.org/t/p/w185/"
    
})




export function getFilms() {
    if (store.searchContent === "") {
        store.filmsList = [];
        return;
    }
    
    const endPointMovie = `${store.queryFilmUrl}${store.searchContent}&${store.apiKey}&${store.language}`;
        

    axios.
      get(endPointMovie)
      .then(res => {
        console.log(res.data.results);
        store.filmsList = res.data.results;
      })
      .catch(err => {
        console.log(err)
        store.filmsList = [];
      })
}


export function getTvSeries() {
    if (store.searchContent === "") {
        store.tvSeriesList = [];
        return;
    }
    
    const endPointTvSeries = `${store.queryTvUrl}${store.searchContent}&${store.apiKey}&${store.language}`;
    

    axios.
      get(endPointTvSeries)
      .then(res => {
        console.log('API Response:', res.data.results);
        store.tvSeriesList = res.data.results ;
        console.log('Updated tvSeriesList:', store.tvSeriesList);
      })
      .catch(err => {
        console.log('API Error:', err);
        store.tvSeriesList = [];
      })
}

export function convertLanguage(langCode) {
  switch (langCode) {
      case 'en':
      return 'gb'; // Inglese
      case 'fr':
      return 'fr'; // Francese
      case 'es':
      return 'es'; // Spagnolo
      case 'it':
      return 'it'; // Italiano
      case 'de':
      return 'de'; // Tedesco
      case 'pt':
      return 'pt'; // Portoghese
      case 'zh':
      return 'cn'; // Cinese
      case 'ja':
      return 'jp'; // Giapponese
      case 'ko':
      return 'kr'; // Coreano
      default:
      return langCode;
  }
}
