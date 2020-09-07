

// get times from moment
var moment = require('moment'); // require
moment().format();

const now = moment().format('MMMM Do YYYY');

// commented out for test in non-standard hours
let nowHour24 = moment().format('H');
let nowHour12 = moment().format('h');

// set times for tesitng after hours
if (test) {
  nowHour24 = 13;
  nowHour12 = 1;
}

let $dateHeading = $('#navbar-subtitle');
$dateHeading.text(now);

// // build row components
// let $rowDiv = $('<div>');
// $rowDiv.addClass('row');
// $rowDiv.addClass('plannerRow');
// $rowDiv.attr('hour-index',hour);



// possible to do the entire week.
// array.splice(start, deleteCount)
// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//  days.splice(2, 3);
// // => ["Wed", "Thu", "Fri"] 
// * days;
// * // => ["Mon", "Tue", "Sat", "Sun"]


document.querySelector("#saveid-0")