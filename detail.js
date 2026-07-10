function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function num(v){const s=String(v||'').replace(/[^\d]/g,'');return s?Number(s):0}
function euro(v){const n=num(v);return n?n.toLocaleString('cs-CZ')+' €':'Cena na dotaz'}
function km(v){const n=num(v);return n?n.toLocaleString('cs-CZ')+' km':''}
function val(c,ks){for(const k of ks){if(c[k]!==undefined&&String(c[k]).trim())return c[k]}return ''}
function spec(a,b){return b?`<div class="detail-spec"><span>${a}</span><b>${b}</b></div>`:''}
function galleryList(c){
  const raw=val(c,['Галерея','Galerie','Gallery']);
  const list=raw?raw.split('|').map(x=>x.trim()).filter(Boolean):[];
  const main=val(c,['Фото']);
  if(main && !list.includes(main)) list.unshift(main);
  return list;
}
function loadDetail(){
 const id=new URLSearchParams(location.search).get('car'); const cars=window.CARS_DATA||[];
 const c=cars.find(x=>x.slug===id)||cars[0]; const root=document.getElementById('carDetail'); if(!c||!root)return;
 const title=((val(c,['Марка'])+' '+val(c,['Модель'])).trim())||'Automobil';
 const photos=galleryList(c); const first=photos[0]||'';
 const specs=[spec('Rok',esc(val(c,['Год']))),spec('Nájezd',km(val(c,['Пробег']))),spec('Motor',esc(val(c,['Двигатель']))),spec('Palivo',esc(val(c,['Топливо']))),spec('Převodovka',esc(val(c,['Коробка']))),spec('Barva',esc(val(c,['Цвет']))),spec('VIN',esc(val(c,['VIN'])))].join('');
 const thumbs=photos.map((p,i)=>`<button class="gallery-thumb ${i===0?'active':''}" type="button" data-photo="${esc(p)}"><img src="assets/cars/${esc(p)}" alt="${esc(title)} ${i+1}"></button>`).join('');
 root.innerHTML=`<section class="detail-hero"><div><a class="back-link" href="index.html#catalog">← Zpět do katalogu</a><div class="kicker">LUXES EXECUTIVE</div><h1>${esc(title)}</h1><p class="lead">${esc(val(c,['Комплектация'])||'Prémiový automobil z nabídky LUXES EXECUTIVE.')}</p><div class="detail-price">${euro(val(c,['Цена (€)']))}</div><a class="btn btn-black" href="#request">Poptat automobil</a></div><div class="detail-main-photo">${first?`<img id="mainCarPhoto" src="assets/cars/${esc(first)}" alt="${esc(title)}">`:''}</div></section><section class="section"><div class="detail-layout"><div><h2>Galerie</h2><div class="gallery-viewer"><button class="gallery-main" type="button" id="openGallery">${first?`<img id="galleryMainImage" src="assets/cars/${esc(first)}" alt="${esc(title)}">`:''}</button><div class="gallery-thumbs">${thumbs}</div></div></div><div><h2>Charakteristiky</h2><div class="detail-specs">${specs||'<p>Údaje připravujeme.</p>'}</div><h2>Výbava</h2><p class="detail-text">${esc(val(c,['Комплектация'])||'Kompletní výbava bude doplněna.')}</p></div></div></section><section class="contact-section" id="request"><div class="contact-grid"><div class="box"><h2>Poptat automobil</h2><p>${esc(title)}</p><div class="contact-line">+420 777 399 799</div><div class="contact-line">executive@luxes.cz</div></div><form class="box"><input placeholder="Jméno / Name"><input placeholder="Telefon / WhatsApp"><input placeholder="E-mail"><input value="${esc(title)}"><textarea placeholder="Zpráva"></textarea><button class="submit" type="button">ODESLAT ZPRÁVU</button></form></div></section><div class="lightbox" id="lightbox"><button class="lightbox-close" type="button">×</button><button class="lightbox-prev" type="button">‹</button><img id="lightboxImage" alt="${esc(title)}"><button class="lightbox-next" type="button">›</button></div>`;
 let current=0;
 const main=document.getElementById('galleryMainImage'); const hero=document.getElementById('mainCarPhoto');
 const buttons=[...document.querySelectorAll('.gallery-thumb')];
 function show(i){current=(i+photos.length)%photos.length; const src='assets/cars/'+photos[current]; if(main)main.src=src; if(hero)hero.src=src; buttons.forEach((b,j)=>b.classList.toggle('active',j===current));}
 buttons.forEach((b,i)=>b.addEventListener('click',()=>show(i)));
 const lightbox=document.getElementById('lightbox'); const lbImg=document.getElementById('lightboxImage');
 function openLb(){if(!photos.length)return;lbImg.src='assets/cars/'+photos[current];lightbox.classList.add('open');}
 function move(d){show(current+d);lbImg.src='assets/cars/'+photos[current];}
 document.getElementById('openGallery')?.addEventListener('click',openLb);
 lightbox.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.classList.remove('open'));
 lightbox.querySelector('.lightbox-prev').addEventListener('click',()=>move(-1));
 lightbox.querySelector('.lightbox-next').addEventListener('click',()=>move(1));
 lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('open')});
 document.addEventListener('keydown',e=>{if(!lightbox.classList.contains('open'))return;if(e.key==='Escape')lightbox.classList.remove('open');if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)});
}
loadDetail();
