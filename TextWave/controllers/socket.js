var http = require("http");
const { Server } = require("socket.io");
const express = require("express");
var app = express();

function initializeSocket(server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
      io.emit("user-message", message);
    });
  });

  return io;
}

module.exports = initializeSocket;
