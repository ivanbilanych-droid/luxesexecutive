const LANG = (document.documentElement.lang || 'cs').toLowerCase();
const T = {
  cs:{detail:'Detail', status:'V prodeji', priceAsk:'Cena na dotaz', km:'km'},
  en:{detail:'Details', status:'For sale', priceAsk:'Price on request', km:'km'},
  de:{detail:'Details', status:'Zu verkaufen', priceAsk:'Preis auf Anfrage', km:'km'},
  ru:{detail:'Подробнее', status:'В продаже', priceAsk:'Цена по запросу', km:'км'}
}[LANG] || null;
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function num(v){const s=String(v||'').replace(/[^\d]/g,'');return s?Number(s):0}
function euro(v){const n=num(v);return n?n.toLocaleString(LANG==='de'?'de-DE':LANG==='en'?'en-GB':LANG==='ru'?'ru-RU':'cs-CZ')+' €':T.priceAsk}
function km(v){const n=num(v);return n?n.toLocaleString(LANG==='de'?'de-DE':LANG==='en'?'en-GB':LANG==='ru'?'ru-RU':'cs-CZ')+' '+T.km:''}
function isTop(v){return ['ANO','A','YES','1','TOP'].includes(String(v||'').trim().toUpperCase())}
function val(c,ks){for(const k of ks){if(c[k]&&String(c[k]).trim())return c[k]}return ''}
function localizedStatus(raw){const s=String(raw||'').trim().toLowerCase();if(!s||['v prodeji','for sale','zu verkaufen','в продаже'].includes(s))return T.status;return raw}
function carCard(c,i){
 const title=((val(c,['Марка'])+' '+val(c,['Модель'])).trim())||'Automobil';
 const img=val(c,['Фото']); const link='detail.html?car='+encodeURIComponent(c.slug||'auto')+'&lang='+encodeURIComponent(LANG);
 const specs=[val(c,['Год']),km(val(c,['Пробег'])),val(c,['Двигатель']),val(c,['Коробка']),val(c,['Топливо']),val(c,['Цвет'])].filter(Boolean).map(x=>`<span>${esc(x)}</span>`).join('');
 return `<article class="card reveal-card" style="animation-delay:${i*70}ms"><a class="card-photo-link" href="${link}"><div class="card-photo">${img?`<img src="assets/cars/${esc(img)}" alt="${esc(title)}">`:''}<span class="status">${esc(localizedStatus(val(c,['Статус'])))}</span>${isTop(val(c,['TOP','⭐ TOP']))?'<span class="top">TOP</span>':''}</div></a><div class="card-body"><a class="card-title" href="${link}">${esc(title)}</a><div class="card-version">${esc(val(c,['Комплектация']))}</div><div class="meta">${specs}</div><div class="price">${euro(val(c,['Цена (€)']))}</div><a class="detail" href="${link}">${T.detail}</a></div></article>`;
}
function loadCars(){const grid=document.querySelector('#catalogGrid');if(!grid)return;const cars=(window.CARS_DATA||[]).sort((a,b)=>(isTop(val(a,['TOP','⭐ TOP']))?0:1)-(isTop(val(b,['TOP','⭐ TOP']))?0:1)||((Number(val(a,['Порядок']))||9999)-(Number(val(b,['Порядок']))||9999)));grid.innerHTML=cars.map(carCard).join('');}
loadCars();

/* Contact form -> WhatsApp, language-aware default text */
(function(){
 const defaults={cs:'Dobrý den, mám zájem o automobil LUXES EXECUTIVE.',en:'Hello, I am interested in a LUXES EXECUTIVE vehicle.',de:'Guten Tag, ich interessiere mich für ein Fahrzeug von LUXES EXECUTIVE.',ru:'Здравствуйте, меня интересует автомобиль LUXES EXECUTIVE.'};
 function clean(v){return String(v||'').trim()}
 function collect(form){return Array.from(form.querySelectorAll('input,textarea')).map(el=>({label:clean(el.placeholder)||'Field',value:clean(el.value)})).filter(x=>x.value).map(x=>x.label+': '+x.value).join('\n')}
 function send(form){const text=collect(form)||defaults[LANG]||defaults.cs;window.open('https://wa.me/420777399799?text='+encodeURIComponent(text),'_blank')}
 document.addEventListener('click',e=>{const b=e.target.closest('.submit');if(!b)return;const f=b.closest('form');if(!f)return;e.preventDefault();send(f)});
 document.addEventListener('submit',e=>{const f=e.target.closest('form');if(!f)return;e.preventDefault();send(f)});
})();