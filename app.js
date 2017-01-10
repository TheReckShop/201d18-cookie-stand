'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randomCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randomCustPerHour);
    }
  },
  calcTotalCookiesSoldPerHour: function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randomCustPerHour[i]));
      // console.log(this.totalCookiesSoldPerHour[i]);
      this.totalDailyCookieSales += this.totalCookiesSoldPerHour[i];
      console.log(this.totalDailyCookieSales);
    }
    console.log(this.totalCookiesSoldPerHour);
  },
  render: function () {
    this.calcTotalCookiesSoldPerHour();
    var emptyUL = document.getElementById('first-and-pike');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
      emptyUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalDailyCookieSales + ' cookies';
    emptyUL.appendChild(liEl);
  }
};
firstAndPike.render();

var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  randomCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    for (i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randomCustPerHour);
    }
  },
  calcTotalCookiesSoldPerHour: function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randomCustPerHour[i]));
      // console.log(this.totalCookiesSoldPerHour[i]);
      this.totalDailyCookieSales += this.totalCookiesSoldPerHour[i];
      console.log(this.totalDailyCookieSales);
    }
    console.log(this.totalCookiesSoldPerHour);
  },
  render: function () {
    this.calcTotalCookiesSoldPerHour();
    var emptyUL = document.getElementById('seatac-airport');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
      emptyUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalDailyCookieSales + ' cookies';
    emptyUL.appendChild(liEl);
  }
};
seaTacAirport.render();
