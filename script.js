const LANGUAGES = ['cs', 'en', 'de', 'ru'];
const LOCALES = { cs: 'cs-CZ', en: 'en-GB', de: 'de-DE', ru: 'ru-RU' };
const HOME_FILES = { cs: 'index.html', en: 'index_en.html', de: 'index_de.html', ru: 'index_ru.html' };

const TEXT = {
  cs: {
    brand: 'PRÉMIOVÉ AUTOMOBILY BEZ HRANIC',
    nav: ['HLAVNÍ', 'KATALOG', 'AUTO NA OBJEDNÁVKU', 'CAR CLUB', 'PARTNEŘI', 'KONTAKTY'],
    heroTitle: 'PRÉMIOVÉ<br><span>AUTOMOBILY</span><br>BEZ HRANIC',
    heroText: 'Výběr, prověření, nákup a dodání prémiových automobilů z Evropy, Kanady, USA a SAE.',
    heroButtons: ['ZOBRAZIT KATALOG', 'NAJÍT AUTO PRO MĚ'],
    benefits: [
      ['Prověřené automobily', 'VIN, historie, dokumenty a technický stav'],
      ['Výběr po celém světě', 'Evropa, Kanada, USA a SAE'],
      ['Bezpečný nákup', 'Transparentní podmínky a kontrola prodávajícího'],
      ['Doprava na klíč', 'Logistiku a pojištění vyřídíme za vás'],
      ['Prémiový segment', 'Exkluzivní, luxusní a sběratelské vozy'],
      ['Osobní manažer', 'Jeden kontakt od poptávky po předání']
    ],
    modelsTitle: 'AKTUÁLNÍ NABÍDKA', viewAll: 'ZOBRAZIT VŠE →', zeroVehicles: '0 vozů', priceOnRequest: 'CENA NA DOTAZ',
    processTitle: 'JAK PRACUJEME',
    steps: [
      ['Poptávka', 'Popíšete požadovaný automobil nebo nám pošlete odkaz.'],
      ['Výběr', 'Najdeme nejlepší varianty na světových trzích.'],
      ['Kontrola', 'Prověříme historii, dokumenty a technický stav.'],
      ['Dodání', 'Vyřídíme dokumenty a doručíme vůz na klíč.']
    ],
    offerTitle: 'VYŽÁDAT NABÍDKU', offerIntro: 'Nechte nám zprávu a připravíme pro vás nejlepší nabídku.',
    formLabels: ['Jméno', 'E-mail', 'Telefon / WhatsApp', 'Požadovaný automobil', 'Doplňující informace'],
    formPlaceholders: ['Vaše jméno', 'Váš e-mail', '+420 ...', 'Značka, model, rok, rozpočet', 'Komentář'],
    formButton: 'ODESLAT POPTÁVKU',
    vipTitle: 'INDIVIDUÁLNÍ PŘÍSTUP KE KAŽDÉMU KLIENTOVI',
    vipItems: ['Čestné podmínky', 'Transparentní obchod', 'Důvěrnost', 'Podpora 24/7'],
    aboutTitle: 'PROČ LUXES EXECUTIVE?',
    aboutText: 'Specializujeme se na prémiový segment a nabízíme spolehlivá řešení, prověřené zkušenosti a výbornou pověst.',
    aboutButton: 'VÍCE O NÁS',
    audiences: [
      ['SOUKROMÍ KLIENTI', 'Výběr exkluzivních automobilů na objednávku.'],
      ['DEALEŘI', 'Partnerské podmínky a velkoobchodní nabídky.'],
      ['INVESTOŘI', 'Investice do prémiových a sběratelských automobilů.'],
      ['MEZINÁRODNÍ PARTNEŘI', 'Spolehlivá spolupráce, import a export po celém světě.']
    ],
    footerDescription: 'Mezinárodní výběr prémiových automobilů<br>a řešení mobility na míru',
    footerNavTitle: 'NAVIGACE', footerNav: ['Hlavní', 'Katalog', 'Car Club', 'Partneři'],
    footerServicesTitle: 'SLUŽBY', footerServices: ['Výběr na objednávku', 'Kontrola a vyjednávání', 'Mezinárodní doprava', 'Exportní dokumenty'],
    contactsTitle: 'KONTAKTY', city: 'Praha, Česká republika', companyTitle: 'SPOLEČNOST', privacy: 'Ochrana osobních údajů · Cookies',
    catalogNav: ['HLAVNÍ', 'KATALOG AUT', 'JAK PRACUJEME', 'KONTAKTY'],
    detailNav: ['HLAVNÍ', 'KATALOG AUT', 'KONTAKTY'],
    catalogTitle: 'KATALOG VOZŮ', catalogIntro: 'Aktuální nabídka prémiových automobilů.',
    emptyTitle: 'Zatím nejsou žádná vozidla.', emptyText: 'Jakmile přidáme nabídku, zobrazí se zde automaticky.',
    requestOffer: 'VYŽÁDAT NABÍDKU', statusForSale: 'V prodeji',
    specs: { year: 'Rok', mileage: 'Nájezd', engine: 'Motor', fuel: 'Palivo', gearbox: 'Převodovka', color: 'Barva' },
    vehicleDetail: 'DETAIL VOZU', notFound: 'Vozidlo nebylo nalezeno.', backCatalog: 'ZPĚT DO KATALOGU', backCatalogArrow: '← Zpět do katalogu',
    call: 'ZAVOLAT', photo: 'Foto', interest: 'Mám zájem o', catalogPageTitle: 'Katalog | LUXES EXECUTIVE', detailPageTitle: 'Detail vozu | LUXES EXECUTIVE'
  },
  en: {
    brand: 'PREMIUM CARS WITHOUT BORDERS',
    nav: ['HOME', 'CATALOG', 'CAR TO ORDER', 'CAR CLUB', 'PARTNERS', 'CONTACTS'],
    heroTitle: 'PREMIUM<br><span>CARS</span><br>WITHOUT BORDERS',
    heroText: 'Sourcing, inspection, purchase and delivery of premium cars from Europe, Canada, the USA and the UAE.',
    heroButtons: ['VIEW CATALOG', 'FIND A CAR FOR ME'],
    benefits: [
      ['Verified vehicles', 'VIN, history, documents and technical condition'],
      ['Worldwide sourcing', 'Europe, Canada, USA and UAE'],
      ['Secure purchase', 'Transparent terms and seller verification'],
      ['Turnkey delivery', 'We manage logistics and transport insurance'],
      ['Premium segment', 'Exclusive, luxury and collectible vehicles'],
      ['Personal manager', 'One contact from request to handover']
    ],
    modelsTitle: 'CURRENT OFFER', viewAll: 'VIEW ALL →', zeroVehicles: '0 vehicles', priceOnRequest: 'PRICE ON REQUEST',
    processTitle: 'HOW WE WORK',
    steps: [
      ['Request', 'Describe the car you want or send us a link.'],
      ['Selection', 'We find the best options on international markets.'],
      ['Inspection', 'We verify the history, documents and technical condition.'],
      ['Delivery', 'We handle the documents and deliver the car turnkey.']
    ],
    offerTitle: 'REQUEST AN OFFER', offerIntro: 'Leave us a message and we will prepare the best offer for you.',
    formLabels: ['Name', 'E-mail', 'Phone / WhatsApp', 'Requested car', 'Additional information'],
    formPlaceholders: ['Your name', 'Your e-mail', '+420 ...', 'Make, model, year, budget', 'Comment'],
    formButton: 'SEND REQUEST',
    vipTitle: 'INDIVIDUAL APPROACH TO EVERY CLIENT',
    vipItems: ['Fair terms', 'Transparent transactions', 'Confidentiality', '24/7 support'],
    aboutTitle: 'WHY LUXES EXECUTIVE?',
    aboutText: 'We specialise in the premium segment and offer reliable solutions, proven experience and an excellent reputation.',
    aboutButton: 'MORE ABOUT US',
    audiences: [
      ['PRIVATE CLIENTS', 'Exclusive cars selected to order.'],
      ['DEALERS', 'Partner terms and wholesale offers.'],
      ['INVESTORS', 'Investment in premium and collectible vehicles.'],
      ['INTERNATIONAL PARTNERS', 'Reliable cooperation, import and export worldwide.']
    ],
    footerDescription: 'Global Luxury Vehicle Brokerage<br>& Executive Mobility Solutions',
    footerNavTitle: 'NAVIGATION', footerNav: ['Home', 'Catalog', 'Car Club', 'Partners'],
    footerServicesTitle: 'SERVICES', footerServices: ['Tailored vehicle sourcing', 'Inspection and negotiation', 'International delivery', 'Export documents'],
    contactsTitle: 'CONTACTS', city: 'Prague, Czech Republic', companyTitle: 'COMPANY', privacy: 'Privacy Policy · Cookies',
    catalogNav: ['HOME', 'CAR CATALOG', 'HOW WE WORK', 'CONTACTS'],
    detailNav: ['HOME', 'CAR CATALOG', 'CONTACTS'],
    catalogTitle: 'CAR CATALOG', catalogIntro: 'Current selection of premium cars.',
    emptyTitle: 'No vehicles are available yet.', emptyText: 'New offers will appear here automatically as soon as they are added.',
    requestOffer: 'REQUEST AN OFFER', statusForSale: 'For sale',
    specs: { year: 'Year', mileage: 'Mileage', engine: 'Engine', fuel: 'Fuel', gearbox: 'Transmission', color: 'Colour' },
    vehicleDetail: 'VEHICLE DETAILS', notFound: 'Vehicle not found.', backCatalog: 'BACK TO CATALOG', backCatalogArrow: '← Back to catalog',
    call: 'CALL', photo: 'Photo', interest: 'I am interested in', catalogPageTitle: 'Car Catalog | LUXES EXECUTIVE', detailPageTitle: 'Vehicle Details | LUXES EXECUTIVE'
  },
  de: {
    brand: 'PREMIUMFAHRZEUGE OHNE GRENZEN',
    nav: ['START', 'KATALOG', 'FAHRZEUG AUF BESTELLUNG', 'CAR CLUB', 'PARTNER', 'KONTAKT'],
    heroTitle: 'PREMIUM<br><span>FAHRZEUGE</span><br>OHNE GRENZEN',
    heroText: 'Auswahl, Prüfung, Kauf und Lieferung von Premiumfahrzeugen aus Europa, Kanada, den USA und den VAE.',
    heroButtons: ['KATALOG ANZEIGEN', 'FAHRZEUG SUCHEN'],
    benefits: [
      ['Geprüfte Fahrzeuge', 'VIN, Historie, Dokumente und technischer Zustand'],
      ['Weltweite Auswahl', 'Europa, Kanada, USA und VAE'],
      ['Sicherer Kauf', 'Transparente Bedingungen und Prüfung des Verkäufers'],
      ['Schlüsselfertige Lieferung', 'Logistik und Transportversicherung aus einer Hand'],
      ['Premiumsegment', 'Exklusive Luxus- und Sammlerfahrzeuge'],
      ['Persönlicher Ansprechpartner', 'Ein Kontakt von der Anfrage bis zur Übergabe']
    ],
    modelsTitle: 'AKTUELLES ANGEBOT', viewAll: 'ALLE ANZEIGEN →', zeroVehicles: '0 Fahrzeuge', priceOnRequest: 'PREIS AUF ANFRAGE',
    processTitle: 'SO ARBEITEN WIR',
    steps: [
      ['Anfrage', 'Beschreiben Sie Ihr Wunschfahrzeug oder senden Sie uns einen Link.'],
      ['Auswahl', 'Wir finden die besten Angebote auf internationalen Märkten.'],
      ['Prüfung', 'Wir prüfen Historie, Dokumente und technischen Zustand.'],
      ['Lieferung', 'Wir erledigen die Dokumente und liefern das Fahrzeug schlüsselfertig.']
    ],
    offerTitle: 'ANGEBOT ANFORDERN', offerIntro: 'Hinterlassen Sie uns eine Nachricht und wir erstellen das beste Angebot für Sie.',
    formLabels: ['Name', 'E-Mail', 'Telefon / WhatsApp', 'Wunschfahrzeug', 'Weitere Informationen'],
    formPlaceholders: ['Ihr Name', 'Ihre E-Mail', '+420 ...', 'Marke, Modell, Baujahr, Budget', 'Kommentar'],
    formButton: 'ANFRAGE SENDEN',
    vipTitle: 'INDIVIDUELLE BETREUUNG FÜR JEDEN KUNDEN',
    vipItems: ['Faire Bedingungen', 'Transparente Abwicklung', 'Vertraulichkeit', 'Support rund um die Uhr'],
    aboutTitle: 'WARUM LUXES EXECUTIVE?',
    aboutText: 'Wir sind auf das Premiumsegment spezialisiert und bieten zuverlässige Lösungen, fundierte Erfahrung und einen ausgezeichneten Ruf.',
    aboutButton: 'ÜBER UNS',
    audiences: [
      ['PRIVATKUNDEN', 'Auswahl exklusiver Fahrzeuge auf Bestellung.'],
      ['HÄNDLER', 'Partnerkonditionen und Großhandelsangebote.'],
      ['INVESTOREN', 'Investitionen in Premium- und Sammlerfahrzeuge.'],
      ['INTERNATIONALE PARTNER', 'Zuverlässige Zusammenarbeit sowie weltweiter Import und Export.']
    ],
    footerDescription: 'Internationale Vermittlung von Premiumfahrzeugen<br>& individuelle Mobilitätslösungen',
    footerNavTitle: 'NAVIGATION', footerNav: ['Start', 'Katalog', 'Car Club', 'Partner'],
    footerServicesTitle: 'LEISTUNGEN', footerServices: ['Fahrzeugauswahl auf Bestellung', 'Prüfung und Verhandlung', 'Internationaler Transport', 'Exportdokumente'],
    contactsTitle: 'KONTAKT', city: 'Prag, Tschechische Republik', companyTitle: 'UNTERNEHMEN', privacy: 'Datenschutz · Cookies',
    catalogNav: ['STARTSEITE', 'FAHRZEUGKATALOG', 'SO ARBEITEN WIR', 'KONTAKT'],
    detailNav: ['STARTSEITE', 'FAHRZEUGKATALOG', 'KONTAKT'],
    catalogTitle: 'FAHRZEUGKATALOG', catalogIntro: 'Aktuelles Angebot an Premiumfahrzeugen.',
    emptyTitle: 'Derzeit sind keine Fahrzeuge verfügbar.', emptyText: 'Neue Angebote werden hier automatisch angezeigt, sobald sie hinzugefügt werden.',
    requestOffer: 'ANGEBOT ANFORDERN', statusForSale: 'Zum Verkauf',
    specs: { year: 'Baujahr', mileage: 'Kilometerstand', engine: 'Motor', fuel: 'Kraftstoff', gearbox: 'Getriebe', color: 'Farbe' },
    vehicleDetail: 'FAHRZEUGDETAILS', notFound: 'Fahrzeug nicht gefunden.', backCatalog: 'ZURÜCK ZUM KATALOG', backCatalogArrow: '← Zurück zum Katalog',
    call: 'ANRUFEN', photo: 'Foto', interest: 'Ich interessiere mich für', catalogPageTitle: 'Fahrzeugkatalog | LUXES EXECUTIVE', detailPageTitle: 'Fahrzeugdetails | LUXES EXECUTIVE'
  },
  ru: {
    brand: 'ПРЕМИАЛЬНЫЕ АВТОМОБИЛИ БЕЗ ГРАНИЦ',
    nav: ['ГЛАВНАЯ', 'КАТАЛОГ', 'АВТО ПОД ЗАКАЗ', 'CAR CLUB', 'ПАРТНЁРАМ', 'КОНТАКТЫ'],
    heroTitle: 'ПРЕМИАЛЬНЫЕ<br><span>АВТОМОБИЛИ</span><br>БЕЗ ГРАНИЦ',
    heroText: 'Подбор, проверка, покупка и доставка премиальных автомобилей из Европы, Канады, США и ОАЭ.',
    heroButtons: ['СМОТРЕТЬ КАТАЛОГ', 'НАЙТИ АВТО ДЛЯ МЕНЯ'],
    benefits: [
      ['Проверенные автомобили', 'VIN, история, документы и техническое состояние'],
      ['Поиск по всему миру', 'Европа, Канада, США и ОАЭ'],
      ['Безопасная покупка', 'Прозрачные условия и проверка продавца'],
      ['Доставка под ключ', 'Логистика и страхование перевозки'],
      ['Премиальный сегмент', 'Эксклюзивные, люксовые и коллекционные автомобили'],
      ['Персональный менеджер', 'Один контакт от заявки до выдачи автомобиля']
    ],
    modelsTitle: 'АКТУАЛЬНЫЕ АВТОМОБИЛИ', viewAll: 'ПОКАЗАТЬ ВСЕ →', zeroVehicles: '0 автомобилей', priceOnRequest: 'ЦЕНА ПО ЗАПРОСУ',
    processTitle: 'КАК МЫ РАБОТАЕМ',
    steps: [
      ['Запрос', 'Опишите нужный автомобиль или отправьте нам ссылку.'],
      ['Подбор', 'Мы найдём лучшие варианты на международных рынках.'],
      ['Проверка', 'Проверим историю, документы и техническое состояние.'],
      ['Доставка', 'Оформим документы и доставим автомобиль под ключ.']
    ],
    offerTitle: 'ЗАПРОСИТЬ ПРЕДЛОЖЕНИЕ', offerIntro: 'Оставьте сообщение, и мы подготовим для вас лучшее предложение.',
    formLabels: ['Имя', 'E-mail', 'Телефон / WhatsApp', 'Нужный автомобиль', 'Дополнительная информация'],
    formPlaceholders: ['Ваше имя', 'Ваш e-mail', '+420 ...', 'Марка, модель, год, бюджет', 'Комментарий'],
    formButton: 'ОТПРАВИТЬ ЗАПРОС',
    vipTitle: 'ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ',
    vipItems: ['Честные условия', 'Прозрачная сделка', 'Конфиденциальность', 'Поддержка 24/7'],
    aboutTitle: 'ПОЧЕМУ LUXES EXECUTIVE?',
    aboutText: 'Мы специализируемся на премиальном сегменте и предлагаем надёжные решения, проверенный опыт и безупречную репутацию.',
    aboutButton: 'БОЛЬШЕ О НАС',
    audiences: [
      ['ЧАСТНЫЕ КЛИЕНТЫ', 'Подбор эксклюзивных автомобилей под заказ.'],
      ['ДИЛЕРЫ', 'Партнёрские условия и оптовые предложения.'],
      ['ИНВЕСТОРЫ', 'Инвестиции в премиальные и коллекционные автомобили.'],
      ['МЕЖДУНАРОДНЫЕ ПАРТНЁРЫ', 'Надёжное сотрудничество, импорт и экспорт по всему миру.']
    ],
    footerDescription: 'Международный подбор премиальных автомобилей<br>и индивидуальные решения мобильности',
    footerNavTitle: 'НАВИГАЦИЯ', footerNav: ['Главная', 'Каталог', 'Car Club', 'Партнёрам'],
    footerServicesTitle: 'УСЛУГИ', footerServices: ['Подбор под заказ', 'Проверка и переговоры', 'Международная доставка', 'Экспортные документы'],
    contactsTitle: 'КОНТАКТЫ', city: 'Прага, Чешская Республика', companyTitle: 'КОМПАНИЯ', privacy: 'Политика конфиденциальности · Cookies',
    catalogNav: ['ГЛАВНАЯ', 'КАТАЛОГ АВТО', 'КАК МЫ РАБОТАЕМ', 'КОНТАКТЫ'],
    detailNav: ['ГЛАВНАЯ', 'КАТАЛОГ АВТО', 'КОНТАКТЫ'],
    catalogTitle: 'КАТАЛОГ АВТОМОБИЛЕЙ', catalogIntro: 'Актуальное предложение премиальных автомобилей.',
    emptyTitle: 'Автомобилей пока нет.', emptyText: 'Новые предложения появятся здесь автоматически после добавления.',
    requestOffer: 'ЗАПРОСИТЬ ПРЕДЛОЖЕНИЕ', statusForSale: 'В продаже',
    specs: { year: 'Год', mileage: 'Пробег', engine: 'Двигатель', fuel: 'Топливо', gearbox: 'Коробка', color: 'Цвет' },
    vehicleDetail: 'ПОДРОБНЕЕ', notFound: 'Автомобиль не найден.', backCatalog: 'ВЕРНУТЬСЯ В КАТАЛОГ', backCatalogArrow: '← Вернуться в каталог',
    call: 'ПОЗВОНИТЬ', photo: 'Фото', interest: 'Меня интересует', catalogPageTitle: 'Каталог автомобилей | LUXES EXECUTIVE', detailPageTitle: 'Автомобиль | LUXES EXECUTIVE'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLanguage();
  document.documentElement.lang = lang;
  document.querySelectorAll('.brand img').forEach((img) => { img.src = 'assets/logo-gold.png'; });

  if (document.querySelector('.hero')) applyHomeTranslations(lang);
  else applySubpageTranslations(lang);
  applyLanguageSwitcher(lang);
  setupNavigation();

  const renderCars = () => {
    const cars = Array.isArray(window.CARS) ? window.CARS : [];
    renderHomeCars(cars, lang);
    renderCatalog(cars, lang);
    renderDetail(cars, lang);
  };
  if (document.querySelector('.hero') && !Array.isArray(window.CARS)) {
    const carsScript = document.createElement('script');
    carsScript.src = 'cars.js';
    carsScript.onload = renderCars;
    document.head.appendChild(carsScript);
  } else {
    renderCars();
  }
});

