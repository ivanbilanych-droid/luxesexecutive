const CSV_FILE='cars.csv';
function parseCSV(text){const rows=[];let row=[],field='',q=false;for(let i=0;i<text.length;i++){const c=text[i],n=text[i+1];if(c==='"'&&q&&n==='"'){field+='"';i++;}else if(c==='"')q=!q;else if(c===';'&&!q){row.push(field.trim());field='';}else if((c==='\n'||c==='\r')&&!q){if(field||row.length){row.push(field.trim());rows.push(row);row=[];field='';}if(c==='\r'&&n==='\n')i++;}else field+=c;}if(field||row.length){row.push(field.trim());rows.push(row);}return rows.filter(r=>r.some(v=>String(v||'').trim()));}
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function num(v){const s=String(v||'').replace(/[^\d]/g,'');return s?Number(s):0;}
function euro(v){const n=num(v);return n?n.toLocaleString('cs-CZ')+' €':'Cena na dotaz';}
function km(v){const n=num(v);return n?n.toLocaleString('cs-CZ')+' km':'';}
function val(c,ks){for(const k of ks){if(c[k]!==undefined&&String(c[k]).trim())return c[k];}return '';}
function isTop(v){return ['ANO','A','YES','1','TOP'].includes(String(v||'').trim().toUpperCase());}
function slugify(s){return String(s||'auto').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'auto';}
function rowsToCars(rows){if(!rows.length)return[];const h=rows[0].map(x=>String(x||'').trim());return rows.slice(1).map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]||'']))).filter(c=>val(c,['Фото','Марка','Модель'])).map(c=>{c.slug=c.slug||slugify(`${val(c,['Марка'])}-${val(c,['Модель'])}`);return c;});}
function langCode(){const l=(document.documentElement.lang||'cs').toLowerCase();return l.startsWith('de')?'de':l.startsWith('en')?'en':l.startsWith('ru')?'ru':'cs';}
const TXT={
 cs:{detail:'Detail vozu',status:'V prodeji',year:'Rok',mileage:'Nájezd',engine:'Motor',gearbox:'Převodovka',fuel:'Palivo',color:'Barva',prev:'Předchozí foto',next:'Další foto'},
 en:{detail:'Vehicle details',status:'For sale',year:'Year',mileage:'Mileage',engine:'Engine',gearbox:'Gearbox',fuel:'Fuel',color:'Colour',prev:'Previous photo',next:'Next photo'},
 de:{detail:'Fahrzeugdetails',status:'Zu verkaufen',year:'Jahr',mileage:'Kilometer',engine:'Motor',gearbox:'Getriebe',fuel:'Kraftstoff',color:'Farbe',prev:'Vorheriges Foto',next:'Nächstes Foto'},
 ru:{detail:'Подробнее',status:'В продаже',year:'Год',mileage:'Пробег',engine:'Двигатель',gearbox:'Коробка',fuel:'Топливо',color:'Цвет',prev:'Предыдущее фото',next:'Следующее фото'}
};
function gallery(c){const raw=val(c,['Галерея']);const main=val(c,['Фото']);const arr=(raw?raw.split('|'):[main]).map(x=>x.trim()).filter(Boolean);if(main&&!arr.includes(main))arr.unshift(main);return [...new Set(arr)];}
function spec(label,value){return value?`<div class="spec"><span>${esc(label)}</span><b>${esc(value)}</b></div>`:'';}
function card(c,i){
 const lang=langCode(),t=TXT[lang];
 const title=`${val(c,['Марка'])} ${val(c,['Модель'])}`.trim();
 const photos=gallery(c);const img=photos[0]||val(c,['Фото']);
 const link=`detail.html?car=${encodeURIComponent(c.slug||'auto')}&lang=${lang}`;
 const specs=[
  spec(t.year,val(c,['Год'])),spec(t.mileage,km(val(c,['Пробег']))),spec(t.engine,val(c,['Двигатель'])),
  spec(t.gearbox,val(c,['Коробка'])),spec(t.fuel,val(c,['Топливо'])),spec(t.color,val(c,['Цвет']))
 ].join('');
 const encoded=esc(JSON.stringify(photos));
 return `<article class="card pro-card reveal-card" style="animation-delay:${i*70}ms" data-photos='${encoded}' data-photo-index="0">
   <div class="pro-media">
    <a class="card-photo-link" href="${link}"><div class="card-photo"><img src="assets/cars/${esc(img)}" alt="${esc(title)}" loading="lazy"><span class="status">${esc(val(c,['Статус'])||t.status)}</span>${isTop(val(c,['TOP']))?'<span class="top">TOP</span>':''}<span class="photo-count">1 / ${photos.length}</span></div></a>
    ${photos.length>1?`<button class="slide-arrow slide-prev" type="button" aria-label="${esc(t.prev)}">‹</button><button class="slide-arrow slide-next" type="button" aria-label="${esc(t.next)}">›</button>`:''}
   </div>
   <div class="card-body pro-body">
    <div class="pro-heading"><div><a class="card-title" href="${link}">${esc(title)}</a><div class="card-version">${esc(val(c,['Комплектация']))}</div></div><div class="price">${euro(val(c,['Цена (€)']))}</div></div>
    <div class="pro-specs">${specs}</div>
    <div class="pro-actions"><a class="detail" href="${link}">${t.detail}</a><a class="pro-whatsapp" href="https://wa.me/420777399799?text=${encodeURIComponent(title)}" target="_blank" rel="noopener">WhatsApp</a></div>
   </div>
  </article>`;
}
function render(cars){const grid=document.querySelector('#catalogGrid');if(!grid)return;cars.sort((a,b)=>(isTop(val(a,['TOP']))?0:1)-(isTop(val(b,['TOP']))?0:1)||((Number(val(a,['Порядок']))||9999)-(Number(val(b,['Порядок']))||9999)));grid.innerHTML=cars.map(card).join('');}
function changePhoto(card,step){let photos=[];try{photos=JSON.parse(card.dataset.photos||'[]');}catch(e){}if(photos.length<2)return;let idx=Number(card.dataset.photoIndex||0);idx=(idx+step+photos.length)%photos.length;card.dataset.photoIndex=String(idx);const img=card.querySelector('.card-photo img');const count=card.querySelector('.photo-count');if(img){img.classList.add('switching');setTimeout(()=>{img.src='assets/cars/'+photos[idx];img.classList.remove('switching');},100);}if(count)count.textContent=`${idx+1} / ${photos.length}`;}
document.addEventListener('click',e=>{const btn=e.target.closest('.slide-arrow');if(!btn)return;e.preventDefault();e.stopPropagation();const card=btn.closest('.pro-card');changePhoto(card,btn.classList.contains('slide-next')?1:-1);});
(async()=>{try{const r=await fetch(CSV_FILE+'?v='+Date.now());if(!r.ok)throw 0;const cars=rowsToCars(parseCSV(await r.text()));if(cars.length)return render(cars);}catch(e){}render(window.CARS_DATA||[]);})();
