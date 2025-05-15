document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const backArrow = document.querySelector(".back-arrow");
  
    backArrow.addEventListener("click", () => {
      window.history.back();
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();
  
      if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      console.log("Email:", email);
      console.log("Senha:", senha);
  
      alert("Login simulado com sucesso!");
    });
  });
  