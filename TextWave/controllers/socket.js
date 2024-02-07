var http = require("http");
const { Server } = require("socket.io");
const express = require("express");
var app = express();

function initializeSocket(server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    socket.on("send-message", (message) => {
      socket.broadcast.emit("recive-message", message);
    });
  });

  return io;
}

module.exports = initializeSocket;
