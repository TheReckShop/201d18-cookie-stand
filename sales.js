'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var dailyTotal = [];

var locations = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki', 'Totals'];
var table = document.getElementById('cookie-table');
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

CookieStores.prototype.renderInput = function() {
  this.calcTotalCookiesSoldPerHour();
  var row = document.createElement('tr');
  // var emptyUL = document.getElementById('input-row');
  var tHead = document.createElement('th');
  tHead.textContent = this.locationName;
  row.appendChild(tHead);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesSoldPerHour[i];
    row.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailyCookieSales;
  row.appendChild(tdEl);
  table.appendChild(row);
};

var tableHead = function() {
  var tableHeader = document.getElementById('header-row');
  for (var i = -1; i < headerLocations.length; i++) {
    var tdEl = document.createElement('th');
    tdEl.textContent = headerLocations[i];
    tableHeader.appendChild(tdEl);
  }
};

var tableFoot = function() {
  var tableFooterEl = document.getElementById('footer-row');
  var tHead = document.createElement('th');
  tableFooterEl.appendChild(tHead);
  tHead.textContent = locations[5];
  for (var i = -1; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = 'total';
    tableFooterEl.appendChild(tdEl);
  }
};
tableHead();
var formEl = document.getElementById('first-form');
formEl.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();
  var elements = formEl.elements;
  var storename = elements.storename.value;
  var minCust = elements.mincust.value;
  var maxCust = elements.maxCustPerHour.value;
  var avgCust = elements.avgCustPerHour.value;
  console.log(storename);
  console.log(minCust);
  var newStore = new CookieStores(storename, minCust, maxCust, avgCust);
  newStore.renderInput();
  // var a = storename;
});
var firstAndPikeStore = new CookieStores('First And Pike', 23, 65, 6.3);
var seaTacAirportStore = new CookieStores('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new CookieStores('Seattle Center', 11, 38, 3.7);
var capitalHillStore = new CookieStores('Capital Hill', 20, 38, 2.3);
var alkiStore = new CookieStores('Alki', 2, 16, 4.6);
// firstAndPikeStore.calcRandomCustPerHour();
// firstAndPikeStore.calcTotalCookiesSoldPerHour();
firstAndPikeStore.renderInput();

// seaTacAirportStore.calcRandomCustPerHour();
// seaTacAirportStore.calcTotalCookiesSoldPerHour();
seaTacAirportStore.renderInput();

// seattleCenterStore.calcRandomCustPerHour();
// seattleCenterStore.calcTotalCookiesSoldPerHour();
seattleCenterStore.renderInput();

// capitalHillStore.calcRandomCustPerHour();
// capitalHillStore.calcTotalCookiesSoldPerHour();
capitalHillStore.renderInput();

// alkiStore.calcRandomCustPerHour();
// alkiStore.calcTotalCookiesSoldPerHour();
alkiStore.renderInput();

tableFoot();
