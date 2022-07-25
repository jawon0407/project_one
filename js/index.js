const header = document.querySelector(`header`);
const bottomNav = document.querySelectorAll(".bottom_nav_content > li");

bottomNav.forEach((li) => {
  li.addEventListener("mouseover", () => {
    header.style.height = "560px";
  });
  li.addEventListener("mouseleave", () => {
    header.style.height = "180px";
  });
});
