const socket = io();
const sent = document.getElementById("sent");
const messageInput = document.getElementById("message");
const addchat = document.getElementById("chat");

socket.on("user-message", (message) => {
  const para = document.createElement("p");
  para.textContent = message;
  para.classList.add("para");
  addchat.appendChild(para);
});

sent.addEventListener("click", () => {
  const chat = messageInput.value;
  socket.emit("user-message", chat);
  messageInput.value = "";
});
