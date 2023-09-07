// Initianilastion des variables en tete afin qu'elles aient une portée globale
const nextInput = document.querySelectorAll("input");
const input = document.getElementById("child1");
const boutton = document.getElementById("button");
const paragraphe = document.getElementById("paragraphe");
const reset = document.getElementById("reset");
const btn = document.getElementById("btn");

// Fonction au nom de BouttonToggle qui permet de switcher de "Mode de base" à "Mode couleur" et "Mode note"
function BouttonToggle() {
  //  j'utilise une condition : si le boutton à comme contenu choisir un mode, je change son texte en "Mode couleur" ainsi que le texte en dessous
  if (boutton.innerHTML === "Choisir un mode") {
    boutton.innerHTML = "Mode couleur";
    paragraphe.textContent = "Mode de notation par couleur";
    boutton.style.backgroundColor = "green";
    // Et j'uilise une boucle ForEach pour retirer l'attribut qui cacher les champs de texte et leur applique un fond vert
    nextInput.forEach((champ) => {
      champ.removeAttribute("hidden");
      champ.style.backgroundColor = "green";
    });
    //  J'emet une autre condition : si le boutton à comme contenu Mode couleur, alors je le switch avec comme contenu "Mode note" et je modifie son paragraphe en dessous
    // Et je retire le fond de couleur vert pour revenir à un fond de base.
  } else if (boutton.innerHTML === "Mode couleur") {
    boutton.innerHTML = "Mode note";
    paragraphe.textContent = "Mode de notation par note";
    boutton.style.backgroundColor = "";
    nextInput.forEach((champ) => {
      champ.style.backgroundColor = "";
    });
    // Enfin, dans ma derniére condition, je vais revenir mon boutton en "Mode couleur" afin de switcher entre "Mode note" et "Mode couleur" avec le fond de couleur adapté au mode choisit.
  } else {
    boutton.innerHTML = "Mode couleur";
    paragraphe.textContent = "Mode de notation par couleur";

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
