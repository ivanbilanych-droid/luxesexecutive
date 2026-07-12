const I18N={
 cs:{catalog:'KATALOG VOZŮ',catalogSub:'Aktuální nabídka ověřených prémiových automobilů.',models:'MODELY VOZŮ',modelsSub:'Vyberte model a zobrazte dostupné vozy.',detail:'DETAIL VOZU',year:'Rok',mileage:'Nájezd',engine:'Motor',gearbox:'Převodovka',fuel:'Palivo',color:'Barva',priceAsk:'Cena na dotaz',status:'V prodeji',all:'Všechny vozy',car1:'vůz',car2:'vozy',car5:'vozů'},
 en:{catalog:'VEHICLE CATALOG',catalogSub:'Current selection of verified premium vehicles.',models:'VEHICLE MODELS',modelsSub:'Choose a model to view available vehicles.',detail:'VIEW DETAILS',year:'Year',mileage:'Mileage',engine:'Engine',gearbox:'Gearbox',fuel:'Fuel',color:'Color',priceAsk:'Price on request',status:'For sale',all:'All vehicles',car1:'vehicle',car2:'vehicles',car5:'vehicles'},
 de:{catalog:'FAHRZEUGKATALOG',catalogSub:'Aktuelle Auswahl geprüfter Premiumfahrzeuge.',models:'FAHRZEUGMODELLE',modelsSub:'Wählen Sie ein Modell und sehen Sie verfügbare Fahrzeuge.',detail:'FAHRZEUG ANSEHEN',year:'Jahr',mileage:'Kilometer',engine:'Motor',gearbox:'Getriebe',fuel:'Kraftstoff',color:'Farbe',priceAsk:'Preis auf Anfrage',status:'Zu verkaufen',all:'Alle Fahrzeuge',car1:'Fahrzeug',car2:'Fahrzeuge',car5:'Fahrzeuge'},
 ru:{catalog:'КАТАЛОГ АВТОМОБИЛЕЙ',catalogSub:'Актуальное предложение проверенных премиальных автомобилей.',models:'МОДЕЛИ АВТОМОБИЛЕЙ',modelsSub:'Выберите модель, чтобы увидеть доступные автомобили.',detail:'ПОДРОБНЕЕ',year:'Год',mileage:'Пробег',engine:'Двигатель',gearbox:'Коробка',fuel:'Топливо',color:'Цвет',priceAsk:'Цена по запросу',status:'В продаже',all:'Все автомобили',car1:'автомобиль',car2:'автомобиля',car5:'автомобилей'}
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
function countWord(count){if(lang()==='cs'){if(count===1)return t('car1');if(count>=2&&count<=4)return t('car2');return t('car5')}if(lang()==='ru'){const a=count%10,b=count%100;if(a===1&&b!==11)return t('car1');if(a>=2&&a<=4&&(b<12||b>14))return t('car2');return t('car5')}return count===1?t('car1'):t('car2')}
let activeModel='';
function carsData(){return (window.CARS_DATA||[]).filter(c=>val(c,['Марка','Brand','Značka','Marke'])||val(c,['Модель','Model']))}
function modelKey(c){return `${val(c,['Марка','Brand','Značka','Marke'])} ${val(c,['Модель','Model'])}`.trim()}
function renderModels(){
 const grid=document.getElementById('modelGrid');if(!grid)return;
 const cars=carsData();const groups=new Map();
 cars.forEach(c=>{
  const key=modelKey(c);if(!key)return;
  if(!groups.has(key))groups.set(key,{key,count:0,img:'',brand:val(c,['Марка','Brand','Značka','Marke']),model:val(c,['Модель','Model'])});
  const g=groups.get(key);g.count++;if(!g.img)g.img=gallery(c)[0]||'';
 });
 const cards=[];
 groups.forEach(g=>cards.push(`<button class="model-card ${activeModel===g.key?'active':''}" data-model="${esc(g.key)}">${g.img?`<img src="assets/cars/${esc(g.img)}" alt="${esc(g.key)}">`:'<div class="model-placeholder">LE</div>'}<div class="model-card-copy"><strong>${esc(g.brand)} ${esc(g.model)}</strong><span>— ${g.count} ${esc(countWord(g.count))}</span></div></button>`));
 grid.innerHTML=cards.join('');
 grid.querySelectorAll('.model-card').forEach(btn=>btn.addEventListener('click',()=>{
   activeModel=activeModel===btn.dataset.model?'':(btn.dataset.model||'');
   renderModels();renderCatalog();
   document.getElementById('catalog')?.scrollIntoView({behavior:'smooth',block:'start'});
 }));
 const title=document.getElementById('modelsTitle'),sub=document.getElementById('modelsSubtitle');if(title)title.textContent=t('models');if(sub)sub.textContent=t('modelsSub');
}
function renderCatalog(){
 const grid=document.getElementById('catalogGrid');if(!grid)return;
 const cars=carsData().filter(c=>!activeModel||modelKey(c)===activeModel);
 grid.innerHTML=cars.map((c,i)=>{
  const brand=val(c,['Марка','Brand','Značka','Marke']);const model=val(c,['Модель','Model']);const title=`${brand} ${model}`.trim();
  const imgs=gallery(c);const slug=c.slug||slugify(title);const top=isTop(val(c,['TOP','Top']));
  const specs=[[t('year'),val(c,['Год','Rok','Year'])],[t('mileage'),km(val(c,['Пробег','Nájezd','Mileage']))],[t('engine'),val(c,['Двигатель','Motor','Engine'])],[t('gearbox'),val(c,['Коробка','Převodovka','Gearbox'])],[t('fuel'),val(c,['Топливо','Palivo','Fuel'])],[t('color'),val(c,['Цвет','Barva','Color'])]];
  return `<article class="car-card"><a class="car-photo" href="detail.html?car=${encodeURIComponent(slug)}">${imgs[0]?`<img src="assets/cars/${esc(imgs[0])}" alt="${esc(title)}">`:''}<span class="badge">${esc(val(c,['Статус','Status'])||t('status'))}</span>${top?'<span class="badge top">TOP</span>':''}<span class="photo-count">${imgs.length} фото</span></a><div class="card-body"><div class="card-topline"><a class="card-title" href="detail.html?car=${encodeURIComponent(slug)}">${esc(title)}</a><div class="card-price">${money(val(c,['Цена (€)','Cena (€)','Price']))}</div></div><div class="card-subtitle">${esc(val(c,['Комплектация','Výbava','Version']))}</div><div class="spec-grid">${specs.map(([a,b])=>`<div class="spec"><b>${esc(a)}</b><span>${esc(b||'—')}</span></div>`).join('')}</div><div class="card-actions"><a class="btn-dark" href="detail.html?car=${encodeURIComponent(slug)}">${t('detail')}</a><a class="btn-outline" href="https://wa.me/420777399799?text=${encodeURIComponent(title)}" target="_blank">WhatsApp</a></div></div></article>`
 }).join('');
}
document.addEventListener('DOMContentLoaded',()=>{renderModels();renderCatalog()});
