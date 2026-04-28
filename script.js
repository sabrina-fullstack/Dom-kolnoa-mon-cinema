let movies = []; //Tableau global movies
function addMovies() {
  // Fonction addMovie - lit le formulaire, creer l'objet, ajoute au tableau
  let genre = document.getElementById("genre").value;
  let title = document.getElementById("title").value;
  let names = document.getElementById("names").value;
  let duration = document.getElementById("duration").value;
  let price = document.getElementById("price").value;
  let posterFile = document.getElementById("poster").files[0];
  let poster = URL.createObjectURL(posterFile);
  let dates = document.getElementById("dates").value;

  let movie = {
    genre: genre,
    title: title,
    names: names,
    duration: duration,
    price: price,
    poster: poster,
    dates: dates,
  };
  movies.push(movie);
  renderMovies();
  updateStats();
  saveToLocalStorage();
}
function renderMovies() {
  // Fontion renderMovies - vide et reconstruit le tableau
  let tbody = document.querySelector("table tbody");
  tbody.innerHTML = "";
  movies.forEach(function (movie, index) {
    let row = document.createElement("tr");
    row.innerHTML = `
   <td>${movie.genre}</td>
    <td>${movie.title}</td>
     <td>${movie.names}</td>
      <td>${movie.duration}</td>
       <td>${movie.price}</td>
  
            <td><img src="${movie.poster}" width="80" height="120"></td>  
         <td>${movie.dates}</td>
      <td><button onclick="deleteMovie(${index})">Delete</button></td>`;
    tbody.appendChild(row);
  });
}
function deleteMovie(index) {
  // supprime le tableau
  movies.splice(index, 1);
}
