var express = require('express');
var join = require('path').join;
var app = express();
app.use(express.static(join(__dirname, "..", "/dist")));
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
