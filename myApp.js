var express = require('express');
var app = express();

//absolute path to index.html
let absolutePath = __dirname + "/views/index.html";
//path to public folder
let pathStatic = __dirname + "/public";

// Serve static content for the app from the 
// “public” directory in the application directory:
app.use(pathStatic, express.static(__dirname + pathStatic));

app.get('/', (req, res)=>{
//res.send("Hello Express");
res.sendFile(absolutePath);
});

//Serving json data
app.get('/json', (req, res)=>{
  res.json({
    "message":"Hello json"
  });
});































 module.exports = app;
