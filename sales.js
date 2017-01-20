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
    console.log('random cust' + this.randomCustPerHour);
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
    var hoursToats = [tdEl.textContent];
    console.log(hoursToats);
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
tableHead();

function tableFoot() {
  var tableFooterEl = document.getElementById('footer-row');
  var tHead = document.createElement('th');
  tableFooterEl.appendChild(tHead);
  tHead.textContent = locations[5];
  var sumTotArray = [];
  for (var i = 0; i < hours.length; i++) {
    var sumTot = 0;
    for (var j = 0; j < hoursCookie.length; j++) {
      sumTot = sumTot + hoursCookie[j].totalCookiesSoldPerHour[i];
    }
    sumTotArray.push(sumTot);
    console.log('sum to array' + sumTotArray);
  };
  var allCookies = 0;
  for (var x = 0; x < sumTotArray.length; x++) {
    var tdEl = document.createElement('td');
    // allCookies += hoursCookie[x].totalDailyCookieSales.pop();
    tdEl.textContent = sumTotArray[x];
    tableFooterEl.appendChild(tdEl);
  };
  sumTotArray.push(allCookies);
  // tdEl.textContent =
  // var totTot = 0;
  // for (var b = 0; b < hoursCookie.length; b++) {
  //   totTot = totTot + hoursCookie[b].totalDailyCookieSales[b];
  // };
  // console.log(totTot);
//   var adEl = document.createElement('td');
//   adEl.textContent = ;
//   tableFooterEl.appendChild(adEl);
};
var formEl = document.getElementById('first-form');
formEl.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();
  var elements = formEl.elements;
  var storename = elements.storename.value;
  var minCust = elements.mincust.value;
  var maxCust = elements.maxCustPerHour.value;
  var avgCust = elements.avgCustPerHour.value;
  console.log('s' + storename);
  console.log('min' + minCust);
  console.log('max' + maxCust);
  console.log('avg' + avgCust);
  var newStore = new CookieStores(storename, minCust, maxCust, avgCust);
  newStore.renderInput();
  // var a = storename;
});
var firstAndPikeStore = new CookieStores('First And Pike', 23, 65, 6.3);
var seaTacAirportStore = new CookieStores('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new CookieStores('Seattle Center', 11, 38, 3.7);
var capitalHillStore = new CookieStores('Capital Hill', 20, 38, 2.3);
var alkiStore = new CookieStores('Alki', 2, 16, 4.6);
var hoursCookie = [firstAndPikeStore, seaTacAirportStore, seattleCenterStore, capitalHillStore, alkiStore];
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
