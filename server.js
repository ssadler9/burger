// server for routing and running code in burgers_controllers file
// route to show all, insert and update status of burger
// import model from burger.js
// set and use handlebar views and layouts for styling and HTML
// establish PORT
// need app.set, app.get, app.use, and app.listen routes
var method = require('method-override');
var express = require('express');
var bodyParser = require('body-parser');
var burger = require('./models/burger.js');
var burgerController = require('./controllers/burgers_controller.js');
var PORT = 3000;
console.log('connected on port 3000');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	burger.all(function(data){
		var burgerObject = {
			burgers: data
		};
		console.log(burgerObject);
		res.render('index', burgerObject);
	});
});

app.get('/:burgerId')

app.use('/api/burgers', burgerController);

app.listen(PORT);

