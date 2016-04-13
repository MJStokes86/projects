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
app.use(bodyParser.urlencoded({extended: true}));
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

});

app.post('/topics/new', function(req, res){
	console.log(req.body);
	db.run("INSERT INTO topics(title, creator, date, body) VALUES ('" + req.body.title + "','" + req.body.creator + "','" + req.body.date + "','" + req.body.body + "')");
	res.redirect("/topics")
});





app.get('/topics/:id/comments/new', function(req, res)
{
	var id = req.params.id
	res.locals.id = id
	console.log(res.locals.id)

	var template = fs.readFileSync('./views/comments/newComment.html', 'utf8')

	// db.all("SELECT * FROM topics;", function(err, topics) {


		db.all("SELECT * FROM comments where topic_id= " + id + ";", function(err, comments){
		
	var html = Mustache.render(template, { id:id})
	res.send(html);
	

// });

	
		
	
	});	


});


app.post('/topics/:id/comments/new', function(req, res){
	var id = req.params.id
	res.locals.id = id

	console.log(id)
	console.log(req.body.topic_id)
	
	
	
	
	db.run("INSERT INTO comments (person_created, input, topic_id) VALUES ('" + req.body.person_created + "','" + req.body.input + "', '" + id + "')", function(error){ 





		
		if (error) {
			console.log('Error')
		}

		else {
			console.log('Success')
		}

		console.log(req.body)


	});

	res.redirect("/topics/" + id + "/comments")

});
	



app.get('/topics/:id/comments', function(req, res){
var id = req.params.id;
console.log(id)

  
    db.all("SELECT * FROM topics WHERE id = " + id + ";", {}, function(err, topics){
    	console.log(topics)

    	


    	
	    db.all("SELECT * FROM comments WHERE topic_id = " + id + ";", {}, function(err, comments){



	   
	     fs.readFile('./views/topics/show.html', 'utf8', function(err, html){
	        var renderedHTML = Mustache.render(html, {body:topics, person_created:comments, input:comments, form:topics});
	        res.send(renderedHTML);
	        console.log(comments);
	       
	   

	       
	  
	    });
	    });
	});
});



app.listen(3000, function(){
	console.log("LISTENING!");
});