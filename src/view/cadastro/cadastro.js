const form = document.querySelector(".form");

form.addEventListener('submit',async (event) => {
  event.preventDefault();

  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  try {
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    });

    if (!response.ok) {
      const erro = await response.json();
      alert(erro.mensagem || 'Erro ao fazer cadastro');
      return;
    }

    window.location.href = '../login email/email-login.html';

  } catch (err) {
    alert("erro ao cadastrar!");
  }

  



})









// function validarCadastro() {
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('password').value;
  
//     const requisitos = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
//     if (!email || !senha) {
//       alert("Preencha todos os campos!");
//       return;
//     }
  
//     if (!requisitos.test(senha)) {
//       alert("A senha não atende aos requisitos.");
//       return;
//     }
  
//     alert("Cadastro realizado com sucesso!");
//   }
  