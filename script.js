function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function num(v){const s=String(v||'').replace(/[^\d]/g,'');return s?Number(s):0}
function euro(v){const n=num(v);return n?n.toLocaleString('cs-CZ')+' €':'Cena na dotaz'}
function km(v){const n=num(v);return n?n.toLocaleString('cs-CZ')+' km':''}
function isTop(v){return ['ANO','A','YES','1','TOP'].includes(String(v||'').trim().toUpperCase())}
function val(c,ks){for(const k of ks){if(c[k]!==undefined&&String(c[k]).trim())return c[k]}return ''}
function carCard(c,i){
 const title=((val(c,['Марка'])+' '+val(c,['Модель'])).trim())||'Automobil';
 const img=val(c,['Фото']); const link='detail.html?car='+encodeURIComponent(c.slug||'auto');
 const specs=[val(c,['Год']),km(val(c,['Пробег'])),val(c,['Двигатель']),val(c,['Коробка']),val(c,['Топливо']),val(c,['Цвет'])].filter(Boolean).map(x=>`<span>${esc(x)}</span>`).join('');
 return `<article class="card reveal-card" style="animation-delay:${i*90}ms"><a class="card-photo-link" href="${link}"><div class="card-photo">${img?`<img src="assets/cars/${esc(img)}" alt="${esc(title)}">`:''}<span class="status">${esc(val(c,['Статус'])||'V prodeji')}</span>${isTop(val(c,['TOP','⭐ TOP']))?'<span class="top">TOP</span>':''}</div></a><div class="card-body"><a class="card-title" href="${link}">${esc(title)}</a><div class="card-version">${esc(val(c,['Комплектация']))}</div><div class="meta">${specs}</div><div class="price">${euro(val(c,['Цена (€)']))}</div><a class="detail" href="${link}">Detail</a></div></article>`;
}
function loadCars(){const grid=document.querySelector('#catalogGrid');if(!grid)return;const cars=(window.CARS_DATA||[]).filter(Boolean).sort((a,b)=>(isTop(val(a,['TOP','⭐ TOP']))?0:1)-(isTop(val(b,['TOP','⭐ TOP']))?0:1)||((Number(val(a,['Порядок']))||9999)-(Number(val(b,['Порядок']))||9999)));grid.innerHTML=cars.map(carCard).join('');}
loadCars();
