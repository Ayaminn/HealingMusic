var http = require("http");
var socketio = require("socket.io");
var fs = require("fs");
var ws    = require('ws').Server;
var url = require("url");

//index.html
var server = http.createServer(function(req, res) {

  var pathname = url.parse(req.url).pathname;
  if(pathname === "/"){
  res.writeHead(200, {"Content-Type":"text/html"});
  var output = fs.readFileSync("Live.html", "utf-8");
  res.end(output);
  }
  if(pathname === "/master"){
  res.writeHead(200, {"Content-Type":"text/html"});
  var output = fs.readFileSync("LiveController.html", "utf-8");
  res.end(output);
  }
// (見つからなかったら status: 404 で NotFound用のhtmlを返す)

}).listen(process.env.PORT || 3000);
 
var io = socketio.listen(server);

io.sockets.on("connection", function (socket) {
  // メッセージ送信（送信者にも送られる）

  socket.on("LiveStart", function (data) {
    io.sockets.emit("S2C", {value:data.value});
    console.log("動いたよ〜");
  });

  // 切断したときに送信
  socket.on("disconnect", function () {
  // io.sockets.emit("S_to_C_message", {value:"user disconnected"});
  });
});