'use strict';

<<<<<<< HEAD:sales.js
// var tableData =  [firstAndPikeStore.totalCookiesSoldPerHour, seaTacAirportStore.totalCookiesSoldPerHour, seattleCenterStore.totalCookiesSoldPerHour, capitalHillStore.totalCookiesSoldPerHour, alkiStore.totalCookiesSoldPerHour];

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
=======
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
>>>>>>> 147338589de5a90729e419708a431b231d5804f1:app.js

var dailyTotal = [];

var locations = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki', 'Totals'];

var headerLocations = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Totals'];

var totals = [];
// This is where I created the constructor for  taking in cookie store info

function CookieStores(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust, randomCustPerHour, totalCookiesSoldPerHour, totalDailyCookieSales) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randomCustPerHour = [];
  this.totalCookiesSoldPerHour = [];
  // this.totalDailyCookieSales = 0;
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
  }
  console.log(this.totalCookiesSoldPerHour);
};

<<<<<<< HEAD:sales.js
CookieStores.prototype.totalDailyCookieSales = function() {
  var x = 0;
  for(var i = 0; i < this.totalCookiesSoldPerHour; i++) {
    this.totalDailyCookieSales.push(x += this.totalCookiesSoldPerHour[i]);
  };
  totals.push(x);
  console.log(totals);
=======
CookieStores.prototype.renderFirst = function () {
  this.calcTotalCookiesSoldPerHour();
  var emptyUL = document.getElementById('pike-row');
  var tHead = document.createElement('th');
  emptyUL.appendChild(tHead);
  tHead.textContent = locations[0];
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = this.totalCookiesSoldPerHour[i];
    emptyUL.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = this.totalDailyCookieSales;
  emptyUL.appendChild(liEl);
>>>>>>> 147338589de5a90729e419708a431b231d5804f1:app.js
};
var renderTable;

<<<<<<< HEAD:sales.js
renderTable = function() {
  var tableEl = document.getElementById('cookie-table');

  for(var index = 0; index < hours.length; index++) {
    var headData = hours[index];
    var headEl = document.createElement('th');
    headEl.textContent = headData;
    console.log(headEl);
    tableEl.appendChild(headEl);
  }

  // for(var i = 0; i < tableData.length; i++ ) {
  //   var rowData = tableData[i];
  //   var rowEl = document.createElement('tr');
  //   for(var j = 0; j < rowData.Length; j++) {
  //     var content = rowData[j];
  //     var dataEl = document.createElement('td');
  //     dataEl.textContent = content;
  //     rowEl.appendChild(dataEl);
  //   }
  //   tableEl.appendChild(rowEl);
  // }
};

renderTable();
// CookieStores.prototype.tableRender = function() {
//   var tableEl = document.getElementById('cookie-table');
//
//   for(var i = 0; i < tableData.length; i++ ) {
//     var rowData = tableData[i];
//
//     var rowEl = document.createElement('tr');
//     for(var j = 0; j < rowData.Length; j++) {
//       var content = rowData[j];
//       var dataEl = document.createElement('td');
//
//       dataEl.textContent = content;
//       rowEl.appendChild(dataEl);
//     }
//     tableEl.appendChild(rowEl);
//   }
// };
=======
CookieStores.prototype.renderSeaTac = function () {
  this.calcTotalCookiesSoldPerHour();
  var emptyUL = document.getElementById('seatac-airport');
  var tHead = document.createElement('th');
  emptyUL.appendChild(tHead);
  tHead.textContent = locations[1];
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = this.totalCookiesSoldPerHour[i];
    emptyUL.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = this.totalDailyCookieSales;
  emptyUL.appendChild(liEl);
};

CookieStores.prototype.renderSeaCenter = function () {
  this.calcTotalCookiesSoldPerHour();
  var emptyUL = document.getElementById('seattle-center');
  var tHead = document.createElement('th');
  emptyUL.appendChild(tHead);
  tHead.textContent = locations[2];
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = this.totalCookiesSoldPerHour[i];
    emptyUL.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = this.totalDailyCookieSales;
  emptyUL.appendChild(liEl);
};

CookieStores.prototype.renderCapital = function () {
  this.calcTotalCookiesSoldPerHour();
  var emptyUL = document.getElementById('capital-hill');
  var tHead = document.createElement('th');
  emptyUL.appendChild(tHead);
  tHead.textContent = locations[3];
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = this.totalCookiesSoldPerHour[i];
    emptyUL.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = this.totalDailyCookieSales;
  emptyUL.appendChild(liEl);
};

CookieStores.prototype.renderAlki = function () {
  this.calcTotalCookiesSoldPerHour();
  var emptyUL = document.getElementById('alki-table');
  var tHead = document.createElement('th');
  emptyUL.appendChild(tHead);
  tHead.textContent = locations[4];
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = this.totalCookiesSoldPerHour[i];
    emptyUL.appendChild(liEl);
  }
  liEl = document.createElement('td');
  liEl.textContent = this.totalDailyCookieSales;
  emptyUL.appendChild(liEl);
};
>>>>>>> 147338589de5a90729e419708a431b231d5804f1:app.js

var tableHead = function() {
  var tableHeader = document.getElementById('header-row');
  for (var i = -1; i < headerLocations.length; i++) {
    var liEl = document.createElement('th');
    liEl.textContent = headerLocations[i];
    tableHeader.appendChild(liEl);
  }
};

var tableFoot = function() {
  var tableFooterEl = document.getElementById('footer-row');
  var tHead = document.createElement('th');
  tableFooterEl.appendChild(tHead);
  tHead.textContent = locations[5];
  for (var i = -1; i < hours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = 'total';
    tableFooterEl.appendChild(liEl);
  }
};
tableHead();
var firstAndPikeStore = new CookieStores('First And Pike', 23, 65, 6.3);
var seaTacAirportStore = new CookieStores('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new CookieStores('Seattle Center', 11, 38, 3.7);
var capitalHillStore = new CookieStores('Capital Hill', 20, 38, 2.3);
var alkiStore = new CookieStores('Alki', 2, 16, 4.6);

firstAndPikeStore.calcRandomCustPerHour();
firstAndPikeStore.calcTotalCookiesSoldPerHour();
// firstAndPikeStore.tableRender();
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
<<<<<<< HEAD:sales.js
firstAndPikeStore.totalDailyCookieSales();
// alkiStore.renderAlki();
=======
alkiStore.renderAlki();
tableFoot();
>>>>>>> 147338589de5a90729e419708a431b231d5804f1:app.js
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
