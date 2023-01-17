var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// importing the routers
const signUpRouter = require('./router/signup')

app.get('/', function (req, res) {
 res.send({
  "Welcome":"You are welcome comrade"
 })
});

// middlewares
app.use('/',signUpRouter)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});