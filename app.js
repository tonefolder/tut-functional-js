var beer = new Beer(),
    beers = beer.list,
    beerTemplate = document.getElementById("tmpl-beer").textContent,
    beerList = document.getElementById("beerList"),
    filters = document.getElementById("filters"),
    filterLinks = filters.querySelectorAll("a");

filters.addEventListener('click', function (e) {
  e.preventDefault();
  var clicked = e.target;

  if (clicked.dataset.hasOwnProperty('filter')) {
    var filter = JSON.parse(clicked.dataset.filter),
        filteredBeers = filter === 'all' ? beers : filterBeers(beers, filter);

    beer.loadBeers(beerList, beerTemplate, filteredBeers);
    setActiveFilter(clicked);
  }
});

beer.loadBeers(beerList, beerTemplate, beers);

function filterBeers(data, query) {
  var filteredData = [];

  if (query === 'domestic' || query === 'import') {
    for (i=0; i<data.length; i++) {
      if (data[i].locale === query) {
        filteredData.push(data[i]);
      }
    }
  } else {
    for (var i=0; i<data.length; i++) {
      if (compareTypes(data[i], query)) {
        filteredData.push(data[i]);
      }
    }
  }
  return filteredData;
}

function compareTypes(item, value) {
  if (!Array.isArray(value)) {
    return item.type === value;
  }
  for (var i=0; i<value.length; i++) {
    if (item.type === value[i]) {
      return true;
    }
  }
  return false;
}

function makeFilter(property, callback) {
  return function (value) {
    return callback(property, value);
  }
}

function setActiveFilter(active) {
  for (var i=0; i<filterLinks.length; i++) {
    filterLinks[i].classList.remove('btn-active');
  }
  active.classList.add('btn-active');
}
