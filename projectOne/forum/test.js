var express = require('express');
var sqlite3 = require('sqlite3');
var fs = require('fs');
var Mustache = require ('mustache');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = new sqlite3.Database('./forum.db');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));





app.get('/topics/:id', function(req, res){
	var id = req.params.id;
	db.all("SELECT * FROM topics WHERE id = " + id + ";", {}, function(err, body){
	db.all("SELECT * FROM comments WHERE  input = " + id + ";", {}, function(err, comments){
	fs.readFile('./views/topics/show.html', 'utf8', function(err, html){
		var renderedHTML = Mustache.render(html, body[0], comments[0]);
		res.send(renderedHTML);
		console.log(comments);
	})
	});
})
	

})

app.listen(3000, function(){
	console.log("LISTENING!");
})