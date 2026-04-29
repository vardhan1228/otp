/* Shared product page interactions with DB-backed cart */
const catalog = {
  earphones: [
    { id: 'b1', name: 'Pixel Buds A', price: 3999, img: 'https://www.zdnet.com/a/img/2021/07/01/34c83a72-079a-471c-87f4-6c7e25f62fd4/google-pixel-budsa-9.jpg', rating: 4.2, desc: 'Comfortable daily buds.' },
    { id: 'b2', name: 'Pixel Buds Pro', price: 8999, img: 'https://lh3.googleusercontent.com/e95PC7GGP-6adM9kXtz2vPJndzZr8TI3GFCAhc6K5UL30AkXtdjhcoFwn2waHnD_4-PBLxqfIlQdQ1xITJER4f79HSmdyr_-Ljs=s0', rating: 4.5, desc: 'Active noise-canceling.' },
    { id: 'b3', name: 'Pixel Ear Fit', price: 2499, img: 'https://i.etsystatic.com/22389669/r/il/eb06b4/5258570999/il_300x300.5258570999_m3dp.jpg', rating: 4.0, desc: 'Budget wireless buds.' },
    { id: 'b4', name: 'Pixel Buds Max', price: 12999, img: 'https://www.bing.com/th/id/OIP.VuWYYdnxPa4wPqMorO9SoAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', rating: 4.6, desc: 'Large drivers for richer sound.' },
    { id: 'b5', name: 'Pixel Neckband Air', price: 2199, img: 'https://www.bing.com/th/id/OIP.fZ7hUN6M0PtlBfxDUiZqngHaDC?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', rating: 3.9, desc: 'Light neckband for casual listening.' },
    { id: 'b6', name: 'Pixel Studio Buds', price: 7499, img: 'https://www.bing.com/th/id/OIP.qRyFmyE8_4jEw3RDTZ7njQHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', rating: 4.4, desc: 'Balanced tuning for creators.' },
    { id: 'b7', name: 'Pixel Bass Pods', price: 3199, img: 'https://www.bing.com/th/id/OIP.5XA3_sZXEVkhntcw9oya1wHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', rating: 4.1, desc: 'Extra bass for workout playlists.' },
    { id: 'b8', name: 'Pixel Buds Lite', price: 1799, img: 'https://www.bing.com/th/id/OIP.STwc9MdzyKoOHGIRKf6MHgHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', rating: 3.8, desc: 'Entry-level wireless audio.' },
    { id: 'b9', name: 'Google Sound Loop', price: 2799, img: 'https://th.bing.com/th/id/OIP.F7H-YVIJmfTx_wIBrBD2_wHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', rating: 4, desc: 'Secure-fit buds for running.' },
    { id: 'b10', name: 'Pixel Noise Pro', price: 9699, img: 'data:image/jpeg;base64,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', rating: 4.5, desc: 'Adaptive cancellation with transparency mode.' }
  ]
};

function buildCatalogImage(categoryKey, name, index) {
  const itemName = String(name || '').trim();
  const itemKey = itemName.toLowerCase();
  let searchTerms = `${itemName},product`;

  if (categoryKey === 'phones') {
    if (itemKey.includes('fold')) searchTerms = `${itemName},foldable,smartphone`;
    else if (itemKey.includes('watch')) searchTerms = `${itemName},smartwatch,wearable`;
    else searchTerms = `${itemName},smartphone,mobile,phone`;
  } else if (categoryKey === 'earphones') {
    if (itemKey.includes('neckband')) searchTerms = `${itemName},neckband,earphones`;
    else if (itemKey.includes('sport') || itemKey.includes('fit')) searchTerms = `${itemName},sport,earbuds`;
    else searchTerms = `${itemName},earphones,earbuds,headphones`;
  } else if (categoryKey === 'computers') {
    if (itemKey.includes('chromebox') || itemKey.includes('mini pc') || itemKey.includes('tower')) searchTerms = `${itemName},desktop,computer`;
    else if (itemKey.includes('slate') || itemKey.includes('classboard')) searchTerms = `${itemName},tablet,computer`;
    else searchTerms = `${itemName},computer,laptop,desktop`;
  } else if (categoryKey === 'electronics') {
    if (itemKey.includes('cam')) searchTerms = `${itemName},security,camera`;
    else if (itemKey.includes('router') || itemKey.includes('mesh')) searchTerms = `${itemName},wifi,router`;
    else if (itemKey.includes('doorbell')) searchTerms = `${itemName},smart,doorbell`;
    else if (itemKey.includes('speaker') || itemKey.includes('hub')) searchTerms = `${itemName},electronics,gadgets,smart,home`;
    else if (itemKey.includes('remote')) searchTerms = `${itemName},remote,electronics`;
    else searchTerms = `${itemName},electronics,gadgets,technology`;
  }

  const lock = stableImageLock(`${categoryKey}-${index}-${itemName}`);
  return `https://loremflickr.com/600/400/${encodeURIComponent(searchTerms)}?lock=${lock}`;
}

