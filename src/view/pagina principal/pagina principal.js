
// MENU LATERAL
const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const sideMenu = document.getElementById("sideMenu");
const sideMenuBg = document.getElementById("sideMenuBg");

openMenuBtn.onclick = function() {
  sideMenu.style.display = "flex";
  setTimeout(() => sideMenuBg.classList.add("active"), 20);
  openMenuBtn.classList.add("hidden"); // some o hamburguer
};
closeMenuBtn.onclick = function() {
  sideMenu.style.display = "none";
  sideMenuBg.classList.remove("active");
  openMenuBtn.classList.remove("hidden"); // mostra o hamburguer
};
sideMenuBg.onclick = function(e) {
  if (e.target === sideMenuBg) {
    sideMenu.style.display = "none";
    sideMenuBg.classList.remove("active");
    openMenuBtn.classList.remove("hidden"); // mostra o hamburguer
  }
};

function criarLista() {
  // ação ao criar lista
}
