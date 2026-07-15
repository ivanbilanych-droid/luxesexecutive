document.addEventListener('DOMContentLoaded', () => {
  // 1. Ovládání mobilního menu
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // 2. Dynamické vykreslení populárních modelů z databáze cars.js
  const popularModelsGrid = document.getElementById('popularModelsGrid');
  if (popularModelsGrid && window.CARS) {
    popularModelsGrid.innerHTML = window.CARS.map(car => `
      <a class="model-card" href="detail.html?id=${car.id}">
        <img src="${car.mainPhoto}" alt="${car.brand} ${car.model}">
        <div class="meta">
          <div class="brand-name">${car.brand}</div>
          <div class="model-name">${car.model}</div>
          <div class="price">od ${car.price.toLocaleString('cs-CZ')} €</div>
        </div>
      </a>
    `).join('');
  }

  // 3. Aktivace dynamického vyhledávání a filtrování značek/modelů
  const brandSelect = document.getElementById('search-brand');
  const modelSelect = document.getElementById('search-model');
  const searchBtn = document.getElementById('search-btn');

  if (brandSelect && modelSelect && window.CARS) {
    brandSelect.addEventListener('change', () => {
      const selectedBrand = brandSelect.value;
      modelSelect.innerHTML = '<option value="">Libovolný model</option>';
      
      if (!selectedBrand) {
        modelSelect.disabled = true;
        return;
      }

      // Vytáhnutí unikátních modelů pro vybranou značku
      const models = [...new Set(window.CARS
        .filter(car => car.brand === selectedBrand)
        .map(car => car.model)
      )];

      models.forEach(model => {
        const opt = document.createElement('option');
        opt.value = model;
        opt.textContent = model;
        modelSelect.appendChild(opt);
      });

      modelSelect.disabled = false;
    });

    // Přesměrování na katalog s filtry v URL parametrech
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        const brand = brandSelect.value;
        const model = modelSelect.value;
        const priceFrom = document.getElementById('price-from').value;
        const priceTo = document.getElementById('price-to').value;
        const yearFrom = document.getElementById('year-from').value;
        const yearTo = document.getElementById('year-to').value;

        let query = `catalog.html?search=true`;
        if (brand) query += `&brand=${encodeURIComponent(brand)}`;
        if (model) query += `&model=${encodeURIComponent(model)}`;
        if (priceFrom) query += `&priceFrom=${priceFrom}`;
        if (priceTo) query += `&priceTo=${priceTo}`;
        if (yearFrom) query += `&yearFrom=${yearFrom}`;
        if (yearTo) query += `&yearTo=${yearTo}`;

        window.location.href = query;
      });
    }
  }
});