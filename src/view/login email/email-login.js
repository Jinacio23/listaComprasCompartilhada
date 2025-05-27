const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    if (!response.ok) {
      const erro = await response.json();
      alert(erro.mensagem || 'Erro ao fazer login');
      return;
    }

    const data = await response.json();
    localStorage.setItem('token', data.token);
    console.log('Login realizado com sucesso!');

    window.location.href = '../pagina principal/principal.html';

  } catch (err) {
    alert('Erro inesperado');
  }
});
