document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('.mobile-toggle'),n=document.querySelector('.nav');
  if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'));
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});n?.classList.remove('open')}
  }));

  const cars=Array.isArray(window.CARS)?window.CARS:[];
  const lang=(document.documentElement.lang||'cs').toLowerCase();
  const labels={
    cs:{one:'vůz',many:'vozů'},en:{one:'vehicle',many:'vehicles'},de:{one:'Fahrzeug',many:'Fahrzeuge'},ru:{one:'автомобиль',many:'автомобилей'}
  }[lang]||{one:'vůz',many:'vozů'};
  const countText=n=>`${n} ${n===1?labels.one:labels.many}`;

  const brandGrid=document.querySelector('.brand-grid');
  if(brandGrid&&cars.length){
    const map=new Map();
    cars.forEach(c=>map.set(c.brand,(map.get(c.brand)||0)+1));
    brandGrid.innerHTML=[...map.entries()].map(([brand,count])=>
      `<a class="brand-card" href="#models" data-brand="${brand}"><div class="mark">${brand}</div><span>${countText(count)}</span></a>`
    ).join('');
  }

  const modelGrid=document.querySelector('.model-grid');
  if(modelGrid&&cars.length){
    const map=new Map();
    cars.forEach(c=>{
      const key=`${c.brand}||${c.model}`;
      if(!map.has(key)) map.set(key,{brand:c.brand,model:c.model,count:0,photo:c.mainPhoto});
      map.get(key).count++;
    });
    modelGrid.innerHTML=[...map.values()].map(m=>
      `<a class="model-card" href="catalog.html?brand=${encodeURIComponent(m.brand)}&model=${encodeURIComponent(m.model)}"><img src="${m.photo}" alt="${m.brand} ${m.model}"><div class="meta"><small>${m.brand}</small><strong>${m.model}</strong><div class="count">${countText(m.count)}</div></div></a>`
    ).join('');
  }
});
