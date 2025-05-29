
// -------- MENU LATERAL ---------
const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const sideMenu = document.getElementById("sideMenu");
const sideMenuBg = document.getElementById("sideMenuBg");
openMenuBtn.onclick = function() {
  sideMenu.style.display = "flex";
  setTimeout(() => sideMenuBg.classList.add("active"), 20);
};
closeMenuBtn.onclick = function() {
  sideMenu.style.display = "none";
  sideMenuBg.classList.remove("active");
};
sideMenuBg.onclick = function(e) {
  if (e.target === sideMenuBg) {
    sideMenu.style.display = "none";
    sideMenuBg.classList.remove("active");
  }
};

// -------- LISTA DE COMPRAS ---------
const suggestedItems = [
  { name: 'Leite', icon: '🥛' },
  { name: 'Pão', icon: '🍞' },
  { name: 'Ovos', icon: '🥚' },
  { name: 'Arroz', icon: '🍚' },
  { name: 'Feijão', icon: '🫘' },
  { name: 'Queijo', icon: '🧀' },
  { name: 'Frango', icon: '🍗' },
  { name: 'Carne', icon: '🥩' },
  { name: 'Tomate', icon: '🍅' },
  { name: 'Alface', icon: '🥬' },
  { name: 'Banana', icon: '🍌' },
  { name: 'Maçã', icon: '🍎' },
  { name: 'Café', icon: '☕' },
  { name: 'Açúcar', icon: '🍬' },
  { name: 'Óleo', icon: '🛢️' },
  { name: 'Detergente', icon: '🧴' },
  { name: 'Papel higiênico', icon: '🧻' },
  { name: 'Sabonete', icon: '🧼' },
  { name: 'Cerveja', icon: '🍺' },
  { name: 'Refrigerante', icon: '🥤' },
];
let shoppingList = [];
function renderShoppingList() {
  const listEl = document.getElementById('shoppingList');
  listEl.innerHTML = '';
  if (shoppingList.length === 0) return;
  shoppingList.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'shopping-item';
    el.innerHTML = `
      <span class="item-name">${item.icon ? item.icon + ' ' : ''}${item.name}</span>
      <span class="item-qty">${item.qty}</span>
      <button class="remove-btn" title="Remover" data-idx="${idx}">&times;</button>
    `;
    listEl.appendChild(el);
  });
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.onclick = e => {
      const idx = parseInt(btn.getAttribute('data-idx'));
      shoppingList.splice(idx, 1);
      renderShoppingList();
    };
  });
}
document.getElementById('addItemBtn').onclick = function() {
  const input = document.getElementById('item-input');
  const value = input.value.trim();
  if (value.length === 0) return;
  let found = shoppingList.find(i => i.name.toLowerCase() === value.toLowerCase());
  if (found) {
    found.qty += 1;
  } else {
    shoppingList.push({ name: value, qty: 1 });
  }
  input.value = '';
  renderShoppingList();
};
document.getElementById('item-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('addItemBtn').click();
});
document.getElementById('openSheetBtn').onclick = function() {
  document.getElementById('modalBg').classList.add('show');
  document.getElementById('sheetSearchInput').value = '';
  renderSheetList('');
};
document.getElementById('closeSheetBtn').onclick = function() {
  document.getElementById('modalBg').classList.remove('show');
};
document.getElementById('modalBg').onclick = function(e) {
  if (e.target === this) this.classList.remove('show');
};
document.getElementById('sheetSearchInput').oninput = function(e) {
  renderSheetList(this.value);
};
function renderSheetList(filterStr) {
  const listEl = document.getElementById('sheetList');
  let items = suggestedItems;
  if (filterStr && filterStr.trim().length > 0) {
    const f = filterStr.trim().toLowerCase();
    items = suggestedItems.filter(i => i.name.toLowerCase().includes(f));
  }
  listEl.innerHTML = '';
  if (items.length === 0) {
    listEl.innerHTML = '<div style="color:#bbb;text-align:center;padding:14px 0">Nenhum item encontrado.</div>';
    return;
  }
  items.forEach((item, idx) => {
    const curId = `sheet-qty-${idx}`;
    const curQty = 1;
    const el = document.createElement('div');
    el.className = 'sheet-item';
    el.innerHTML = `
      <div class="sheet-item-img">${item.icon || ''}</div>
      <div class="sheet-item-name">${item.name}</div>
      <div class="sheet-qty-ctrl">
        <button type="button" class="sheet-decr">-</button>
        <input type="text" value="1" min="1" id="${curId}">
        <button type="button" class="sheet-incr">+</button>
      </div>
      <button class="sheet-add-btn">Adicionar</button>
    `;
    setTimeout(() => {
      const qtyInput = el.querySelector(`#${curId}`);
      el.querySelector('.sheet-incr').onclick = () => {
        qtyInput.value = Math.min(99, parseInt(qtyInput.value) + 1);
      };
      el.querySelector('.sheet-decr').onclick = () => {
        qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
      };
      qtyInput.oninput = () => {
        let v = parseInt(qtyInput.value.replace(/\D/g, '') || 1);
        if (isNaN(v) || v < 1) v = 1;
        if (v > 99) v = 99;
        qtyInput.value = v;
      };
    }, 1);
    el.querySelector('.sheet-add-btn').onclick = () => {
      const qty = parseInt(el.querySelector(`#${curId}`).value) || 1;
      let found = shoppingList.find(i => i.name.toLowerCase() === item.name.toLowerCase());
      if (found) {
        found.qty += qty;
      } else {
        shoppingList.push({ name: item.name, icon: item.icon, qty });
      }
      renderShoppingList();
    };
    listEl.appendChild(el);
  });
}
renderShoppingList();
