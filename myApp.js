require("dotenv").config();
var express = require('express');
var app = express();

//absolute path to index.html
let absolutePath = __dirname + "/views/index.html";
//path to public folder
let pathStatic = __dirname + "/public";

// Serve static content for the app from the 
// “public” directory in the application directory:
app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get('/', (req, res) => {
  //res.send("Hello Express");
  res.sendFile(absolutePath);
});

//Serving json data
app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      "message": "HELLO JSON"
    });

    return;
  }
  res.json({
    "message": "Hello json"
  });
  return;
});

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ "time": req.time });
});

app.get('/:word/echo', (req, res)=>{
  res.json({
    "echo": req.params.word
  });
});

app.get('/name', (req, res)=>{
  console.log(req.query);
  let {first, last} = req.query;
  res.json({
    "name":first + " " + last 
  });
}).post('/name', (req, res)=>{
    let {first, last} = req.query;
  res.json({
    "name":first + " " + last
  });
});






























module.exports = app;
