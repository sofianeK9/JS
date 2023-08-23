// const nextInput = document.querySelectorAll("input");
// const input = document.getElementById("child1");
// const boutton = document.getElementById("button");
// const paragraphe = document.getElementById("paragraphe");

// // Fonction au nom de BouttonToggle qui permet de switcher de Mode de base à Mode couleur et Mode note
// function BouttonToggle() {
//   // Je récupére les id et je les stocke dans des variables
//   const boutton = document.getElementById("button");
//   const champTexte = document.querySelectorAll("input");
//   const paragraphe = document.getElementById("paragraphe");
//   //  j'utilise une condition : si le boutton à comme contenu choisir un mode, je change son texte en "Mode couleur" ainsi que le texte en dessous
//   if (boutton.innerHTML === "Choisir un mode") {
//     boutton.innerHTML = "Mode couleur";
//     paragraphe.textContent = "Mode de notation par couleur";
//     // Et j'uilise une boucle ForEach pour retirer l'attribut qui cacher les champs de texte et leur applique un fond vert
//     champTexte.forEach((champ) => {
//       champ.removeAttribute("hidden");
//       champ.style.backgroundColor = "green";
//     });
//     //  J'emet une autre condition : si le boutton à comme contenu Mode couleur, alors je le switch avec comme contenu "Mode note" et je modifie son paragraphe en dessous
//     // Et je retire le fond de couleur vert pour revenir à un fond de base.
//   } else if (boutton.innerHTML === "Mode couleur") {
//     boutton.innerHTML = "Mode note";
//     paragraphe.textContent = "Mode de notation par note";
//     champTexte.forEach((champ) => {
//       champ.style.backgroundColor = "";
//     });
//     // Enfin, dans ma derniére condition, je vais revenir mon boutton en "Mode couleur" afin de switcher entre "Mode note" et "Mode couleur" avec le fond de couleur adapté au mode choisit.
//   } else {
//     boutton.innerHTML = "Mode couleur";
//     paragraphe.textContent = "Mode de notation par couleur";

//     champTexte.forEach((champ) => {
//       champ.removeAttribute("hidden");
//       champ.style.backgroundColor = "green";
//     });
//   }
// }

// // Focus suivant, application des couleurs et masquage du contenu input pour le monde note
// boutton.addEventListener("click", () => {
//   if (boutton.innerHTML === "Mode couleur") {
//     input.focus();

//     nextInput.forEach((input, index) => {
//       if (boutton.innerHTML === "Mode couleur") {
//         input.addEventListener("input", () => {
//           if (boutton.innerHTML === "Mode couleur" && input.value === "1") {
//             input.style.backgroundColor = "red";
//             input.value = "";
//           } else if (
//             boutton.innerHTML === "Mode couleur" &&
//             input.value === "2"
//           ) {
//             input.style.backgroundColor = "orange";
//             input.value = "";
//           } else if (
//             boutton.innerHTML === "Mode couleur" &&
//             input.value === "3"
//           ) {
//             input.style.backgroundColor = "yellow";
//             input.value = "";
//           } else if (
//             boutton.innerHTML === "Mode couleur" &&
//             input.value === "4"
//           ) {
//             input.style.backgroundColor = "green";
//             input.value = "";
//           }
//           if (input.value === "1" && index < nextInput.length - 1) {
//             nextInput[index + 1].focus();
//           }
//         });
//       }
//     });
//   }
// });

