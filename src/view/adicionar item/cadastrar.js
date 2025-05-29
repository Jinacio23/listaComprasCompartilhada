const form = document.querySelector('form');

async function cadastrarLista(val){
  const nome = document.getElementById('name').value;
  const categoria = document.getElementById('categoria').value;

  try {
    const response = await fetch('http://localhost:3000/api/lista/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, categoria })
    });

    if (!response.ok) {
      const erro = await response.json();
      alert(erro.mensagem || 'Erro ao cadastrar lista');
      return;
    }

    const data = await response.json();
    // window.location.href = '../pagina principal/principal.html';

    if (val) {
      if(data.lista.id != null){
        localStorage.setItem('idList', JSON.stringify(data.lista.id));
        window.location.href = '../lista/lista.html';
      } else {
        alert("id não recuperado");
      }
    }

  } catch (err) {
    alert('Erro inesperado');
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = document.getElementById('name').value;
  const categoria = document.getElementById('categoria').value;

  try {
    const response = await fetch('http://localhost:3000/api/lista/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, categoria })
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