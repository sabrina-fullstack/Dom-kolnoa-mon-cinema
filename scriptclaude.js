//   1 querySelector / querySelectorAll
// Exercice : Sélectionnez le bouton avec id="btn" et affichez "cliqué" dans la console quand on clique dessus.

const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  console.log("Button was clicked !");
});

//   getElementById
// Sélectionnez le paragraphe avec id="text" et changez son contenu en "Bonjour !" 💪

const text = document.getElementById("text");
text.textContent = "Bonjour !";

// classList.toggle
// Quand on clique sur un bouton, ajoutez la classe "active" à un div. Si elle existe déjà, supprimez-la. 💪

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
  const maDiv = document.querySelector("#maDiv");
  maDiv.classList.toggle("active");
});

// Quand on clique sur le bouton, créez un <li> avec le texte "Nouvel item" et ajoutez-le dans la <ul>.

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
  const maListe = document.querySelector("#maListe");
  const li = document.createElement("li");
  li.textContent = "Nouvel item";
  maListe.appendChild(li);
});

//  innerHTML
// Quand on clique sur un bouton, ajoutez <strong>Texte en gras</strong> dans un div.
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function () {
  const monDiv = document.getElementById("monDiv");
  monDiv.innerHTML = "<strong>Texte en gras</strong>";
});

// addEventListener / input event
// Affichez en temps réel le nombre de caractères tapés dans un <input>.
const monInput = document.querySelector("#monInput");
const compteur = document.querySelector("#compteur");

monInput.addEventListener("input", function () {
  compteur.textContent = monInput.value.length;
});

// keydown event
// Quand l'utilisateur appuie sur "Enter", affichez dans la console "Enter pressé !" 💪

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log("Enter pressé !");
  }
});

// element.remove()
// Quand on clique sur le paragraphe "Cliquez pour me supprimer !", supprimez-le.
const paraSuppr = document.querySelector("#paraSuppr");
paraSuppr.addEventListener("click", function () {
  // paraSuppr.textContent = "Cliquez pour me supprimer !"; pas besoin car cest deja dans le html
  paraSuppr.remove();
});

// mouseenter / mouseleave.
// Quand la souris entre sur un div, changez son fond en gris. Quand elle part, remettez-le en blanc.

const divSouris = document.querySelector("#divSouris");
divSouris.addEventListener("mouseenter", function () {
  divSouris.style.backgroundColor = "gray";
});
divSouris.addEventListener("mouseleave", function () {
  divSouris.style.backgroundColor = "white";
});

//SUBMIT EVENT
// Quand le formulaire est soumis :
// Empêchez le rechargement de la page
// Affichez dans la console la valeur du champ nom
const monForm = document.querySelector("#monForm");
monForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = document.getElementById("nom");
  console.log(nom.value);
});

// focus / blur
// Quand un input reçoit le focus, affichez "En cours de saisie". Quand il le perd, affichez "Saisie terminée". 💪
const inputFocus = document.querySelector("#inputFocus");
const messageFocus = document.querySelector("#messageFocus");
inputFocus.addEventListener("focus", function () {
  messageFocus.textContent = "En cours de saisie";
});

inputFocus.addEventListener("blur", function () {
  messageFocus.textContent = "Saisie terminée";
});

// DOMContentLoaded
// Quand la page est chargée, affichez "Page prête !" dans un <p> avec id="message". 💪
const message = document.querySelector("#message");

document.addEventListener("DOMContentLoaded", function () {
  message.textContent = "Page prête !";
});
// localStorage
// Sauvegardez le nom "Alice" dans localStorage, puis relisez-le et affichez-le dans un <p> avec id="resultat".
const resultat = document.querySelector("#resultat");
localStorage.setItem("nom", "Alice");
resultat.textContent = localStorage.getItem("nom");
// JSON.stringify / JSON.parse
// Sauvegardez l'objet { name: "Alice", age: 25 } dans localStorage, puis relisez-le et affichez le nom dans <p id="resultat2">. 💪
const resultat2 = document.querySelector("#resultat2");
const user = { name: "Alice", age: 25 }; // je crée l'objet
localStorage.setItem("user", JSON.stringify(user)); // je sauvegarde en texte JSON
const saved = localStorage.getItem("user"); // je récupère le texte
const obj = JSON.parse(saved); // je convertis en objet JS
resultat2.textContent = obj.name; // j'affiche le nom
// click event — Compteur
// Chaque clic incrémente le chiffre affiché dans le <span>

const btnCompteur = document.querySelector("#btnCompteur"); // sélectionne le bouton
const compteur2 = document.querySelector("#compteur2"); // sélectionne le <span>
let count = 0; // compteur DEHORS de la fonction !

btnCompteur.addEventListener("click", function () {
  count++; // ajoute 1 à chaque clic
  compteur2.textContent = count; // affiche le nouveau chiffre dans le <span>
});

// preventDefault
// Quand on clique sur le lien :

// Empêchez la navigation vers Google
// Affichez "Navigation bloquée !" dans la console
const monLien = document.querySelector("#monLien");
monLien.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Navigation bloquée !");
});
// Event Delegation
// Une <ul> contient plusieurs <li>. Quand on clique sur un <li>, affichez son texte dans la console — avec un seul addEventListener sur la <ul>.

const maListe2 = document.querySelector("#maListe2");
maListe2.addEventListener("click", function (e) {
  console.log(e.target.textContent);
});
