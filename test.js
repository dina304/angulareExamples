my_http = require("http");

my_http.createServer(function(request,response){
	getJson(response);
   }).listen(8080);
function getJson(response)
{
 console.log("Request handler random was called.");
 response.writeHead(200, {"Content-Type": "application/json"});
  var otherObject ={"firstName": "Peter","lastName": "Parker", "job": "Third", "roll": 40};
  var json = JSON.stringify({
    person: otherObject
  });
   response.end(json);
}
console.log("Server Running on 8080");