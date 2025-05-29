const listas = [
    { nome: 'Data 1', cor: 'lista-verde' },
    { nome: 'Data 2', cor: 'lista-azul' },
    { nome: 'Data 3', cor: 'lista-cinza' },
    { nome: 'Data 4', cor: 'lista-roxa' },
    { nome: 'Data 5', cor: 'lista-azul-escuro' },
  ];
  
  function carregarListas() {
    const container = document.getElementById('listas-container');
    container.innerHTML = '';
  
    listas.forEach((lista, index) => {
      const div = document.createElement('div');
      div.className = `lista-item ${lista.cor}`;
      div.innerHTML = `
        <span>${lista.nome.toUpperCase()}</span>
        <button onclick="editarLista(${index})">✎</button>
      `;
      container.appendChild(div);
    });
  }
  
  function editarLista(index) {
    
    window.location.href = `editar-lista.html?index=${index}`;
  }
  
  function abrirPaginaCriarLista() {
    window.location.href = 'criar-lista.html';
  }
  
  window.onload = carregarListas;
  