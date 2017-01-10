'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  averageCookieSales: 6.3,
  randomCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    for (var index = 0; index < hours.length; index++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randomCustPerHour);
    }
    return this.randomCustPerHour;
  },
  calcTotalCookiesSoldPerHour: function() {

  }
};
