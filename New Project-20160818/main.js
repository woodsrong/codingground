var schedule = require('node-schedule');

var j = schedule.scheduleJob('*/1 * * * *', function(){
  console.log(new Date().getSecond());
});
