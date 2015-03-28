var beerData = new Beer();
var beerTemplate = document.getElementById("tmpl-beer").textContent;
var beerList = document.getElementById("beerList");
var filters = document.getElementById("filters");
var filterLinks = filters.querySelectorAll("a");

beerList.innerHTML = _.template(beerTemplate)(beerData);

filters.addEventListener('click', function (e) {
  e.preventDefault();
  var beers = beerData.beers;
  var clicked = e.target;

  if (clicked.dataset.hasOwnProperty('filter')) {
    var filter = JSON.parse(clicked.dataset.filter);
    var filteredBeers = filter === 'all' ? beers : filterBeers(beers, filter);

    loadBeers(beerList, beerTemplate, filteredBeers);
    setActiveFilter(clicked);
  }
});

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

// var makeDescription = makeFilter('description', function (prop, value) {
//   var retVal = {};
//   retVal[prop] = value;
//   return retVal;
// });

function loadBeers(list, template, data) {
  list.innerHTML = _.template(template)({ beers: data });
}

function setActiveFilter(active) {
  for (var i=0; i<filterLinks.length; i++) {
    filterLinks[i].classList.remove('btn-active');
  }
  active.classList.add('btn-active');
}