function getParams() {
  return new URLSearchParams(window.location.search);
}

function getLanguage() {
  const requested = getParams().get('lang');
  if (LANGUAGES.includes(requested)) return requested;
  const pageLanguage = (document.documentElement.lang || 'cs').slice(0, 2).toLowerCase();
  return LANGUAGES.includes(pageLanguage) ? pageLanguage : 'cs';
}

function homeFile(lang) {
  return HOME_FILES[lang] || HOME_FILES.cs;
}

function localizedUrl(url, lang) {
  const hashAt = url.indexOf('#');
  const hash = hashAt >= 0 ? url.slice(hashAt) : '';
  const withoutHash = hashAt >= 0 ? url.slice(0, hashAt) : url;
  const queryAt = withoutHash.indexOf('?');
  const path = queryAt >= 0 ? withoutHash.slice(0, queryAt) : withoutHash;
  const query = new URLSearchParams(queryAt >= 0 ? withoutHash.slice(queryAt + 1) : '');
  query.set('lang', lang);
  return `${path}?${query.toString()}${hash}`;
}

function setTextList(elements, values) {
  Array.from(elements).forEach((element, index) => {
    if (values[index] !== undefined) element.textContent = values[index];
  });
}

function applyHomeTranslations(lang) {
  const t = TEXT[lang];
  document.title = { cs: 'LUXES EXECUTIVE | Automobily bez hranic', en: 'LUXES EXECUTIVE | Cars Without Borders', de: 'LUXES EXECUTIVE | Fahrzeuge ohne Grenzen', ru: 'LUXES EXECUTIVE | Автомобили без границ' }[lang] || 'LUXES EXECUTIVE';
  const brand = document.querySelector('.brand');
  if (brand) brand.href = homeFile(lang);
  const brandLine = document.querySelector('.brand span');
  if (brandLine) brandLine.textContent = t.brand;
  setTextList(document.querySelectorAll('header .nav a'), t.nav);

  const hero = document.querySelector('.hero');
  if (hero) {
    hero.querySelector('h1').innerHTML = t.heroTitle;
    hero.querySelector('p').textContent = t.heroText;
    setTextList(hero.querySelectorAll('.actions a'), t.heroButtons);
    const heroLinks = hero.querySelectorAll('.actions a');
    if (heroLinks[0]) heroLinks[0].href = localizedUrl('catalog.html', lang);
    if (heroLinks[1]) heroLinks[1].href = '#club-buyer';
  }

  document.querySelectorAll('.quick-item').forEach((item, index) => {
    if (!t.benefits[index]) return;
    item.querySelector('strong').textContent = t.benefits[index][0];
    item.querySelector('span').textContent = t.benefits[index][1];
  });

  const models = document.getElementById('models');
  if (models) {
    models.querySelector('.section-head h2').textContent = t.modelsTitle;
    const allLink = models.querySelector('.section-link');
    allLink.textContent = t.viewAll;
    allLink.href = localizedUrl('catalog.html', lang);
    setTextList(models.querySelectorAll('.model-count'), Array(models.querySelectorAll('.model-count').length).fill(t.zeroVehicles));
    models.querySelectorAll('.model-card').forEach((card) => { card.href = localizedUrl(card.getAttribute('href'), lang); });
  }

  const process = document.getElementById('process');
  if (process) {
    process.querySelector('.steps h2').textContent = t.processTitle;
    process.querySelectorAll('.step').forEach((step, index) => {
      if (!t.steps[index]) return;
      step.querySelector('strong').textContent = t.steps[index][0];
      step.querySelector('span').textContent = t.steps[index][1];
    });

    const form = process.querySelector('.form-panel');
    form.querySelector('h2').textContent = t.offerTitle;
    form.querySelector('p').textContent = t.offerIntro;
    setTextList(form.querySelectorAll('label'), t.formLabels);
    Array.from(form.querySelectorAll('input, textarea')).forEach((field, index) => { field.placeholder = t.formPlaceholders[index] || ''; });
    form.querySelector('button').textContent = t.formButton;

    const vip = process.querySelector('.vip-panel');
    vip.querySelector('h3').textContent = t.vipTitle;
    setTextList(vip.querySelectorAll('li'), t.vipItems);
  }

  const about = document.getElementById('about');
  if (about) {
    const why = about.querySelector('.why');
    why.querySelector('h2').textContent = t.aboutTitle;
    why.querySelector('p').textContent = t.aboutText;
    why.querySelector('a').textContent = t.aboutButton;
    about.querySelectorAll('.aud-card').forEach((card, index) => {
      if (!t.audiences[index]) return;
      card.querySelector('h3').textContent = t.audiences[index][0];
      card.querySelector('p').textContent = t.audiences[index][1];
    });
  }

  const columns = document.querySelectorAll('.footer-grid > div');
  if (columns.length >= 5) {
    columns[0].querySelector('p').innerHTML = t.footerDescription;
    columns[1].querySelector('h3').textContent = t.footerNavTitle;
    setTextList(columns[1].querySelectorAll('a'), t.footerNav);
    const footerLinks = columns[1].querySelectorAll('a');
    ['#home', '#models', '#car-club', '#partners'].forEach((href, index) => { if (footerLinks[index]) footerLinks[index].href = href; });
    columns[2].querySelector('h3').textContent = t.footerServicesTitle;
    setTextList(columns[2].querySelectorAll('li'), t.footerServices);
    columns[3].querySelector('h3').textContent = t.contactsTitle;
    columns[3].querySelector('p').innerHTML = `+420 777 399 799<br>executive@luxes.cz<br>${t.city}`;
    columns[4].querySelector('h3').textContent = t.companyTitle;
  }
  const privacy = document.querySelector('.copyright span:last-child');
  if (privacy) privacy.textContent = t.privacy;
}

