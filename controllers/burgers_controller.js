// require functions and files needed
// created routes needed to play game
// will need home post and put routes.  These will need route directory and directory for specific id(/:id)
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.post('/', function(req, res) {
	burger.create([
		'burger_name', 'devour'
		], [
		  req.body.burger_name, req.body.devoured
		], function(result) {
			res.json({ id: result.insertId })
		})
});

router.put('/:id', function(req, res){
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.update({
		devour: req.body.devoured
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