function stableImageLock(value) {
  return Array.from(String(value)).reduce((hash, char) => {
    return (hash * 31 + char.charCodeAt(0)) % 100000;
  }, 17) + 1;
}
const API_BASE = 'http://localhost:5000/api';
const USER_KEY = 'googleStoreUser';
const EARPHONE_IMAGE_FALLBACK = '../images/earphones.svg';

const body = document.body;
const category = body.getAttribute('data-category') || 'electronics';
let products = catalog[category] || [];
let cart = {};
let cartItems = [];
let lazyEnabled = true;

const preloader = document.getElementById('preloader');
const gridView = document.getElementById('gridView');
const carouselView = document.getElementById('carouselView');
const swiperWrapper = document.getElementById('swiperWrapper');
const pageTitle = document.getElementById('page-title');
const heroName = document.getElementById('hero-name');
const heroPrice = document.getElementById('hero-price');
const heroImage = document.getElementById('hero-image');
const cartBtn = document.getElementById('cartBtn');
const cartEl = document.getElementById('cart');
const cartList = document.getElementById('cartList');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalAdd = document.getElementById('modalAdd');
const searchInput = document.getElementById('search');
const sortEl = document.getElementById('sort');
const gridBtn = document.getElementById('gridBtn');
const carouselBtn = document.getElementById('carouselBtn');
const viewToggle = document.getElementById('viewToggle');
const themeToggle = document.getElementById('themeToggle');
const toggleLazy = document.getElementById('toggleLazy');
const clearSearch = document.getElementById('clearSearch');

clearSearch.innerHTML = '&times;';
viewToggle.innerHTML = '&#128257;';
themeToggle.innerHTML = '&#9790;';
if (cartBtn.firstElementChild) cartBtn.firstElementChild.innerHTML = '&#128722;';

pageTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
document.getElementById('year').textContent = new Date().getFullYear();

const fmt = n => 'Rs. ' + Number(n || 0).toLocaleString('en-IN');

function safeImage(src) {
  return src || EARPHONE_IMAGE_FALLBACK;
}

function withFallbackImageMarkup(src, alt, extraAttrs = '') {
  return `<img ${extraAttrs} src="${safeImage(src)}" alt="${alt}" onerror="this.onerror=null;this.src='${EARPHONE_IMAGE_FALLBACK}'">`;
}

function readCurrentUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function getCurrentUserEmail() {
  const user = readCurrentUser();
  return user?.email || '';
}

function requireLoggedIn(action) {
  const email = getCurrentUserEmail();
  if (email) return email;
  alert(`Please login on the home page before you ${action}.`);
  return '';
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Request failed');
  return data;
}

function getById(id) {
  return Object.values(catalog).flat().find(item => item.id === id);
}

function syncCartState(items) {
  cartItems = items || [];
  cart = {};
  cartItems.forEach(item => {
    cart[item.product_id] = Number(item.quantity || 0);
  });
}

async function refreshCartFromServer() {
  const email = getCurrentUserEmail();
  if (!email) {
    syncCartState([]);
    renderCart();
    return;
  }
  try {
    const data = await apiRequest(`/cart?email=${encodeURIComponent(email)}`);
    syncCartState(data.items || []);
    renderCart();
  } catch (error) {
    console.error('Cart load failed', error);
    cartList.innerHTML = '<div class="muted">Unable to load cart</div>';
  }
}

window.GoogleStoreCart = {
  apiRequest,
  getCurrentUserEmail,
  getCartItems: () => cartItems.slice(),
  readCurrentUser,
  refreshCart: refreshCartFromServer,
  requireLoggedIn
};

function renderGrid(items) {
  gridView.innerHTML = '';
  if (!items.length) {
    gridView.innerHTML = '<div class="muted">No products found.</div>';
    return;
  }
  items.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card tilt';
    card.innerHTML = `
      <div class="thumb">${withFallbackImageMarkup(p.img, p.name, lazyEnabled ? 'loading="lazy"' : '')}</div>
      <div class="meta"><div class="title">${p.name}</div><div class="price">${fmt(p.price)}</div></div>
      <div class="muted" style="font-size:13px">Rating ${p.rating} - ${p.desc}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px">
        <div><button class="btn small quick" data-id="${p.id}">Quick view</button>
             <button class="btn small ghost add" data-id="${p.id}">Add</button></div>
        <button class="btn small ghost fav" data-id="${p.id}">Wish</button>
      </div>
    `;
    gridView.appendChild(card);
  });

  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('.tilt'), { max: 8, speed: 400, glare: true, 'max-glare': 0.08 });
  }
  gridView.querySelectorAll('.quick').forEach(button => {
    button.onclick = () => openModal(getById(button.dataset.id));
  });
  gridView.querySelectorAll('.add').forEach(button => {
    button.onclick = () => addToCart(button.dataset.id, 1);
  });
}