function applySubpageTranslations(lang) {
  const t = TEXT[lang];
  const brand = document.querySelector('.brand');
  if (brand) brand.href = homeFile(lang);
  const brandLine = document.querySelector('.brand span');
  if (brandLine) brandLine.textContent = t.brand;

  const isCatalog = Boolean(document.getElementById('catalogGrid'));
  const navLinks = document.querySelectorAll('header .nav a');
  const labels = isCatalog ? t.catalogNav : t.detailNav;
  setTextList(navLinks, labels);
  if (navLinks[0]) navLinks[0].href = homeFile(lang);
  if (navLinks[1]) navLinks[1].href = localizedUrl('catalog.html', lang);
  if (isCatalog && navLinks[2]) navLinks[2].href = `${homeFile(lang)}#process`;
  if (isCatalog && navLinks[3]) navLinks[3].href = `${homeFile(lang)}#contact`;
  if (!isCatalog && navLinks[2]) navLinks[2].href = `${homeFile(lang)}#contact`;

  if (isCatalog) {
    document.title = t.catalogPageTitle;
    const title = document.getElementById('catalogTitle');
    if (title) title.textContent = t.catalogTitle;
    const intro = document.querySelector('.catalog-page .section-head p');
    if (intro) intro.textContent = t.catalogIntro;
  } else {
    document.title = t.detailPageTitle;
  }
}

