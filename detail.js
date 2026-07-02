
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function num(v){const s=String(v||'').replace(/[^\d]/g,'');return s?Number(s):0}
function euro(v){const n=num(v);return n?n.toLocaleString('cs-CZ')+' €':'Cena na dotaz'}
function km(v){const n=num(v);return n?n.toLocaleString('cs-CZ')+' km':''}
function val(c,ks){for(const k of ks){if(c[k]&&String(c[k]).trim())return c[k]}return ''}
function spec(a,b){return b?`<div class="detail-spec"><span>${a}</span><b>${b}</b></div>`:''}
function loadDetail(){
 const id=new URLSearchParams(location.search).get('car');
 const car=(window.CARS_DATA||[]).find(c=>c.slug===id)||(window.CARS_DATA||[])[0];
 const root=document.getElementById('carDetail'); if(!car||!root)return;
 const title=((val(car,['Марка'])+' '+val(car,['Модель'])).trim())||'Automobil';
 const img=val(car,['Фото']); const imgTag=img?`<img src="assets/cars/${esc(img)}" alt="${esc(title)}">`:'';
 const specs=[
  spec('Rok',esc(val(car,['Год']))), spec('Nájezd',km(val(car,['Пробег']))), spec('Motor',esc(val(car,['Двигатель']))),
  spec('Palivo',esc(val(car,['Топливо']))), spec('Převodovka',esc(val(car,['Коробка']))), spec('Barva',esc(val(car,['Цвет']))), spec('VIN',esc(val(car,['VIN'])))
 ].join('');
 root.innerHTML=`<section class="detail-hero"><div><a class="back-link" href="index.html#catalog">← Zpět do katalogu</a><div class="kicker">LUXES EXECUTIVE</div><h1>${esc(title)}</h1><p class="lead">${esc(val(car,['Комплектация'])||'Prémiový automobil z nabídky LUXES EXECUTIVE.')}</p><div class="detail-price">${euro(val(car,['Цена (€)']))}</div><a class="btn btn-black" href="#request">Zaprosit automobil</a></div><div class="detail-main-photo">${imgTag}</div></section>
 <section class="section"><div class="detail-layout"><div><h2>Galerie</h2><div class="gallery-grid">${imgTag}${imgTag}${imgTag}${imgTag}</div></div><div><h2>Charakteristiky</h2><div class="detail-specs">${specs||'<p>Údaje připravujeme.</p>'}</div><h2>Komplektace</h2><p class="detail-text">${esc(val(car,['Комплектация'])||'Kompletní výbava bude doplněna.')}</p></div></div></section>
 <section class="contact-section" id="request"><div class="contact-grid"><div class="box"><h2>Запросить автомобиль</h2><p>${esc(title)}</p><div class="contact-line">+420 777 399 799</div><div class="contact-line">executive@luxes.cz</div></div><form class="box"><input placeholder="Jméno / Name"><input placeholder="Telefon / WhatsApp"><input placeholder="E-mail"><input value="${esc(title)}"><textarea placeholder="Message"></textarea><button class="submit" type="button">ODESLAT ZPRÁVU</button></form></div></section>`;
}
loadDetail();