let swiperInstance = null;
function renderCarousel(items) {
  swiperWrapper.innerHTML = '';
  if (!items.length) {
    swiperWrapper.innerHTML = '<div class="muted">No products</div>';
    return;
  }
  items.forEach(p => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<div class="swiper-card card">
        <div class="thumb">${withFallbackImageMarkup(p.img, p.name, lazyEnabled ? 'loading="lazy"' : '')}</div>
        <div class="meta"><div class="title">${p.name}</div><div class="price">${fmt(p.price)}</div></div>
        <div class="muted" style="font-size:13px">Rating ${p.rating}</div>
        <div style="margin-top:10px;display:flex;gap:8px"><button class="btn small quick" data-id="${p.id}">Quick view</button><button class="btn small ghost add" data-id="${p.id}">Add</button></div>
      </div>`;
    swiperWrapper.appendChild(slide);
  });

  if (typeof Swiper !== 'undefined') {
    if (swiperInstance) swiperInstance.destroy(true, true);
    swiperInstance = new Swiper('.mySwiper', {
      slidesPerView: 1.3,
      centeredSlides: true,
      spaceBetween: 18,
      loop: false,
      breakpoints: { 640: { slidesPerView: 1.6 }, 980: { slidesPerView: 2.2 }, 1200: { slidesPerView: 3 } },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      pagination: { el: '.swiper-pagination', clickable: true }
    });
  }

  document.querySelectorAll('.quick').forEach(button => {
    button.onclick = () => openModal(getById(button.dataset.id));
  });
  document.querySelectorAll('.add').forEach(button => {
    button.onclick = () => addToCart(button.dataset.id, 1);
  });
}

function openModal(product) {
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  modalImg.src = safeImage(product.img);
  modalImg.onerror = () => {
    modalImg.onerror = null;
    modalImg.src = EARPHONE_IMAGE_FALLBACK;
  };
  modalTitle.textContent = product.name;
  modalDesc.textContent = product.desc;
  modalPrice.textContent = fmt(product.price);
  modalAdd.onclick = () => {
    addToCart(product.id, 1);
    closeModal();
  };
  if (window.gsap) gsap.fromTo('.modal-card', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
}

function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

modalClose.onclick = closeModal;
modal.onclick = event => {
  if (event.target === modal) closeModal();
};

async function addToCart(id, qty) {
  const email = requireLoggedIn('add items to cart');
  if (!email) return;
  const product = getById(id);
  if (!product) return;
  try {
    await apiRequest('/cart/items', {
      method: 'POST',
      body: JSON.stringify({
        email,
        product_id: product.id,
        product_name: product.name,
        product_image: product.img,
        product_description: product.desc,
        price: product.price,
        quantity: qty
      })
    });
    await refreshCartFromServer();
    if (window.gsap) gsap.fromTo('#cartCount', { scale: 0.9, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.28 });
  } catch (error) {
    alert(error.message || 'Unable to add item to cart');
  }
}

async function removeFromCart(id) {
  const email = getCurrentUserEmail();
  if (!email) return;
  try {
    await apiRequest('/cart/items', {
      method: 'DELETE',
      body: JSON.stringify({ email, product_id: id })
    });
    await refreshCartFromServer();
  } catch (error) {
    alert(error.message || 'Unable to remove item');
  }
}

async function changeQty(id, quantity) {
  const email = getCurrentUserEmail();
  if (!email) return;
  try {
    await apiRequest('/cart/items', {
      method: 'PUT',
      body: JSON.stringify({ email, product_id: id, quantity })
    });
    await refreshCartFromServer();
  } catch (error) {
    alert(error.message || 'Unable to update cart');
  }
}

function renderCart() {
  cartList.innerHTML = '';
  let total = 0;
  if (!cartItems.length) {
    cartList.innerHTML = '<div class="muted">Cart empty</div>';
  }

  cartItems.forEach(row => {
    const fallback = getById(row.product_id) || {};
    const name = row.product_name || fallback.name || 'Product';
    const image = row.product_image || fallback.img || EARPHONE_IMAGE_FALLBACK;
    const price = Number(row.price || fallback.price || 0);
    const quantity = Number(row.quantity || 0);
    const subtotal = Number(row.subtotal || price * quantity);
    const description = row.product_description || fallback.desc || '';
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `<img src="${safeImage(image)}" alt="${name}" class="cart-img" onerror="this.onerror=null;this.src='${EARPHONE_IMAGE_FALLBACK}'"><div style="flex:1">
      <div style="display:flex;justify-content:space-between"><strong class="cart-name">${name}</strong><div class="price cart-price">${fmt(subtotal)}</div></div>
      <div class="muted cart-desc" style="font-size:12px;margin-top:4px;">${description}</div>
      <div style="display:flex;gap:8px;margin-top:6px;align-items:center"><button class="btn small" data-dec="${row.product_id}">-</button><div class="cart-qty">${quantity}</div><button class="btn small" data-inc="${row.product_id}">+</button><button class="btn small ghost" data-rem="${row.product_id}">Remove</button></div>
      </div>`;
    cartList.appendChild(itemEl);
    total += subtotal;
  });

  cartTotal.textContent = fmt(total);
  cartCount.textContent = cartItems.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  cartList.querySelectorAll('[data-inc]').forEach(button => {
    button.onclick = () => changeQty(button.dataset.inc, (cart[button.dataset.inc] || 0) + 1);
  });
  cartList.querySelectorAll('[data-dec]').forEach(button => {
    button.onclick = () => changeQty(button.dataset.dec, (cart[button.dataset.dec] || 0) - 1);
  });
  cartList.querySelectorAll('[data-rem]').forEach(button => {
    button.onclick = () => removeFromCart(button.dataset.rem);
  });
}

function applyFilters() {
  let items = (catalog[category] || []).slice();
  const query = searchInput.value.trim().toLowerCase();
  if (query) items = items.filter(item => (item.name + item.desc).toLowerCase().includes(query));
  const sort = sortEl.value;
  if (sort === 'price-asc') items.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') items.sort((a, b) => b.price - a.price);
  if (sort === 'rating') items.sort((a, b) => b.rating - a.rating);
  renderGrid(items);
  renderCarousel(items);
}

searchInput.addEventListener('input', debounce(applyFilters, 200));
clearSearch.onclick = () => {
  searchInput.value = '';
  applyFilters();
};

gridBtn.onclick = () => {
  gridView.style.display = 'grid';
  carouselView.style.display = 'none';
  gridBtn.classList.add('active');
  carouselBtn.classList.remove('active');
  gridView.focus();
};

carouselBtn.onclick = () => {
  gridView.style.display = 'none';
  carouselView.style.display = 'block';
  carouselBtn.classList.add('active');
  gridBtn.classList.remove('active');
  carouselView.setAttribute('aria-hidden', 'false');
};

viewToggle.onclick = () => {
  if (carouselView.style.display === 'block') gridBtn.click();
  else carouselBtn.click();
};

themeToggle.onclick = () => {
  const current = body.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  themeToggle.setAttribute('aria-pressed', next === 'dark');
};

toggleLazy.onchange = event => {
  lazyEnabled = event.target.checked;
  applyFilters();
};

function revealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach(item => observer.observe(item));
}

function initHero() {
  const product = products[0] || {};
  heroImage.src = safeImage(product.img);
  heroImage.onerror = () => {
    heroImage.onerror = null;
    heroImage.src = EARPHONE_IMAGE_FALLBACK;
  };
  heroName.textContent = product.name || 'Featured';
  heroPrice.textContent = product.price ? fmt(product.price) : '';
  if (window.gsap && document.querySelector('.hero-left .reveal')) {
    gsap.from('.hero-left .reveal', { y: 18, opacity: 0, duration: 0.8, stagger: 0.08 });
  }
  if (window.gsap && document.querySelector('.p-layer')) {
    gsap.to('.p-layer', { y: -30, duration: 20, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }
}

window.addEventListener('load', () => {
  if (window.gsap) gsap.to(preloader, { opacity: 0, duration: 0.6, onComplete: () => (preloader.style.display = 'none') });
  products = catalog[category] || [];
  renderGrid(products);
  renderCarousel(products);
  initHero();
  renderCart();
  revealOnScroll();
  refreshCartFromServer();
});

cartBtn.onclick = () => {
  cartEl.classList.add('open');
  cartEl.setAttribute('aria-hidden', 'false');
  cartEl.focus();
};

document.getElementById('cartClose').onclick = () => {
  cartEl.classList.remove('open');
  cartEl.setAttribute('aria-hidden', 'true');
};

document.getElementById('emptyCart').onclick = async () => {
  const email = getCurrentUserEmail();
  if (!email || !cartItems.length) return;
  try {
    await Promise.all(
      cartItems.map(item =>
        apiRequest('/cart/items', {
          method: 'DELETE',
          body: JSON.stringify({ email, product_id: item.product_id })
        })
      )
    );
    await refreshCartFromServer();
  } catch (error) {
    alert(error.message || 'Unable to clear cart');
  }
};

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
    cartEl.classList.remove('open');
  }
});

if ('serviceWorker' in navigator) {
  try {
    navigator.serviceWorker.register('/sw.js');
  } catch (error) {
    console.error(error);
  }
}

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}
