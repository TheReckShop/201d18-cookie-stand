'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var Locations = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];

// This is where I created the constructor for  taking in cookie store info

function CookieStores(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust, randomCustPerHour, totalCookiesSoldPerHour, totalDailyCookieSales) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randomCustPerHour = [];
  this.totalCookiesSoldPerHour = [];
  this.totalDailyCookieSales = 0;
};

// adding Method for getting random customers per hour to CookieStores object
CookieStores.prototype.calcRandomCustPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    console.log(this.randomCustPerHour);
  }
};

CookieStores.prototype.calcTotalCookiesSoldPerHour = function() {
  this.calcRandomCustPerHour();
  for (var i = 0; i < hours.length; i++) {
    this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randomCustPerHour[i]));
    // console.log(this.totalCookiesSoldPerHour[i]);
    this.totalDailyCookieSales += this.totalCookiesSoldPerHour[i];
    console.log(this.totalDailyCookieSales);
  }
  console.log(this.totalCookiesSoldPerHour);
};

CookieStores.prototype.renderFirst = function () {
  this.calcTotalCookiesSoldPerHour();
  var emptyUL = document.getElementById('pike-row');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = this.totalCookiesSoldPerHour[i];
    emptyUL.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = this.totalDailyCookieSales;
  emptyUL.appendChild(liEl);
};

CookieStores.prototype.renderSeaTac = function () {
  this.calcTotalCookiesSoldPerHour();
  var emptyUL = document.getElementById('seatac-airport');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
    emptyUL.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = this.totalDailyCookieSales;
  emptyUL.appendChild(liEl);
};

CookieStores.prototype.renderSeaCenter = function () {
  this.calcTotalCookiesSoldPerHour();
  var emptyUL = document.getElementById('seattle-center');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
    emptyUL.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = 'Total ' + this.totalDailyCookieSales + ' cookies';
  emptyUL.appendChild(liEl);
};

CookieStores.prototype.renderCapital = function () {
  this.calcTotalCookiesSoldPerHour();
  var emptyUL = document.getElementById('capital-hill');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
    emptyUL.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = 'Total ' + this.totalDailyCookieSales + ' cookies';
  emptyUL.appendChild(liEl);
};

CookieStores.prototype.renderAlki = function () {
  this.calcTotalCookiesSoldPerHour();
  var emptyUL = document.getElementById('alki-table');
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = this.totalCookiesSoldPerHour[i];
    emptyUL.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = this.totalDailyCookieSales;
  emptyUL.appendChild(liEl);
};
// var tableHead = function() {
//   var tableHeader = document.getElementById('cookie-table');
//   for (var i = 0; i < 14; i++) {
//     var liEl = document.createElement('th');
//     liEl.textContent = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//     tableHeader.appendChild(liEl);
//   }
// };
// tableHead();
var firstAndPikeStore = new CookieStores('First And Pike', 23, 65, 6.3);
var seaTacAirportStore = new CookieStores('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new CookieStores('Seattle Center', 11, 38, 3.7);
var capitalHillStore = new CookieStores('Capital Hill', 20, 38, 2.3);
var alkiStore = new CookieStores('Alki', 2, 16, 4.6);

firstAndPikeStore.calcRandomCustPerHour();
firstAndPikeStore.calcTotalCookiesSoldPerHour();
firstAndPikeStore.renderFirst();
seaTacAirportStore.calcRandomCustPerHour();
seaTacAirportStore.calcTotalCookiesSoldPerHour();
// seaTacAirportStore.renderSeaTac();
seattleCenterStore.calcRandomCustPerHour();
seattleCenterStore.calcTotalCookiesSoldPerHour();
// seattleCenterStore.renderSeaCenter();
capitalHillStore.calcRandomCustPerHour();
capitalHillStore.calcTotalCookiesSoldPerHour();
// capitalHillStore.renderCapital();
alkiStore.calcRandomCustPerHour();
alkiStore.calcTotalCookiesSoldPerHour();
// alkiStore.renderAlki();
//
// var alki = {
//   locationName: 'Alki',
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookiesPerCust: 4.6,
//   randomCustPerHour: [],
//   totalCookiesSoldPerHour: [],
//   totalDailyCookieSales: 0,
//   calcRandomCustPerHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randomCustPerHour);
//     }
//   },
//   calcTotalCookiesSoldPerHour: function() {
//     this.calcRandomCustPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randomCustPerHour[i]));
//       // console.log(this.totalCookiesSoldPerHour[i]);
//       this.totalDailyCookieSales += this.totalCookiesSoldPerHour[i];
//       console.log(this.totalDailyCookieSales);
//     }
//     console.log(this.totalCookiesSoldPerHour);
//   },
//   render: function () {
//     this.calcTotalCookiesSoldPerHour();
//     var emptyUL = document.getElementById('alki');
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
//       emptyUL.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total ' + this.totalDailyCookieSales + ' cookies';
//     emptyUL.appendChild(liEl);
//   }
// };
// alki.render();
