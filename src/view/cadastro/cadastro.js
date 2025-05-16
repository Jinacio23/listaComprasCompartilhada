function validarCadastro() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
  
    const requisitos = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }
  
    if (!requisitos.test(senha)) {
      alert("A senha não atende aos requisitos.");
      return;
    }
  
    alert("Cadastro realizado com sucesso!");
  }
  