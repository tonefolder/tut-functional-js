var Beer = function () {
    this.list = [
        {
          "name": "Bitter Hop",
          "type": "ipa",
          "locale": "domestic",
          "abv": 7.9
        },
        {
          "name": "Dragonblood Black IPA",
          "type": "ipa",
          "locale": "domestic",
          "abv": 6.5
        },
        {
          "name": "Good Dog Lager",
          "type": "lager",
          "locale": "domestic",
          "abv": 4.8
        },
        {
          "name": "Good Dog Snowpants",
          "type": "stout",
          "locale": "domestic",
          "abv": 8.1
        },
        {
          "name": "Lake Erie 2x IPA",
          "type": "ipa",
          "locale": "domestic",
          "abv": 9.3
        },
        {
          "name": "Lake Erie Session",
          "type": "ale",
          "locale": "domestic",
          "abv": 4.2
        },
        {
          "name": "Samwell British Pale Ale",
          "type": "ale",
          "locale": "import",
          "abv": 6.5
        },
        {
          "name": "Samwell Oatmeal Stout",
          "type": "stout",
          "locale": "import",
          "abv": 5.5
        },
        {
          "name": "Samwell Winter Ale",
          "type": "ale",
          "locale": "import",
          "abv": 6.8
        },
        {
          "name": "Sparkwood Beer Five",
          "type": "lager",
          "locale": "domestic",
          "abv": 6.2
        },
        {
          "name": "Sparkwood Campfire Lager",
          "type": "lager",
          "locale": "domestic",
          "abv": 5.8
        },
        {
          "name": "Tartan Scottish Ale",
          "type": "ale",
          "locale": "import",
          "abv": 7.5
        },
        {
          "name": "Brother Adam’s Bragget Honey Ale",
          "type": "braggot",
          "locale": "domestic",
          "abv":  11.8
        },
        {
          "name": "Kuhnhenn Bourbon Barrel Braggot",
          "type": "braggot",
          "locale": "domestic",
          "abv":  16.0
        },
        {
          "name": "Sahti (Nøgne Ø)",
          "type": "sahti",
          "locale":"import",
          "abv":  11.0
        },
        {
          "name": "Sam Adams Norse Legend",
          "type": "sahti",
          "locale": "domestic",
          "abv":  7.0
        },
        {
          "name": "Sah’tea (Dogfish Head)",
          "type": "sahti",
          "locale": "domestic",
          "abv":  9.0
        },
        {
          "name": "Saison Dupont",
          "type": "belgian",
          "locale": "import",
          "abv":  6.5
        },
        {
          "name": "La Fin Du Monde",
          "type": "import",
          "locale": "domestic",
          "abv":  9.0
        },
        {
          "name": "Brother David's Belgian-style Double Ale",
          "type": "belgian",
          "locale": "domestic",
          "abv":  9.0
        },
        {
          "name": "Ommegang (Abbey Ale)",
          "type": "belgian",
          "locale": "domestic",
          "abv":  8.2
        },
        {
          "name": "Chimay Première (Red)",
          "type": "belgian",
          "locale": "import",
          "abv":  7.0
        },
        {
          "name": "Schramm’s The Heart of Darkness",
          "type": "mead",
          "locale": "domestic",
          "abv":  14.0
        }
    ];
};

Beer.prototype.loadBeers = function (element, template, collection) {
  element.innerHTML = _.template(template)({ beers: collection });
};
