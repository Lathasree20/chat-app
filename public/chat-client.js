const socket = io();

const loginScreen = document.getElementById("login-screen");
const chatScreen = document.getElementById("chat-screen");
const usernameInput = document.getElementById("username");
const enterChatBtn = document.getElementById("enter-chat");

const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

let username = "";

enterChatBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (name) {
    // username = name;
    socket.emit("join", username);
    loginScreen.classList.add("hidden");
    chatScreen.classList.remove("hidden");
  }
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = chatInput.value.trim();
  if (message) {
    socket.emit("sendMessage", message);
    chatInput.value = "";
  }
});

socket.on("receiveMessage", (data) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${data.user}</strong> [${data.time}]: ${data.message}`;
  chatMessages.appendChild(li);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on("notification", (msg) => {
  const li = document.createElement("li");
  li.classList.add("system");
  li.textContent = msg;
  chatMessages.appendChild(li);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
