
const CSV_FILE='cars.csv';
function parseCSV(text){
  const rows=[]; let row=[], field='', q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(c=='"' && q && n=='"'){ field+='"'; i++; }
    else if(c=='"') q=!q;
    else if(c==';' && !q){ row.push(field); field=''; }
    else if((c=='\n'||c=='\r') && !q){
      if(field || row.length){ row.push(field); rows.push(row); row=[]; field=''; }
      if(c=='\r' && n=='\n') i++;
    } else field+=c;
  }
  if(field || row.length){ row.push(field); rows.push(row); }
  return rows;
}
function euro(v){ if(!v) return ''; return Number(String(v).replace(/\s/g,'')).toLocaleString('cs-CZ')+' €'; }
function km(v){ if(!v) return ''; return Number(String(v).replace(/\s/g,'')).toLocaleString('cs-CZ')+' km'; }
function esc(s){ return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
function card(car){
  const title = `${esc(car['Марка'])} ${esc(car['Модель'])}`.trim();
  const img = car['Фото'] ? `assets/cars/${esc(car['Фото'])}` : '';
  const top = String(car['TOP'] || car['⭐ TOP'] || '').toUpperCase() === 'ANO';
  return `<article class="card">
    <div class="card-photo">
      ${img ? `<img src="${img}" alt="${title}">` : 'Foto'}
      <span class="status">${esc(car['Статус'] || 'V prodeji')}</span>
      ${top ? '<span class="top">TOP</span>' : ''}
    </div>
    <div class="card-body">
      <div class="card-title">${title || 'Automobil'}</div>
      <div class="card-version">${esc(car['Комплектация'])}</div>
      <div class="meta">
        <span>${esc(car['Год'])}</span><span>${km(car['Пробег'])}</span>
        <span>${esc(car['Двигатель'])}</span><span>${esc(car['Коробка'])}</span>
        <span>${esc(car['Топливо'])}</span><span>${esc(car['Цвет'])}</span>
      </div>
      <div class="price">${euro(car['Цена (€)'])}</div>
      <a class="detail" href="#contact">Detail</a>
    </div>
  </article>`;
}
async function loadCars(){
  const grid=document.querySelector('#catalogGrid');
  if(!grid) return;
  try{
    const res=await fetch(CSV_FILE);
    const text=await res.text();
    const rows=parseCSV(text).filter(r=>r.some(x=>x.trim()!==''));
    const headers=rows.shift();
    const cars=rows.map(r=>Object.fromEntries(headers.map((h,i)=>[h,r[i]||''])))
      .filter(c=>c['Марка']||c['Модель']||c['Фото'])
      .sort((a,b)=>Number(a['Порядок']||9999)-Number(b['Порядок']||9999));
    grid.innerHTML = cars.map(c=>card(c)).join('');
  }catch(e){ grid.innerHTML=''; }
}
loadCars();
