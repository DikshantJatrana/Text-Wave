const socket = io();
const sent = document.getElementById("sent");
const messageInput = document.getElementById("message");
const addchat = document.getElementById("chat");

function chatbox(chat, position) {
  const div = document.createElement("div");
  div.classList.add("bubble");
  div.classList.add(position);
  const para = document.createElement("para");
  para.textContent = chat;
  para.classList.add("para");
  if (position == "left") {
    para.classList.add("left-p");
  } else {
    para.classList.add("right-p");
  }
  addchat.appendChild(div);
  div.appendChild(para);
}

socket.on("recive-message", (message) => {
  chatbox(message, "left");
});

sent.addEventListener("click", () => {
  const chat = messageInput.value;
  chatbox(chat, "right");
  socket.emit("send-message", chat);
  messageInput.value = "";
});
