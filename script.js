
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function cleanNumber(v){const s=String(v||'').replace(/[^\d]/g,'');return s?Number(s):0;}
function euro(v){const n=cleanNumber(v);return n?n.toLocaleString('cs-CZ')+' €':'Cena na dotaz';}
function km(v){const n=cleanNumber(v);return n?n.toLocaleString('cs-CZ')+' km':'';}
function isTop(v){const s=String(v||'').trim().toUpperCase();return s==='ANO'||s==='A'||s==='YES'||s==='1'||s==='TOP';}
function getValue(car,keys){for(const k of keys){if(car[k]!==undefined&&String(car[k]).trim()!=='')return car[k];}return '';}
function carCard(car){
  const brand=getValue(car,['Марка','Brand','Značka','Marke']);
  const model=getValue(car,['Модель','Model']);
  const title=`${esc(brand)} ${esc(model)}`.trim()||'Automobil';
  const imgName=getValue(car,['Фото','Foto','Photo']);
  const img=imgName?`assets/cars/${esc(imgName)}`:'';
  const status=getValue(car,['Статус','Status'])||'V prodeji';
  const top=isTop(getValue(car,['TOP','⭐ TOP','Top']));
  const version=getValue(car,['Комплектация','Výbava','Version']);
  const year=getValue(car,['Год','Rok','Year']);
  const mileage=getValue(car,['Пробег','Nájezd','Mileage']);
  const engine=getValue(car,['Двигатель','Motor','Engine']);
  const gearbox=getValue(car,['Коробка','Převodovka','Gearbox']);
  const fuel=getValue(car,['Топливо','Palivo','Fuel']);
  const color=getValue(car,['Цвет','Barva','Color']);
  const price=getValue(car,['Цена (€)','Cena (€)','Price (€)','Цена']);
  return `<article class="card">
    <div class="card-photo">
      ${img?`<img src="${img}" alt="${title}" onerror="this.parentElement.classList.add('image-missing');this.remove();">`:'<span>Foto</span>'}
      <span class="status">${esc(status)}</span>
      ${top?'<span class="top">TOP</span>':''}
    </div>
    <div class="card-body">
      <div class="card-title">${title}</div>
      <div class="card-version">${esc(version)}</div>
      <div class="meta">
        <span>${esc(year)}</span><span>${km(mileage)}</span>
        <span>${esc(engine)}</span><span>${esc(gearbox)}</span>
        <span>${esc(fuel)}</span><span>${esc(color)}</span>
      </div>
      <div class="price">${euro(price)}</div>
      <a class="detail" href="#contact">Detail</a>
    </div>
  </article>`;
}
function loadCars(){
  const grid=document.querySelector('#catalogGrid');
  if(!grid)return;
  const cars=(window.CARS_DATA||[])
    .filter(c=>getValue(c,['Фото','Foto','Photo'])||getValue(c,['Марка','Brand','Značka','Marke'])||getValue(c,['Модель','Model']))
    .sort((a,b)=>{
      const topA=isTop(getValue(a,['TOP','⭐ TOP','Top']))?0:1;
      const topB=isTop(getValue(b,['TOP','⭐ TOP','Top']))?0:1;
      if(topA!==topB)return topA-topB;
      const orderA=Number(getValue(a,['Порядок','Pořadí','Order']))||9999;
      const orderB=Number(getValue(b,['Порядок','Pořadí','Order']))||9999;
      return orderA-orderB;
    });
  grid.innerHTML=cars.length?cars.map(carCard).join(''):'<div class="empty-note">Nabídku vozidel připravujeme.</div>';
}
loadCars();
