var express = require('express');
var router = express.Router();



/* model test */
var model = require('../model/data');

var mylist = [{label: "one", num: 1},{label: "two", num: 2},{num: 3}] ;

/* GET home page. */
router.get('/', function(req, res, next) {
	
	// model getdata
	model.getData(mylist);
	
	res.render('index', { title: 'Express' });

});

module.exports = router;
