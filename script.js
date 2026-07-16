document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const selector = link.getAttribute('href');
      if (!selector || selector === '#') return;
      const target = document.querySelector(selector);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      nav?.classList.remove('open');
    });
  });

  const cars = Array.isArray(window.CARS) ? window.CARS : [];
  renderCatalog(cars);
  renderDetail(cars);
});

function formatPrice(value) {
  return new Intl.NumberFormat('cs-CZ').format(Number(value || 0)) + ' €';
}

function formatMileage(value) {
  return new Intl.NumberFormat('cs-CZ').format(Number(value || 0)) + ' km';
}

function getParams() {
  return new URLSearchParams(window.location.search);
}

function renderCatalog(cars) {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const params = getParams();
  const brand = (params.get('brand') || '').trim().toLowerCase();
  const model = (params.get('model') || '').trim().toLowerCase();

  const filtered = cars.filter((car) => {
    const brandOk = !brand || String(car.brand || '').toLowerCase() === brand;
    const modelOk = !model || String(car.model || '').toLowerCase() === model;
    return brandOk && modelOk;
  });

  const title = document.getElementById('catalogTitle');
  if (title && (brand || model)) {
    const readableBrand = params.get('brand') || '';
    const readableModel = params.get('model') || '';
    title.textContent = [readableBrand, readableModel].filter(Boolean).join(' ');
  }

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state"><h3>Zatím nejsou žádná vozidla.</h3><p>Jakmile přidáme nabídku, zobrazí se zde automaticky.</p><a class="btn btn-primary" href="index.html#request">VYŽÁDAT NABÍDKU</a></div>';
    return;
  }

  grid.innerHTML = filtered.map((car) => `
    <article class="car-card">
      <a class="car-photo" href="detail.html?id=${encodeURIComponent(car.id)}">
        <img src="${car.mainPhoto}" alt="${car.brand} ${car.model}">
        ${car.top ? '<span class="badge badge-gold">TOP</span>' : ''}
        <span class="badge badge-status">${car.status || 'V prodeji'}</span>
      </a>
      <div class="car-content">
        <div class="car-heading">
          <div><small>${car.brand}</small><h3>${car.model}</h3></div>
          <strong>${formatPrice(car.price)}</strong>
        </div>
        <p>${car.trim || ''}</p>
        <div class="car-specs">
          <span><b>Rok</b>${car.year || '—'}</span>
          <span><b>Nájezd</b>${formatMileage(car.mileage)}</span>
          <span><b>Motor</b>${car.engine || '—'}</span>
          <span><b>Palivo</b>${car.fuel || '—'}</span>
        </div>
        <div class="car-actions">
          <a class="btn btn-primary" href="detail.html?id=${encodeURIComponent(car.id)}">DETAIL VOZU</a>
          <a class="btn btn-ghost" href="https://wa.me/420777399799?text=${encodeURIComponent('Mám zájem o ' + car.brand + ' ' + car.model)}">WhatsApp</a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderDetail(cars) {
  const root = document.getElementById('detailRoot');
  if (!root) return;

  const id = getParams().get('id');
  const car = cars.find((item) => String(item.id) === String(id)) || cars[0];
  if (!car) {
    root.innerHTML = '<div class="empty-state"><h3>Vozidlo nebylo nalezeno.</h3><a class="btn btn-primary" href="catalog.html">ZPĚT DO KATALOGU</a></div>';
    return;
  }

  const gallery = Array.isArray(car.gallery) && car.gallery.length ? car.gallery : [car.mainPhoto];
  root.innerHTML = `
    <a class="back-link" href="catalog.html">← Zpět do katalogu</a>
    <section class="detail-grid">
      <div class="detail-gallery">
        <img id="mainCarPhoto" class="detail-main-photo" src="${gallery[0]}" alt="${car.brand} ${car.model}">
        <div class="thumb-grid">
          ${gallery.map((photo, index) => `<button class="thumb ${index === 0 ? 'active' : ''}" type="button" data-photo="${photo}"><img src="${photo}" alt="Foto ${index + 1}"></button>`).join('')}
        </div>
      </div>
      <aside class="detail-card">
        <small>LUXES EXECUTIVE</small>
        <h1>${car.brand} ${car.model}</h1>
        <p>${car.trim || ''}</p>
        <div class="detail-price">${formatPrice(car.price)}</div>
        <div class="detail-specs">
          <span><b>Rok</b>${car.year || '—'}</span>
          <span><b>Nájezd</b>${formatMileage(car.mileage)}</span>
          <span><b>Motor</b>${car.engine || '—'}</span>
          <span><b>Převodovka</b>${car.gearbox || '—'}</span>
          <span><b>Palivo</b>${car.fuel || '—'}</span>
          <span><b>Barva</b>${car.color || '—'}</span>
        </div>
        <div class="car-actions">
          <a class="btn btn-primary" href="tel:+420777399799">ZAVOLAT</a>
          <a class="btn btn-ghost" href="https://wa.me/420777399799?text=${encodeURIComponent('Mám zájem o ' + car.brand + ' ' + car.model)}">WhatsApp</a>
        </div>
      </aside>
    </section>
  `;

  root.querySelectorAll('.thumb').forEach((button) => {
    button.addEventListener('click', () => {
      const main = document.getElementById('mainCarPhoto');
      if (main) main.src = button.dataset.photo || car.mainPhoto;
      root.querySelectorAll('.thumb').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
    });
  });
}
