const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = document.getElementById('name').value;
  try {
    const response = await fetch('http://localhost:3000/api/lista/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome })
    });

    if (!response.ok) {
      const erro = await response.json();
      alert(erro.mensagem || 'Erro ao cadastrar lista');
      return;
    }

    const data = await response.json();

    // window.location.href = '../pagina principal/principal.html';

  } catch (err) {
    alert('Erro inesperado');
  }
});