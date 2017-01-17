var tableData = [['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], [], [], [] ];

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var tableEl = getElementsById('cookie-table');

for(var i = 0; i < tableData.length; i++ ) {
  var rowData = tableData[i];

  var rowEl = document.createElement('tr');
  for(var j = 0; j < rowData.Length; j++) {
    var content = rowData[j];
    var dataEl = document.createElement('td');

    dataEl.textContent = content;
    rowEl.appendChild(dateEl);
  }
  tableEl.appendChild(rowEl);
}
