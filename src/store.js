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
    
})




export function getFilms() {
    let endPointMovie = ""

    if (store.searchContent !== "") {
         endPointMovie = `${store.queryFilmUrl}${store.searchContent}&${store.apiKey}&${store.language}`;
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


export function getTvSeries() {
    let endPointTvSeries = ""

    if (store.searchContent !== "") {
        endPointTvSeries = `${store.queryTvUrl}${store.searchContent}&${store.apiKey}&${store.language}`;
    }

    axios.
      get(endPointTvSeries)
      .then(res => {
        console.log(res.data.results);
        store.filmsList = res.data.results;
      })
      .catch(err => {
        console.log(err)
      })
}