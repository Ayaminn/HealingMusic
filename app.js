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
  var output = fs.readFileSync("mobile.html", "utf-8");
  res.end(output);
  }else if(pathname === "/ui2"){
  res.writeHead(300, {"Content-Type":"text/html"});
  var output = fs.readFileSync("index.html", "utf-8");
  res.end(output);
  }else if(pathname === "/ui1"){
  res.writeHead(300, {"Content-Type":"text/html"});
  var output = fs.readFileSync("test.html", "utf-8");
  res.end(output);
  }
// (見つからなかったら status: 404 で NotFound用のhtmlを返す)

}).listen(process.env.PORT || 3000);

var io = socketio.listen(server);

io.sockets.on("connection", function (socket) {
  // メッセージ送信（送信者にも送られる）
  socket.on("C_2_S_color", function (data) {
  io.sockets.emit("S_2_C_color", {value:data.value});
  console.log("S_2_C_color", {value:data.value});
});

  // メッセージ送信（送信者にも送られる）
  socket.on("C_2_S_animation", function (data) {
  io.sockets.emit("S_2_C_animation", {value:data.value});
  console.log("S_2_C_animation", {value:data.value});
});

  // 切断したときに送信
  socket.on("disconnect", function () {
  // io.sockets.emit("S_to_C_message", {value:"user disconnected"});
  });
});