function applyLanguageSwitcher(lang) {
  let switcher = document.querySelector('.lang');
  if (!switcher) {
    const navWrap = document.querySelector('.navrow .wrap');
    if (!navWrap) return;
    switcher = document.createElement('div');
    switcher.className = 'lang';
    navWrap.appendChild(switcher);
  }

  switcher.textContent = '';
  const isHome = Boolean(document.querySelector('.hero'));
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  LANGUAGES.forEach((code, index) => {
    if (index) switcher.appendChild(document.createTextNode(' · '));
    const label = code === 'cs' ? 'CZ' : code.toUpperCase();
    if (code === lang) {
      const active = document.createElement('span');
      active.className = 'active';
      active.textContent = label;
      switcher.appendChild(active);
      return;
    }
    const link = document.createElement('a');
    link.textContent = label;
    if (isHome) {
      link.href = homeFile(code);
    } else {
      const params = getParams();
      params.set('lang', code);
      link.href = `${currentFile}?${params.toString()}`;
    }
    switcher.appendChild(link);
  });
}

function setupNavigation() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const selector = link.getAttribute('href');
      if (!selector || selector === '#') return;
      const target = document.querySelector(selector);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      nav?.classList.remove('open');
    });
  });
}

function formatPrice(value, lang) {
  if (value === null || value === undefined || value === '') return TEXT[lang].priceOnRequest;
  return new Intl.NumberFormat(LOCALES[lang]).format(Number(value)) + ' €';
}

