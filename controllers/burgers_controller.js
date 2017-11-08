// require functions and files needed
// created routes needed to play game
// will need home post and put routes.  These will need route directory and directory for specific id(/:id)
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req, res){
	burger.all(function(data){
		var burgerObject = {
			burgers: data
		};
		console.log(burgerObject);
		res.render('index', burgerObject);
	});
});
// new burger posting
router.post('/', function(req, res) {
	burger.insert([
		'burger_name'
		], [
		  req.body.burgers
		], function(result) {
			res.json({ id: result.insertId })
		})
});
// update burger postings
router.put('/:id', function(req, res){
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);
	console.log(req.body);
	burger.update({
		devoured: req.body.devoured
	}, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// export route
module.exports = router;