fs = require('fs')

var max = 1

fs.readFile("quick-start-raw.json", function(err,data) {
  var j = JSON.parse(data)

  j.stdout.forEach(f => {
    f[0] = Math.min(f[0],max)
  });

  console.log(JSON.stringify(j,null,4))
});
