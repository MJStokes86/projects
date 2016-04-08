	var sqlite3 = require ('sqlite3');
	var db = new sqlite3.Database('./forum.db');


	db.serialize(function(){
		db.run("CREATE TABLE topics(id integer primary key AUTOINCREMENT, title varchar, creator varchar, date varchar, body varchar);")
		db.run("CREATE TABLE comments(person_created varchar, input varchar, topic_id integer, FOREIGN KEY (topic_id) references topics(id));")

	db.parallelize(function(){
		db.run("INSERT INTO topics(title, creator, date, body) VALUES ('Top R&B Hits of the 80s', 'Michael', '4/15/15', 'Please share some of your favorite R&B Hits from the decade!' );")
		db.run("INSERT INTO comments(person_created, input, topic_id) VALUES ('Sheila', 'Billie Jean by Michael Jackson', 1);")
		db.run("INSERT INTO comments(person_created, input, topic_id) VALUES ('George ', 'Get Outta of My Dreams by Billy Ocean', 1); ")
	})
	})