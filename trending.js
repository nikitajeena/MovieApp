
const searchParams = window.location.search;
const id = searchParams.split("=")[1];
const main = document.getElementById("details");



async function video(){

  const VIDEO_URL = "https://www.youtube.com/embed/";
  const video = await(
    await fetch (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=208c210d772df59c8ecce5af408f7544` 
  )).json();
  const nav = document.getElementById("video");
  const { key } = video.results[0];
  let display = document.createElement("div");
  display.classList.add("container");
  display.innerHTML = ` 
  <div class="videoSection" >
 <div> <iframe src="${VIDEO_URL + key}"> </iframe> <div> </div>
`;
  nav.appendChild(display);
  main.appendChild(nav);
}







async function call() {
  // const searchParams = window.location.search;
  // const id = searchParams.split("=")[1];
  // console.log(id);
  const IMG_URL = " https://image.tmdb.org/t/p/w500";
  
  
  

  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=208c210d772df59c8ecce5af408f7544&a0ppend_to_response=titles,vote_averages,overviews,images,media_types,videos`
    )
  ).json();

  // const main = document.getElementById("details");
  console.log(data);
  const {title, overview, poster_path, vote_average, media_type} = data;
  let display = document.createElement("div");
  display.classList.add("container");
  display.innerHTML = ` 
    <div class="section" >
    
   
      
    <div class="section1" ><img src="${
      IMG_URL + poster_path
    }"  alt="${title}" > </div>
        
    <div class="section2"> 
     <h1>${title}</h1>
     <h2> Rating:  ${vote_average}</h2>
     <h2>${media_type}</h2>
     <div class="overview">
     <h1>OVERVIEW</h1>
      <p> ${overview} <p>
      </div>
    </div>

`;
  main.appendChild(display);
  video();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(":::dom loaded");
  call();
});

{
  /* <iframe width="1280" height="720" src="https://www.youtube.com/embed/iLWTnMzWtj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     */
}