function formatMileage(value, lang) {
  if (value === null || value === undefined || value === '') return '—';
  return new Intl.NumberFormat(LOCALES[lang]).format(Number(value)) + ' km';
}

function translateStatus(value, lang) {
  const key = String(value || '').toLowerCase();
  const status = {
    'v prodeji': { cs: 'V prodeji', en: 'For sale', de: 'Zum Verkauf', ru: 'В продаже' },
    'rezervováno': { cs: 'Rezervováno', en: 'Reserved', de: 'Reserviert', ru: 'Зарезервировано' },
    'prodáno': { cs: 'Prodáno', en: 'Sold', de: 'Verkauft', ru: 'Продано' }
  }[key];
  return status ? status[lang] : value;
}

function translateValue(value, lang) {
  const values = {
    Benzin: { cs: 'Benzín', en: 'Petrol', de: 'Benzin', ru: 'Бензин' },
    Diesel: { cs: 'Diesel', en: 'Diesel', de: 'Diesel', ru: 'Дизель' },
    Hybrid: { cs: 'Hybrid', en: 'Hybrid', de: 'Hybrid', ru: 'Гибрид' },
    'Plug-in': { cs: 'Plug-in hybrid', en: 'Plug-in hybrid', de: 'Plug-in-Hybrid', ru: 'Подключаемый гибрид' },
    Elektro: { cs: 'Elektro', en: 'Electric', de: 'Elektro', ru: 'Электро' },
    Automat: { cs: 'Automat', en: 'Automatic', de: 'Automatik', ru: 'Автомат' },
    Manuál: { cs: 'Manuál', en: 'Manual', de: 'Schaltgetriebe', ru: 'Механика' },
    Černá: { cs: 'Černá', en: 'Black', de: 'Schwarz', ru: 'Чёрный' },
    Bílá: { cs: 'Bílá', en: 'White', de: 'Weiß', ru: 'Белый' },
    Šedá: { cs: 'Šedá', en: 'Grey', de: 'Grau', ru: 'Серый' }
  };
  return values[value]?.[lang] || value || '—';
}

