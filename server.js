const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const dbcon = require('./dbConnection');

const posts = require('./routes/api/posts.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/posts",posts);

const categories = require('./routes/api/categories.js');
app.use("/api/category",categories);

/*// route
app.get("/",(req,res) => {
	res.send({message : "welcome"});
});

app.get("/test",(req,res,next) => {
	res.write(JSON.stringify({message : "welcome"}));
	next();
});
app.get("/test",(req,res) => {
	res.write(JSON.stringify({message : "here"}));
	res.end();
});

app.post("/demo",(req,res) => {
	res.send(req.body);
});*/

app.listen(3000, ()=>console.log("server running at port 3000"));