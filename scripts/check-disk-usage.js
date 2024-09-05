// check-disk-usage.js
const disk = require('diskusage');

disk.check('/', function(err, info) {
  if (err) {
    console.log(err);
  } else {
    const usedPercentage = (info.total - info.free) / info.total * 100;
    console.log(`Disk usage: ${usedPercentage.toFixed(2)}%`);
    if (usedPercentage > 90) {
      console.log('Warning: Disk usage is above 90%!');
    }
  }
});