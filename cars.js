// ... tady končí předchozí auto v seznamu, dáš za něj čárku ,
  {
    id: "porsche-911",                       // Unikátní ID auta (bez mezer a diakritiky)
    brand: "Porsche",                        // Značka
    model: "911 Carrera",                    // Model
    year: 2024,                              // Rok výroby
    price: 145000,                           // Cena v eurech (čisté číslo bez mezer)
    mileage: 500,                            // Najeté kilometry
    engine: "3.0 H6",                        // Motor
    fuel: "Benzin",                          // Palivo
    gearbox: "Automat",                      // Převodovka
    color: "Šedá",                           // Barva
    trim: "Carrera S",                       // Výbava
    status: "V prodeji",                     // Status
    top: true,                               // Chceš ho na hlavní stránce? (true = ano, false = ne)
    mainPhoto: "assets/porsche.jpg",         // Cesta k hlavní fotce
    gallery: [                               // Cesty k fotkám v galerii
      "assets/porsche.jpg",
      "assets/porsche-side.jpg",
      "assets/porsche-back.jpg"
    ]
  }
]; // Tímto soubor cars.js končí