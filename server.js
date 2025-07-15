const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join", (username) => {
    socket.username = username;
    socket.broadcast.emit("notification", `${username} joined the chat`);
  });

  socket.on("sendMessage", (message) => {
    const time = new Date().toLocaleTimeString();
    io.emit("receiveMessage", {
      user: socket.username,
      message,
      time,
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
