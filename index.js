// Initianilastion des variables en tete afin qu'elles aient une portée globale
const nextInput = document.querySelectorAll("input");
const input = document.getElementById("child1");
const boutton = document.getElementById("button");
const paragraphe = document.getElementById("paragraphe");
const reset = document.getElementById("reset");
const btn = document.getElementById("btn");

function BouttonToggle() {
  // Vérifie le contenu actuel du bouton
  if (boutton.innerHTML === "Choisir un mode") {
    // Si le bouton contient "Choisir un mode", alors :
    // - Change le texte du bouton en "Mode couleur"
    boutton.innerHTML = "Mode couleur";
    // - Modifie le texte du paragraphe en dessous du bouton en "Mode de notation par couleur"
    paragraphe.textContent = "Mode de notation par couleur";
    // - Définit la couleur de fond du bouton en vert
    boutton.style.backgroundColor = "green";

    // Utilise une boucle forEach pour itérer sur un ensemble d'éléments HTML appelé "nextInput"
    // - Supprime l'attribut "hidden" de chaque élément, les rendant visibles
    // - Définit la couleur de fond de chaque élément en vert
    nextInput.forEach((champ) => {
      champ.removeAttribute("hidden");
      champ.style.backgroundColor = "green";
    });
  } else if (boutton.innerHTML === "Mode couleur") {
    // Si le bouton contient "Mode couleur", alors :
    // - Change le texte du bouton en "Mode note"
    boutton.innerHTML = "Mode note";
    // - Modifie le texte du paragraphe en dessous du bouton en "Mode de notation par note"
    paragraphe.textContent = "Mode de notation par note";
    // - Supprime la couleur de fond du bouton, revenant ainsi à la couleur par défaut
    boutton.style.backgroundColor = "";

    // Utilise une boucle forEach pour itérer sur l'ensemble d'éléments "nextInput" encore une fois
    // - Supprime la couleur de fond de chaque élément, revenant ainsi à la couleur par défaut
    nextInput.forEach((champ) => {
      champ.style.backgroundColor = "";
    });
  } else {
    // Si aucune des conditions précédentes n'est satisfaite, cela signifie que le bouton contient "Mode note"
    // Dans ce cas :
    // - Change le texte du bouton en "Mode couleur"
    boutton.innerHTML = "Mode couleur";
    // - Modifie le texte du paragraphe en dessous du bouton en "Mode de notation par couleur"

    // Utilise une boucle forEach pour itérer sur l'ensemble d'éléments "nextInput"
    // - Supprime l'attribut "hidden" de chaque élément, les rendant visibles
    // - Définit la couleur de fond du bouton en vert
    nextInput.forEach((champ) => {
      champ.removeAttribute("hidden");
      champ.style.backgroundColor = "green";
      boutton.style.backgroundColor = "green";
    });
  }
}


// Focus suivant, application des couleurs et masquage du contenu input pour le monde note

// Application d'un ecouteur d'evenement click
boutton.addEventListener("click", () => {
  // application d'une condition dans mon evenement : si je clique et que je suis en "Mode couleur", le focus se met dans le premier input
  if (boutton.innerHTML === "Mode couleur") {
    input.focus();
    // et j'applique une boucle forEach dans lequel il y a une condition :
    nextInput.forEach((input, index) => {
      // Si je suis en "Mode couleur"
      if (boutton.innerHTML === "Mode couleur") {
        // et que j'applique un evenement input avec une autre condition dedans :
        input.addEventListener("input", () => {
          // si mon boutton est en "Mode couleur" et que le contenu de mon input est égal 1 : le fond sera rouge, la valeur du champ est masquée et je passe au focus suivant
          if (boutton.innerHTML === "Mode couleur" && input.value === "1") {
            input.style.backgroundColor = "red";
            input.value = "";
            nextInput[index + 1].focus();
          }
          // si mon boutton est en "Mode couleur" et que le contenu de mon input est égal 2 : le fond sera orange, la valeur du champ est masquée et je passe au focus suivant
          else if (
            boutton.innerHTML === "Mode couleur" &&
            input.value === "2"
          ) {
            input.style.backgroundColor = "orange";
            input.value = "";
            nextInput[index + 1].focus();
          } else if (
            boutton.innerHTML === "Mode couleur" &&
            input.value === "3"
          ) {
            input.style.backgroundColor = "yellow";
            input.value = "";
            nextInput[index + 1].focus();
          } else if (
            boutton.innerHTML === "Mode couleur" &&
            input.value === "4"
          ) {
            input.style.backgroundColor = "green";
            input.value = "";
            nextInput[index + 1].focus();
          }
        });
      }
    });
  }
  // Deuxiéme condition de mon evenement click, si je clique dessus et que je suis en "Mode note"
  else if (boutton.innerHTML === "Mode note") {
    // Le focus se met sur le premier champ input du "Mode note"
    input.focus();
    // Et j'applique une boucle forEach dans lequel j'incorpore un evenement input : si je suis en "Mode note" et que mon champ est égal à 1 ou 2 ou 3 etc... jusque 5 le focus passe au suivant
    nextInput.forEach((input, index) => {
      input.addEventListener("input", () => {
        if (boutton.innerHTML === "Mode note" && input.value === "1") {
          nextInput[index + 1].focus();
        } else if (boutton.innerHTML === "Mode note" && input.value === "2") {
          nextInput[index + 1].focus();
        } else if (boutton.innerHTML === "Mode note" && input.value === "3") {
          nextInput[index + 1].focus();
        } else if (boutton.innerHTML === "Mode note" && input.value === "4") {
          nextInput[index + 1].focus();
        } else if (boutton.innerHTML === "Mode note" && input.value === "5") {
          nextInput[index + 1].focus();
        }
      });
    });
  }
});

// Boutton pour reset le "Mode couleur" : aprés avoir créér une variable comportant l'id du boutton reset, j'applique un evenement click
// Dans cette événement : si je suis en "Mode note" ou en "Mode couleur" et que tous mes inputs qui sont parcourus par une boucle forEach et qu'ils ne sont pas vide, je retire la valeur des champs
// et la couleur revient par défaut en vert.

reset.addEventListener("click", () => {
  if (boutton.innerHTML === "Mode note" && input.value !== "") {
    nextInput.forEach((element) => {
      element.value = "";
    });
    alert("Tableau mis à jour !");
  } else if (boutton.innerHTML === "Mode couleur" && input.value === "") {
    nextInput.forEach((element) => {
      element.value = "";
      element.style.backgroundColor = "green";
    });
    alert("Tableau mis à jour !");
  }
});

// Boutton pour revenir au "Mode de base"

btn.addEventListener("click", () => {
  if (boutton.innerHTML === "Mode couleur") {
    boutton.innerHTML = "Choisir un mode";
    paragraphe.textContent = "Mode de base";
    nextInput.forEach((input) => {
      input.setAttribute("hidden", "");
    });
  } else if (boutton.innerHTML === "Mode note") {
    boutton.innerHTML = "Choisir un mode";
    paragraphe.textContent = "Mode de base";
    nextInput.forEach((input) => {
      input.setAttribute("hidden", "");
    });
  }
});
