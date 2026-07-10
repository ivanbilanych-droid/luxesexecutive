function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function n(v){const x=String(v??'').replace(/[^0-9]/g,'');return x?Number(x):0}
function money(v){const x=n(v);return x?x.toLocaleString('cs-CZ')+' €':'Cena na dotaz'}
function km(v){const x=n(v);return x?x.toLocaleString('cs-CZ')+' km':''}
function val(c,keys){for(const k of keys){if(c[k]!==undefined&&String(c[k]).trim()!=='')return c[k]}return ''}
function gallery(c){return String(val(c,['Галерея','Galerie','Gallery'])||val(c,['Фото','Foto','Photo'])).split('|').map(x=>x.trim()).filter(Boolean)}
let photos=[],index=0;
function setPhoto(i){index=(i+photos.length)%photos.length;document.getElementById('mainPhoto').src='assets/cars/'+photos[index];document.querySelectorAll('.thumb').forEach((el,j)=>el.classList.toggle('active',j===index))}
function openBox(i){setPhoto(i);document.getElementById('lightbox').classList.add('open');document.getElementById('lightboxImg').src='assets/cars/'+photos[index]}
function closeBox(){document.getElementById('lightbox').classList.remove('open')}
function step(d){setPhoto(index+d);document.getElementById('lightboxImg').src='assets/cars/'+photos[index]}
function render(){
 const id=new URLSearchParams(location.search).get('car');const list=window.CARS_DATA||[];const c=list.find(x=>(x.slug||'')===id)||list[0];if(!c)return;
 const title=`${val(c,['Марка'])} ${val(c,['Модель'])}`.trim();photos=gallery(c);
 const specs=[['Rok',val(c,['Год'])],['Nájezd',km(val(c,['Пробег']))],['Motor',val(c,['Двигатель'])],['Převodovka',val(c,['Коробка'])],['Palivo',val(c,['Топливо'])],['Barva',val(c,['Цвет'])],['VIN',val(c,['VIN'])]];
 document.getElementById('detailRoot').innerHTML=`<a class="back-link" href="index.html#catalog">← Zpět do katalogu</a><div class="detail-hero"><div><div class="main-image" onclick="openBox(index)"><img id="mainPhoto" src="assets/cars/${esc(photos[0]||'')}" alt="${esc(title)}"></div><div class="thumb-row">${photos.map((p,i)=>`<button class="thumb ${i===0?'active':''}" onclick="setPhoto(${i})"><img src="assets/cars/${esc(p)}" alt=""></button>`).join('')}</div></div><aside class="detail-info"><div class="kicker">LUXES EXECUTIVE</div><h1>${esc(title)}</h1><p>${esc(val(c,['Комплектация']))}</p><div class="detail-price">${money(val(c,['Цена (€)']))}</div><div class="detail-specs">${specs.filter(x=>x[1]).map(([a,b])=>`<div class="detail-spec"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div><div class="card-actions"><a class="btn-dark" href="tel:+420777399799">Zavolat</a><a class="btn-outline" href="https://wa.me/420777399799?text=${encodeURIComponent(title)}" target="_blank">WhatsApp</a></div></aside></div><section class="equipment"><h2>Výbava</h2><p>${esc(val(c,['Комплектация'])||'Kompletní výbava bude doplněna.')}</p></section>`;
}
document.addEventListener('DOMContentLoaded',()=>{render();document.querySelector('.lightbox .close').onclick=closeBox;document.querySelector('.lightbox .prev').onclick=()=>step(-1);document.querySelector('.lightbox .next').onclick=()=>step(1);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)})});
