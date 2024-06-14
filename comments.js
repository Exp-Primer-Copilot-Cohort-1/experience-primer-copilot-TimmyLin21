// Create web server
// Add a route for the comments page
// Respond with the comments page

var express = require('express');
var app = express();

app.get('/comments', function(request, response) {
  response.sendFile(__dirname + '/comments.html');
});

app.listen(8080);