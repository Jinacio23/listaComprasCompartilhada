const checkboxes = document.querySelectorAll('#listaForm input[type="checkbox"]');
const totalValor = document.getElementById('totalValor');

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

function adicionarItem() {
  alert("Função para adicionar item clicada!");
}


function abrirPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function gerarCodigo() {
  const codigo = Math.random().toString(36).substr(2, 6).toUpperCase();
  document.getElementById("codigoGerado").innerText = "Código: " + codigo;
}

function entrar() {
  const codigo = document.getElementById("codigo").value;
  alert("Entrando com o código: " + codigo);
}