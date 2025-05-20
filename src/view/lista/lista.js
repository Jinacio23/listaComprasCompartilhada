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
