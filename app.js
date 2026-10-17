// ─── State ────────────────────────────────────────────────────────────────────
const CART_KEY = 'joe_cart';
const ITEMS_BY_ID = Object.fromEntries(MENU_ITEMS.map((item) => [item.id, item]));

const state = {
  category: 'All',
  search: '',
  cart: loadCart(),
  cartOpen: false,
};

const $ = (id) => document.getElementById(id);
const itemGrid = $('item-grid');
const searchInput = $('search');
const cartButton = $('cart-button');
const cartBackdrop = $('cart-backdrop');
const cartPanel = $('cart-panel');
const cartLines = $('cart-lines');
const cartTotalEl = $('cart-total');

// ─── Cart persistence ─────────────────────────────────────────────────────────
function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY));
    if (!raw || typeof raw !== 'object') return {};
    return Object.fromEntries(
      Object.entries(raw).filter(
        ([id, qty]) => ITEMS_BY_ID[id] && Number.isInteger(qty) && qty > 0
      )
    );
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const formatPrice = (cents) => '$' + (cents / 100).toFixed(2);

const cartCount = () => Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);

const cartTotal = () =>
  Object.entries(state.cart).reduce((sum, [id, qty]) => sum + ITEMS_BY_ID[id].price * qty, 0);

function visibleItems() {
  return MENU_ITEMS.filter(
    (item) =>
      (state.category === 'All' || item.category === state.category) &&
      item.name.toLowerCase().includes(state.search)
  );
}

// ─── Rendering ────────────────────────────────────────────────────────────────
function itemCard(item) {
  return `
    <div class="item-card">
      <div class="item-emoji">${item.emoji}</div>
      <h3>${esc(item.name)}</h3>
      <span class="badge badge-${item.category.toLowerCase()}">${esc(item.category)}</span>
      <div class="item-desc">${esc(item.description)}</div>
      <div class="item-foot">
        <span class="item-price">${formatPrice(item.price)}</span>
        <button class="btn btn-primary" data-action="add" data-id="${esc(item.id)}">Add to cart</button>
      </div>
    </div>`;
}

function renderCatalogue() {
  const items = visibleItems();
  itemGrid.innerHTML = items.length
    ? items.map(itemCard).join('')
    : '<div class="empty-state">No items match.</div>';
}

function renderCartBadge() {
  const count = cartCount();
  cartButton.textContent = count
    ? `🛒 Cart (${count}) · ${formatPrice(cartTotal())}`
    : '🛒 Cart';
}

function cartLine([id, qty]) {
  const item = ITEMS_BY_ID[id];
  return `
    <div class="cart-line">
      <span class="cart-line-name">${esc(item.name)}</span>
      <span class="cart-line-qty">× ${qty} · ${formatPrice(item.price)}</span>
      <span class="cart-line-price">${formatPrice(item.price * qty)}</span>
      <button class="btn btn-secondary" data-action="remove" data-id="${esc(id)}">Remove</button>
    </div>`;
}

function renderCartPanel() {
  const entries = Object.entries(state.cart);
  cartLines.innerHTML = entries.length
    ? entries.map(cartLine).join('')
    : '<div class="empty-state">Your cart is empty</div>';
  cartTotalEl.textContent = formatPrice(cartTotal());
  cartBackdrop.hidden = !state.cartOpen;
  cartPanel.hidden = !state.cartOpen;
}

function render() {
  renderCatalogue();
  renderCartBadge();
  renderCartPanel();
}

// ─── Cart actions ─────────────────────────────────────────────────────────────
function setCartOpen(open) {
  state.cartOpen = open;
  renderCartPanel();
}

itemGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action="add"]');
  if (!btn) return;
  const id = btn.dataset.id;
  if (!ITEMS_BY_ID[id]) return;
  state.cart[id] = (state.cart[id] || 0) + 1;
  saveCart();
  render();
});

cartLines.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action="remove"]');
  if (!btn) return;
  const id = btn.dataset.id;
  if (!state.cart[id]) return;
  state.cart[id] -= 1;
  if (state.cart[id] <= 0) delete state.cart[id];
  saveCart();
  render();
});

$('clear-cart').addEventListener('click', () => {
  state.cart = {};
  saveCart();
  render();
});

cartButton.addEventListener('click', () => setCartOpen(true));
$('cart-close').addEventListener('click', () => setCartOpen(false));
cartBackdrop.addEventListener('click', () => setCartOpen(false));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.cartOpen) setCartOpen(false);
});

// ─── Filters & search ─────────────────────────────────────────────────────────
document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    state.category = tab.dataset.filter;
    render();
  });
});

searchInput.addEventListener('input', (e) => {
  state.search = e.target.value.toLowerCase();
  render();
});

// ─── Boot ─────────────────────────────────────────────────────────────────────
render();
