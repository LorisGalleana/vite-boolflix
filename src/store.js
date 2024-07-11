import { reactive } from "vue";

export const store = reactive({
    filmsList: [],
    tvSeriesList: [],
    filmURL:"https://api.themoviedb.org/3/trending/movie/day?api_key=43c9d549239b8a34c26493205a7c00a7&language=it", 
    
    
    searchFilm: "",
    
})