const socket = io();

const loginScreen = document.getElementById("login-screen");
const chatScreen = document.getElementById("chat-screen");
const usernameInput = document.getElementById("username");
const enterChatBtn = document.getElementById("enter-chat");

const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

let username = "";

// Join chat after entering username
enterChatBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (name) {
    username = name;
    socket.emit("newuser", username);
    loginScreen.style.display = "none";
    chatScreen.style.display = "block";
  }
});

// Handle sending messages
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = chatInput.value.trim();
  if (message) {
    socket.emit("sendMessage", message);
    chatInput.value = "";
  }
});

// Receive messages
socket.on("receiveMessage", (data) => {
  const msg = document.createElement("div");
  msg.textContent = `[${data.time}]: ${data.user}: ${data.message}`;
  chatMessages.appendChild(msg);
});

// Notifications (e.g., user joined/left)
socket.on("notification", (message) => {
  const note = document.createElement("div");
  note.textContent = message;
  note.style.fontStyle = "italic";
  chatMessages.appendChild(note);
});
