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
app.use(express.static(process.cwd() + '/public'));
app.use('/bower_components', express.static(__dirname +  '/bower_components'));

app.get('/', function(req, res){
	res.send(fs.readFileSync('./views/topics/index.html', 'utf8'));

});
app.get('/topics', function(req,res) {

	var id = req.params.id;
	res.locals.id = id;


	var template = fs.readFileSync('./views/topics/topics.html', 'utf8');

	db.all("SELECT * FROM topics;", function(err, topics){
		var html = Mustache.render(template, {listoftopics: topics, id:id});
		res.send(html);
	});


});


app.get('/topics/new',  function(req, res){
	res.send(fs.readFileSync('./views/topics/new.html', 'utf8'));

});

app.get('/topics/:id', function(req, res){

	var id = req.params.id;
	res.locals.id = id

	db.all("SELECT * FROM topics where id= " + id + ";", {}, function(err, topic){

		fs.readFile('./views/topics/edit.html', 'utf8', function(err, html) {
			console.log(topic)

			var renderedHTML = Mustache.render(html, topic[0]);
			res.send(renderedHTML);
		});

	});
});







app.get('/topics/:id/comments/new', function(req, res)
{
	var id = req.params.id
	res.locals.id = id
	console.log(res.locals.id)

	var template = fs.readFileSync('./views/comments/newComment.html', 'utf8')

	
		db.all("SELECT * FROM comments where topic_id= " + id + ";", function(err, comments){
		
	var html = Mustache.render(template, { id:id})
	res.send(html);
	



	
		
	
	});	


});


app.get('/topics/:id/comments', function(req, res){
var id = req.params.id;
console.log(id)

  
    db.all("SELECT * FROM topics WHERE id = " + id + ";", {}, function(err, topics){
    	console.log(topics)

    	


    	
	    db.all("SELECT * FROM comments WHERE topic_id = " + id + ";", {}, function(err, comments){



	   
	     fs.readFile('./views/topics/show.html', 'utf8', function(err, html){
	        var renderedHTML = Mustache.render(html, {topic:topics, comment:comments,  id:id});
	        res.send(renderedHTML);
	        console.log(comments);
	       
	   

	       
	  
	    });
	    });
	});
});


app.get('/topics/:id/comments/edit', function(req, res){

	var id = req.params.id;
	res.locals.id = id

	console.log(id)

	db.all('SELECT * FROM comments WHERE id= ' + id + ';', {}, function(err, comment){


	
		

		fs.readFile('./views/comments/edit.html', 'utf8', function(err, html){

			
			


			var renderedHTML = Mustache.render(html, comment[0], {id:id});
			res.send(renderedHTML)

		});

		});



});




app.post('/topics/new', function(req, res){
	console.log(req.body);
	db.run("INSERT INTO topics(title, creator, date, body) VALUES ('" + req.body.title + "','" + req.body.creator + "','" + req.body.date + "','" + req.body.body + "')");
	res.redirect("/topics")
});



app.post('/topics/:id/comments/new', function(req, res){
	var id = req.params.id
	res.locals.id = id

	console.log(id)
	console.log(req.body.topic_id)
	
	
	
	
	db.run("INSERT INTO comments (name, input, topic_id) VALUES ('" + req.body.name + "','" + req.body.input + "', '" + id + "')", function(error){ 





		
		if (error) {
			console.log('Error')
		}

		else {
			console.log('Success')
		}

		console.log(req.body)


	});

	res.redirect("/topics")

});

app.put('/topics/:id', function(req, res){
	var id = req.params.id;
	res.locals.id = id


	
	

	var topic = req.body
	console.log(req.body)


	db.run("UPDATE topics SET title =  '" + topic.title + "', creator =  '" + topic.creator + "', date =  '" + topic.date + "', body =  '" + topic.body + "' WHERE id = " + id + ";", function(err, updated){

		if (err) {
			console.log("Error");
		}

		else {
			console.log('Success')
		}



	});

	res.redirect('/topics')


});

app.put('/topics/:id/comments/edit', function(req, res){
	var id = req.params.id;
	
	res.locals.id = id
	

	
	

	var comment = req.body
	console.log(req.body)


	db.run("UPDATE comments SET name =  '" + comment.name + "', input =  '" + comment.input + "' WHERE id = " + id + ";", function(err, updated){

		if (err) {
			console.log("Error");
		}

		else {
			console.log('Success')
		}



	});

	res.redirect('/topics')


});


app.delete('/topics/:id', function(req, res){
	var id = req.params.id;

	db.run('DELETE FROM topics WHERE id=' + id + ';', function(err, success){
		if (err) {
			console.log("Error")
		}
		else {
			console.log('Success')
		}
	});

res.redirect('/topics')
});



app.delete('/topics/:id/comments/edit', function(req, res){

	var id = req.params.id;
	

	db.run("DELETE FROM comments WHERE id=" + id + ";", function(err, success) {

		if (err) {
		console.log('Error')
	}

	else {
		console.log('Success')
	}

	});

	res.redirect('/topics/')


	
	
});



	








app.listen(3000, function(){
	console.log("LISTENING!");
});