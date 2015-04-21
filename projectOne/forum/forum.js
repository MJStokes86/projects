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

app.get('/', function(req, res){
	res.send(fs.readFileSync('./views/topics/index.html', 'utf8'));

});
app.get('/topics', function(req,res) {
	var template = fs.readFileSync('./views/topics/topics.html', 'utf8');

	db.all("SELECT * FROM topics;", function(err, topics){
		var html = Mustache.render(template, {listoftopics: topics});
		res.send(html);
	});
});


app.get('/topics/new',  function(req, res){
	res.send(fs.readFileSync('./views/topics/new.html', 'utf8'));

})

app.post('/topics/new', function(req, res){
	console.log(req.body);
	db.run("INSERT INTO topics(title, creator, date, body) VALUES ('" + req.body.title + "','" + req.body.creator + "','" + req.body.date + "','" + req.body.body + "')");
	res.redirect("/topics")
})





app.get('/comments/new', function(req, res){
	res.send(fs.readFileSync('./views/comments/newComment.html', 'utf8'));
})

app.post('/comments/new', function(req, res){
	console.log(req.body);
	db.run("INSERT INTO comments(person_created, input) VALUES ('" + req.body.name + "','" + req.body.comment + "')");
	res.redirect("/topics")
})

app.get('/topics/:id', function(req, res){
    var id = req.params.id;
   



  
    db.all("SELECT * FROM topics WHERE id = " + id + ";", {}, function(err, topic){
    	console.log(topic)
	    db.all("SELECT * FROM comments;", {}, function(err, comment){
	    	// console.log(id)
	    	// console.log(topic);
	     //     console.log(comment);
	    fs.readFile('./views/topics/show.html', 'utf8', function(err, html){
	        var renderedHTML = Mustache.render(html, {body:topic, person_created:comment, input:comment});
	        res.send(renderedHTML);
	        console.log(comment)
	  
	    })
	    });
	});
});

app.listen(3000, function(){
	console.log("LISTENING!");
})