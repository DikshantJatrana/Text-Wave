const socket = io();
const sent = document.getElementById("sent");
const messageInput = document.getElementById("message");
const addchat = document.getElementById("chat");

socket.on("recive-message", (message) => {
  const div = document.createElement("div");
  div.classList.add("bubble");
  div.classList.add("left");
  const para = document.createElement("para");
  para.textContent = message;
  para.classList.add("para");
  para.classList.add("left-p");
  addchat.appendChild(div);
  div.appendChild(para);
});

sent.addEventListener("click", () => {
  const chat = messageInput.value;
  const div = document.createElement("div");
  div.classList.add("bubble");
  div.classList.add("right");
  const para = document.createElement("para");
  para.textContent = chat;
  para.classList.add("para");
  para.classList.add("right-p");
  addchat.appendChild(div);
  div.appendChild(para);
  socket.emit("send-message", chat);
  messageInput.value = "";
});
