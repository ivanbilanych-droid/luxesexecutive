document.addEventListener('DOMContentLoaded', () => {
  // 1. Ovládání mobilního menu
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // 2. Dynamické vykreslení vozů v katalogu z databáze cars.js
  const popularModelsGrid = document.getElementById('popularModelsGrid');
  if (popularModelsGrid && window.CARS) {
    popularModelsGrid.innerHTML = window.CARS.map(car => `
      <a class="car-slide-card" href="detail.html?id=${car.id}">
        <div class="car-img-box">
          <img src="${car.mainPhoto}" alt="${car.brand} ${car.model}">
        </div>
        <div class="car-slide-meta">
          <h3>${car.brand} ${car.model}</h3>
          <div class="car-specs">${car.year} • ${car.mileage.toLocaleString('ru-RU')} km</div>
          <div class="car-slide-price">${car.price.toLocaleString('ru-RU')} €</div>
        </div>
      </a>
    `).join('');
  }

  // 3. Dynamický výpočet celkového počtu aut pro značku Mercedes-Benz
  const mercedesCountSpan = document.getElementById('mercedes-count-span');
  if (mercedesCountSpan && window.CARS) {
    // Spočítáme, kolik aut v poli má značku "Mercedes-Benz"
    const count = window.CARS.filter(car => car.brand === 'Mercedes-Benz').length;
    
    // Gramatika pro ruskou verzi (1 авто, 2-4 авто, 5+ авто)
    let text = `${count} авто`;
    if (count === 1) {
      text = `${count} авто`;
    } else if (count >= 2 && count <= 4) {
      text = `${count} автомобиля`;
    } else if (count >= 5) {
      text = `${count} авто`;
    }
    
    mercedesCountSpan.textContent = text;
  }
});