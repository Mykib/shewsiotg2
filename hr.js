const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');


app.get('/', function(req,res) {
  res.render('main');
});

app.listen(app.get('port'), function() {
  console.log( 'Express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
});
