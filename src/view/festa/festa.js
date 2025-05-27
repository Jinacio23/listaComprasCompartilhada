const checkboxes = document.querySelectorAll('#listaFesta input[type="checkbox"]');
const totalValor = document.getElementById('totalValor');

// Atualiza o valor total quando uma checkbox for marcada/desmarcada
checkboxes.forEach(item => {
  item.addEventListener('change', atualizarTotal);
});

function atualizarTotal() {
  let total = 0;
  checkboxes.forEach(chk => {
    if (chk.checked) {
      total += parseFloat(chk.value);
    }
  });
  totalValor.textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
}

// Função de botão "+"
function adicionarItem() {
  alert("Função para adicionar item clicada!");
}

// Abre o popup de compartilhamento
function abrirPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Fecha o popup
function fecharPopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Gera um código aleatório para compartilhamento
function gerarCodigo() {
  const codigo = Math.random().toString(36).substr(2, 6).toUpperCase();
  document.getElementById("codigoGerado").innerText = "Código: " + codigo;
}

// Ação de entrar com o código
function entrar() {
  const codigo = document.getElementById("codigo").value;
  alert("Entrando com o código: " + codigo);
}
