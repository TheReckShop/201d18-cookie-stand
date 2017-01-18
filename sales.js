'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var dailyTotal = [];

var locations = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki', 'Totals'];

var headerLocations = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Totals'];

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
};

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
firstAndPikeStore.renderFirst();
seaTacAirportStore.calcRandomCustPerHour();
seaTacAirportStore.calcTotalCookiesSoldPerHour();
seaTacAirportStore.renderSeaTac();
seattleCenterStore.calcRandomCustPerHour();
seattleCenterStore.calcTotalCookiesSoldPerHour();
seattleCenterStore.renderSeaCenter();
capitalHillStore.calcRandomCustPerHour();
capitalHillStore.calcTotalCookiesSoldPerHour();
capitalHillStore.renderCapital();
alkiStore.calcRandomCustPerHour();
alkiStore.calcTotalCookiesSoldPerHour();
alkiStore.renderAlki();
tableFoot();
