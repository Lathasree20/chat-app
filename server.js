const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  socket.on("newuser", (username) => {
    socket.username = username;
    io.emit("notification", `${username} joined the chat`);
  });

  socket.on("sendMessage", (message) => {
    const time = new Date().toLocaleTimeString();
    io.emit("receiveMessage", {
      user: socket.username || "Unknown",
      message: message,
      time: time,
    });
  });

  socket.on("disconnect", () => {
    if (socket.username) {
      io.emit("notification", `${socket.username} left the chat`);
    }
  });
});

server.listen(3000, () => {
  console.log("Chat app running at http://localhost:3000/chat.html");
});
