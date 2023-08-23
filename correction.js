boutton.addEventListener("click", () => {
  if (boutton.innerHTML === "Mode couleur") {
    input.focus();

    const nextInput = document.querySelectorAll("input");

    nextInput.forEach((input, index) => {
      if (boutton.innerHTML === "Mode couleur") {
        input.addEventListener("input", () => {
          if (boutton.innerHTML === "Mode couleur" && input.value === "1") {
            nextInput[index + 1].focus();
              input.style.backgroundColor = "red";
              input.value =""
          }
        });
      }
    });
  }
});