function renderCatalog(cars, lang) {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;
  const t = TEXT[lang];
  const params = getParams();
  const brand = (params.get('brand') || '').trim().toLowerCase();
  const model = (params.get('model') || '').trim().toLowerCase();

  const filtered = cars.filter((car) => {
    const brandOk = !brand || String(car.brand || '').toLowerCase() === brand;
    const modelOk = !model || String(car.model || '').toLowerCase() === model;
    return brandOk && modelOk;
  });

  const title = document.getElementById('catalogTitle');
  if (title && (brand || model)) {
    title.textContent = [params.get('brand') || '', params.get('model') || ''].filter(Boolean).join(' ');
  }

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><h3>${t.emptyTitle}</h3><p>${t.emptyText}</p><a class="btn btn-primary" href="${homeFile(lang)}#request">${t.requestOffer}</a></div>`;
    return;
  }

  grid.innerHTML = filtered.map((car) => {
    const detailUrl = localizedUrl(`detail.html?id=${encodeURIComponent(car.id)}`, lang);
    const message = encodeURIComponent(`${t.interest} ${car.brand} ${car.model}`);
    return `
      <article class="car-card">
        <a class="car-photo" href="${detailUrl}">
          <img class="${car.photoFit === 'contain' ? 'car-photo-contain' : ''}" src="${car.mainPhoto}" alt="${car.brand} ${car.model}">
          ${car.top ? '<span class="badge badge-gold">TOP</span>' : ''}
          <span class="badge badge-status">${translateStatus(car.status, lang) || t.statusForSale}</span>
        </a>
        <div class="car-content">
          <div class="car-heading">
            <div><small>${car.brand}</small><h3>${car.model}</h3></div>
            <strong>${formatPrice(car.price, lang)}</strong>
          </div>
          <p>${car.trim || ''}</p>
          <div class="car-specs">
            <span><b>${t.specs.year}</b>${car.year || '—'}</span>
            <span><b>${t.specs.mileage}</b>${formatMileage(car.mileage, lang)}</span>
            <span><b>${t.specs.engine}</b>${car.engine || '—'}</span>
            <span><b>${t.specs.fuel}</b>${translateValue(car.fuel, lang)}</span>
          </div>
          <div class="car-actions">
            <a class="btn btn-primary" href="${detailUrl}">${t.vehicleDetail}</a>
            <a class="btn btn-ghost" href="https://wa.me/420777399799?text=${message}">WhatsApp</a>
          </div>
        </div>
      </article>`;
  }).join('');
}

function renderHomeCars(cars, lang) {
  const section = document.getElementById('models');
  if (!section || !cars.length) return;
  const t = TEXT[lang];
  const grid = section.querySelector('.models');
  if (!grid) return;
  const heading = section.querySelector('.section-head h2');
  if (heading) heading.textContent = `${t.modelsTitle} — ${cars.length}`;
  grid.classList.add('featured-models');
  grid.innerHTML = cars.map((car) => {
    const detailUrl = localizedUrl(`detail.html?id=${encodeURIComponent(car.id)}`, lang);
    return `<article class="car-card home-car-card">
      <a class="car-photo" href="${detailUrl}"><img class="${car.photoFit === 'contain' ? 'car-photo-contain' : ''}" src="${car.mainPhoto}" alt="${car.brand} ${car.model}"><span class="badge badge-status">${translateStatus(car.status, lang) || t.statusForSale}</span></a>
      <div class="car-content"><div class="car-heading"><div><small>${car.brand}</small><h3>${car.model}</h3></div><strong>${formatPrice(car.price, lang)}</strong></div>
      <div class="car-specs"><span><b>${t.specs.year}</b>${car.year}</span><span><b>${t.specs.mileage}</b>${formatMileage(car.mileage, lang)}</span></div>
      <a class="btn btn-primary home-detail-button" href="${detailUrl}">${t.vehicleDetail}</a></div>
    </article>`;
  }).join('');
}

function renderDetail(cars, lang) {
  const root = document.getElementById('detailRoot');
  if (!root) return;
  const t = TEXT[lang];
  const id = getParams().get('id');
  const car = cars.find((item) => String(item.id) === String(id)) || cars[0];
  const catalogUrl = localizedUrl('catalog.html', lang);

  if (!car) {
    root.innerHTML = `<div class="empty-state"><h3>${t.notFound}</h3><a class="btn btn-primary" href="${catalogUrl}">${t.backCatalog}</a></div>`;
    return;
  }

  document.title = `${car.brand} ${car.model} | LUXES EXECUTIVE`;
  const gallery = Array.isArray(car.gallery) && car.gallery.length ? car.gallery : [car.mainPhoto];
  const message = encodeURIComponent(`${t.interest} ${car.brand} ${car.model}`);
  root.innerHTML = `
    <a class="back-link" href="${catalogUrl}">${t.backCatalogArrow}</a>
    <section class="detail-grid">
      <div class="detail-gallery">
        <img id="mainCarPhoto" class="detail-main-photo ${car.photoFit === 'contain' ? 'detail-photo-contain' : ''}" src="${gallery[0]}" alt="${car.brand} ${car.model}">
        <div class="thumb-grid">
          ${gallery.map((photo, index) => `<button class="thumb ${index === 0 ? 'active' : ''}" type="button" data-photo="${photo}"><img src="${photo}" alt="${t.photo} ${index + 1}"></button>`).join('')}
        </div>
      </div>
      <aside class="detail-card">
        <small>LUXES EXECUTIVE</small>
        <h1>${car.brand} ${car.model}</h1>
        <p>${car.trim || ''}</p>
        <div class="detail-price">${formatPrice(car.price, lang)}</div>
        <div class="detail-specs">
          <span><b>${t.specs.year}</b>${car.year || '—'}</span>
          <span><b>${t.specs.mileage}</b>${formatMileage(car.mileage, lang)}</span>
          <span><b>${t.specs.engine}</b>${car.engine || '—'}</span>
          <span><b>${t.specs.gearbox}</b>${translateValue(car.gearbox, lang)}</span>
          <span><b>${t.specs.fuel}</b>${translateValue(car.fuel, lang)}</span>
          <span><b>${t.specs.color}</b>${translateValue(car.color, lang)}</span>
        </div>
        <div class="car-actions">
          <a class="btn btn-primary" href="tel:+420777399799">${t.call}</a>
          <a class="btn btn-ghost" href="https://wa.me/420777399799?text=${message}">WhatsApp</a>
        </div>
      </aside>
    </section>`;

  root.querySelectorAll('.thumb').forEach((button) => {
    button.addEventListener('click', () => {
      const main = document.getElementById('mainCarPhoto');
      if (main) main.src = button.dataset.photo || car.mainPhoto;
      root.querySelectorAll('.thumb').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
    });
  });
}
