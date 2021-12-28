let search = document.getElementById("search");
let main = document.getElementById("main");
const api_key = "208c210d772df59c8ecce5af408f7544";
const api_param = `?api_key=${api_key}`;
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const api_cri = `&language=en-US&with_genres=${genre_ids}`;


const API_URL = BASE_URL + api_param + api_cri;

async function search(){
    const data =  await ( await fetch(API_URL)).json();
    console.log(data);
}

// test commit search - new content from main
