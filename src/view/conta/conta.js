document.addEventListener("DOMContentLoaded", () => {
    const contaSection = document.querySelector(".container");
    contaSection.style.display = "none";
  
    const menuButton = document.querySelector("#menu-conta");
  
    menuButton.addEventListener("click", () => {
      contaSection.style.display = "block";
    });
  });
  