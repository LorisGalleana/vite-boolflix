import { reactive } from "vue";
import axios from 'axios'

export const store = reactive({
    filmsList: [],
    tvSeriesList: [],
    queryFilmUrl:"https://api.themoviedb.org/3/search/movie?query=",
    queryTvUrl:"https://api.themoviedb.org/3/search/movie?query=",
    apiKey:"api_key=43c9d549239b8a34c26493205a7c00a7",
    language:"language=it",
    searchFilm: "",
    
})




export function getFilms() {
    let endPointMovie = ""

    if (store.searchFilm !== "") {
         endPointMovie = `${store.queryFilmUrl}${store.searchFilm}&${store.apiKey}&${store.language}`;
    }

    axios.
      get(endPointMovie)
      .then(res => {
        console.log(res.data.results);
        store.filmsList = res.data.results;
      })
      .catch(err => {
        console.log(err)
      })
  }