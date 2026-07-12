document.addEventListener('DOMContentLoaded', () => {
  // 1. Ovládání mobilního menu (zachování tvé původní funkce)
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // 2. Automatická úprava stránek katalogu a detailu
  const currentPath = window.location.pathname;

  // Pokud je uživatel na stránce katalogu
  if (currentPath.includes('catalog.html')) {
    const mainArea = document.querySelector('.catalog-page') || document.querySelector('main');
    if (mainArea) {
      mainArea.style.padding = '60px 0';
      mainArea.innerHTML = `
        <div class="container">
          <div class="section-head" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 30px;">
            <div>
              <h2 style="font-size: 25px; letter-spacing: .5px; margin: 0; font-family: Georgia, serif; text-transform: uppercase;">Katalog vozů</h2>
              <p style="color: #6f6a62; margin: 5px 0 0 0; font-size: 14px;">Aktuální nabídka prověřených automobilů.</p>
            </div>
          </div>
          <div class="model-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; display: grid;">
            <a class="model-card" href="detail.html" style="min-height: auto; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none; color: inherit;">
              <div>
                <div style="background: #f7f5f1; padding: 12px; height: 180px; display: flex; align-items: center; justify-content: center; position: relative;">
                  <img src="assets/cars/lexus-gx460-2016.jpg" alt="Lexus GX460" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                  <span style="position: absolute; top: 10px; left: 10px; background: #171717; color: #fff; font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 3px; letter-spacing: 1px;">TOP</span>
                </div>
                <div class="meta" style="padding: 16px;">
                  <small style="display: block; color: #666; margin-bottom: 3px; text-transform: uppercase; font-size: 12px;">Lexus</small>
                  <strong style="font-size: 18px; color: #171717;">GX460</strong>
                  <div style="color: #6f6a62; font-size: 13px; margin-top: 6px;">2016 • 203 000 km • Benzin</div>
                </div>
              </div>
              <div style="padding: 14px 16px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e8dfd1; background: #fff;">
                <span style="font-size: 16px; font-weight: 700; color: #bd8d32;">34 900 €</span>
                <span style="font-size: 12px; color: #171717; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Detail →</span>
              </div>
            </a>
          </div>
        </div>
      `;
    }
  }

  // Pokud je uživatel na stránce detailu auta
  if (currentPath.includes('detail.html')) {
    const mainArea = document.querySelector('.detail-page') || document.querySelector('main');
    if (mainArea) {
      // Vložení speciálních stylů pro detail
      const styles = document.createElement('style');
      styles.innerHTML = `
        .detail-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; padding: 50px 0; }
        .view-main { background: #fff; border: 1px solid #e8dfd1; border-radius: 8px; height: 400px; display: flex; align-items: center; justify-content: center; padding: 16px; }
        .view-main img { max-width: 100%; max-height: 100%; object-fit: contain; }
        .thumbs-grid { display: flex; gap: 10px; margin-top: 14px; overflow-x: auto; }
        .thumbs-grid img { width: 85px; height: 60px; object-fit: cover; border: 1px solid #e8dfd1; border-radius: 4px; cursor: pointer; background: #fff; padding: 2px; }
        .info-card { background: #fff; border: 1px solid #e8dfd1; border-radius: 8px; padding: 30px; box-shadow: 0 6px 24px rgba(40,30,12,.02); color: #171717; }
        .info-card h1 { font-family: Georgia, serif; font-size: 36px; margin: 0 0 6px 0; font-weight: 500; }
        .price-box { background: #faf7f1; border: 1px solid #e8dfd1; padding: 16px 20px; border-radius: 6px; margin-bottom: 24px; }
        .data-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        .data-table td { padding: 12px 0; border-bottom: 1px solid #e8dfd1; font-size: 14px; }
        .data-table td:last-child { text-align: right; font-weight: 700; }
        .action-links { display: flex; flex-direction: column; gap: 10px; }
        .btn-order-wa { background: #25D366; color: #fff; text-align: center; padding: 14px; border-radius: 4px; font-weight: 700; text-transform: uppercase; text-decoration: none; }
        .btn-order-call { background: #171717; color: #fff; text-align: center; padding: 14px; border-radius: 4px; font-weight: 700; text-transform: uppercase; text-decoration: none; }
        @media (max-width: 900px) { .detail-layout { grid-template-columns: 1fr; gap: 24px; } .view-main { height: 260px; } }
      `;
      document.head.appendChild(styles);

      mainArea.innerHTML = `
        <div class="container">
          <div class="detail-layout">
            <div class="gallery-box">
              <div class="view-main"><img id="dynamicMainImg" src="assets/cars/lexus-gx460-2016.jpg" alt="Lexus GX460"></div>
              <div class="thumbs-grid">
                <img src="assets/cars/lexus-gx460-2016.jpg" class="t-thumb" alt="1">
                <img src="assets/cars/lexus-gx460-2016-1.jpg" class="t-thumb" alt="2">
                <img src="assets/cars/lexus-gx460-2016-2.jpg" class="t-thumb" alt="3">
                <img src="assets/cars/lexus-gx460-2016-3.jpg" class="t-thumb" alt="4">
              </div>
            </div>
            <div class="info-card">
              <h1>Lexus GX460</h1>
              <div style="color: #6f6a62; font-size: 15px; margin-bottom: 20px;">Executive LPG | 4.6 V8 | Automat</div>
              <div class="price-box"><small style="color: #6f6a62;">Cena vozidla</small><strong style="font-size: 28px; color: #bd8d32;">34 900 €</strong></div>
              <table class="data-table">
                <tr><td>Rok výroby</td><td>2016</td></tr>
                <tr><td>Najeto</td><td>203 000 km</td></tr>
                <tr><td>Palivo</td><td>Benzin + LPG</td></tr>
                <tr><td>Převodovka</td><td>Automatická</td></tr>
                <tr><td>Barva</td><td>Černá metalíza</td></tr>
              </table>
              <div class="action-links">
                <a href="https://wa.me/420777399799?text=Mám%20zájem%20o%20Lexus%20GX460" class="btn-order-wa" target="_blank">Mám zájem přes WhatsApp</a>
                <a href="tel:+420777399799" class="btn-order-call">Zavolat prodejci</a>
              </div>
            </div>
          </div>
        </div>
      `;

      // Přepínání obrázků v galerii
      document.querySelectorAll('.t-thumb').forEach(thumb => {
        thumb.addEventListener('click', function() {
          const mainImg = document.getElementById('dynamicMainImg');
          if (mainImg) mainImg.src = this.src;
        });
      });
    }
  }
});
