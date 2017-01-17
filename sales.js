'use strict';

// var tableData =  [firstAndPikeStore.totalCookiesSoldPerHour, seaTacAirportStore.totalCookiesSoldPerHour, seattleCenterStore.totalCookiesSoldPerHour, capitalHillStore.totalCookiesSoldPerHour, alkiStore.totalCookiesSoldPerHour];

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

var Locations = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];

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

CookieStores.prototype.totalDailyCookieSales = function() {
  var x = 0;
  for(var i = 0; i < this.totalCookiesSoldPerHour; i++) {
    this.totalDailyCookieSales.push(x += this.totalCookiesSoldPerHour[i]);
  };
  totals.push(x);
  console.log(totals);
};
var renderTable;

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
firstAndPikeStore.totalDailyCookieSales();
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
