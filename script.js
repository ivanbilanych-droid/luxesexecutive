const I18N={
 cs:{catalog:'KATALOG VOZŮ',catalogSub:'Aktuální nabídka ověřených prémiových automobilů.',detail:'DETAIL VOZU',year:'Rok',mileage:'Nájezd',engine:'Motor',gearbox:'Převodovka',fuel:'Palivo',color:'Barva',priceAsk:'Cena na dotaz',status:'V prodeji'},
 en:{catalog:'VEHICLE CATALOG',catalogSub:'Current selection of verified premium vehicles.',detail:'VIEW DETAILS',year:'Year',mileage:'Mileage',engine:'Engine',gearbox:'Gearbox',fuel:'Fuel',color:'Color',priceAsk:'Price on request',status:'For sale'},
 de:{catalog:'FAHRZEUGKATALOG',catalogSub:'Aktuelle Auswahl geprüfter Premiumfahrzeuge.',detail:'FAHRZEUG ANSEHEN',year:'Jahr',mileage:'Kilometer',engine:'Motor',gearbox:'Getriebe',fuel:'Kraftstoff',color:'Farbe',priceAsk:'Preis auf Anfrage',status:'Zu verkaufen'},
 ru:{catalog:'КАТАЛОГ АВТОМОБИЛЕЙ',catalogSub:'Актуальное предложение проверенных премиальных автомобилей.',detail:'ПОДРОБНЕЕ',year:'Год',mileage:'Пробег',engine:'Двигатель',gearbox:'Коробка',fuel:'Топливо',color:'Цвет',priceAsk:'Цена по запросу',status:'В продаже'}
};
function lang(){return document.documentElement.lang||'cs'}
function t(k){return (I18N[lang()]||I18N.cs)[k]||k}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function n(v){const x=String(v??'').replace(/[^0-9]/g,'');return x?Number(x):0}
function money(v){const x=n(v);return x?x.toLocaleString('cs-CZ')+' €':t('priceAsk')}
function km(v){const x=n(v);return x?x.toLocaleString('cs-CZ')+' km':''}
function val(c,keys){for(const k of keys){if(c[k]!==undefined&&String(c[k]).trim()!=='')return c[k]}return ''}
function isTop(v){return ['ANO','YES','JA','1','TOP'].includes(String(v||'').trim().toUpperCase())}
function slugify(s){return String(s||'auto').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function gallery(c){return String(val(c,['Галерея','Galerie','Gallery'])||val(c,['Фото','Foto','Photo'])).split('|').map(x=>x.trim()).filter(Boolean)}
function renderCatalog(){
 const grid=document.getElementById('catalogGrid');if(!grid)return;
 const cars=(window.CARS_DATA||[]).filter(c=>val(c,['Марка','Brand','Značka','Marke'])||val(c,['Модель','Model']));
 grid.innerHTML=cars.map((c,i)=>{
  const brand=val(c,['Марка','Brand','Značka','Marke']);const model=val(c,['Модель','Model']);const title=`${brand} ${model}`.trim();
  const imgs=gallery(c);const slug=c.slug||slugify(title);const top=isTop(val(c,['TOP','Top']));
  const specs=[[t('year'),val(c,['Год','Rok','Year'])],[t('mileage'),km(val(c,['Пробег','Nájezd','Mileage']))],[t('engine'),val(c,['Двигатель','Motor','Engine'])],[t('gearbox'),val(c,['Коробка','Převodovka','Gearbox'])],[t('fuel'),val(c,['Топливо','Palivo','Fuel'])],[t('color'),val(c,['Цвет','Barva','Color'])]];
  return `<article class="car-card"><a class="car-photo" href="detail.html?car=${encodeURIComponent(slug)}">${imgs[0]?`<img src="assets/cars/${esc(imgs[0])}" alt="${esc(title)}">`:''}<span class="badge">${esc(val(c,['Статус','Status'])||t('status'))}</span>${top?'<span class="badge top">TOP</span>':''}<span class="photo-count">${imgs.length} фото</span></a><div class="card-body"><div class="card-topline"><a class="card-title" href="detail.html?car=${encodeURIComponent(slug)}">${esc(title)}</a><div class="card-price">${money(val(c,['Цена (€)','Cena (€)','Price']))}</div></div><div class="card-subtitle">${esc(val(c,['Комплектация','Výbava','Version']))}</div><div class="spec-grid">${specs.map(([a,b])=>`<div class="spec"><b>${esc(a)}</b><span>${esc(b||'—')}</span></div>`).join('')}</div><div class="card-actions"><a class="btn-dark" href="detail.html?car=${encodeURIComponent(slug)}">${t('detail')}</a><a class="btn-outline" href="https://wa.me/420777399799?text=${encodeURIComponent(title)}" target="_blank">WhatsApp</a></div></div></article>`
 }).join('');
}
document.addEventListener('DOMContentLoaded',renderCatalog);
