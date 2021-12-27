const api_key = "208c210d772df59c8ecce5af408f7544";
const api_param = `?api_key=${api_key}`;
const BASE_URL = "https://api.themoviedb.org/3/trending/all/day";

const API_URL = BASE_URL + api_param;

const IMG_URL = " https://image.tmdb.org/t/p/w500";
movies(API_URL);


function movies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showmovies(data.results);
    });
}

function showmovies(data) {
  data.forEach((movie) => {
    const main = document.getElementById("main");

    const { title, poster_path, overview, id } = movie;
    const movie1 = document.createElement("div");
    movie1.classList.add("movie");
    movie1.innerHTML = `<div class="section">
    <div class="section1"><img src="${
      IMG_URL + poster_path
    }"  alt="${title}" > </div>
    <div class="movie-info">
    <h3>${title}</h3>
    </div>
    <div class="movieDetails" onclick="movieDetails(event)" data-id=${id} > SHOW DETAILS </div>
    </div>
    `;
    main.appendChild(movie1);
  });
}

function movieDetails(event) {
  console.log(event.target.id);

  console.log(event.target.dataset);
  const data = event.target.dataset;
  window.location.href = `./trending.html?id=${data.id}`;
  console.log("heelo");
}

// <div> <h3>OVERVIEW</h3></div>
//     ${overview}
// let content = `<img src="${ IMG_URL + poster_path }"  alt="${ title }" >
// <h1> ${ title } </h1>
// <button class="movieDetails" onclick="movieDetails(event)" data-id=${id}> SHOW DETAILS </button>`
// let hold = document.createTextNode(content);

// hello
// world
// something 