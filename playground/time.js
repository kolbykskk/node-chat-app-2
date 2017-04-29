var moment = require('moment');

var date = moment(createdAt);

// console.log(date.format('MMM Do, YYYY'));

var createdAt = 1234;
date.add(5, 'hours')
console.log(date.format('h:mm a'));
