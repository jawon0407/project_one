const space = document.querySelector(`header`);
const letter = document.querySelectorAll(".menu a");

space.addEventListener("mouseover", () => {
  space.style.backgroundColor = "white";
  letter.forEach(() => {
    for (var i = 0; i < letter.length; i++) {
      letter[i].style.color = "black";
    }
  });
});

space.addEventListener("mouseleave", () => {
  space.style.backgroundColor = "";
  letter.forEach(() => {
    for (var i = 0; i < letter.length; i++) {
      letter[i].style.color = "white";
    }
  });
});
