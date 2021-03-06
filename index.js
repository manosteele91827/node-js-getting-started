var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'uploads/'});
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
// views is directory for all template files
var a = "";

app.post('/',upload.single('picture'), function(request, response) {
  a = request.body + "" + request.file;
  response.end();
});

app.get('/', function(req,res){
  res.send(a);
})
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
