CHAT APPLICATION

COMPANY : CODTECH IT SOLUTIONS

NAME : MANIYARI LATHA SREE

INTERN ID : CT06DG2732

DOMAIN : FULL STACK WEB DEVELOPMENT

DURATION : 6 WEEKS

MENTOR : Neela Santhosh Kumar

Description:-

This project is a real-time chat application developed using Node.js, Express.js, and Socket.IO. It enables multiple users to communicate with each other simultaneously over a shared interface. The application features a live chat system that uses WebSockets for real-time data transmission. Unlike traditional request-response systems, this app maintains a persistent connection between the client and the server, ensuring fast and continuous data exchange.

The application includes a simple frontend built using HTML, CSS, and JavaScript that connects to a backend server running on Node.js with Express. Socket.IO is used to handle real-time, bidirectional communication. This ensures that messages sent by any user are instantly received and displayed on all connected clients.

This project is ideal for learning the basics of WebSockets, event-driven programming, and full-stack web development. It demonstrates how real-time communication can be implemented in a lightweight and efficient way.

Features:-

Real-time messaging between multiple users

Supports multiple clients connected simultaneously

Instantly broadcasts messages to all connected clients

Simple and clean user interface

Efficient and fast message transmission using WebSockets

Modular code structure and easy to understand

Technologies and Tools Used:-

Frontend:

HTML

CSS

JavaScript

Backend:

Node.js

Express.js

Socket.IO

Development Tools:

Visual Studio Code (code editor)

Git (version control)

GitHub (code hosting platform)

How it Works:-

When a user opens the chat application in their browser, a connection is established between the client and the backend server using Socket.IO. This creates a persistent WebSocket connection. When a message is typed and submitted by a user, the message is emitted from the client to the server.

The server listens for incoming messages from clients. Upon receiving a message, the server broadcasts it to all connected clients including the sender. Each client receives the new message in real-time and displays it on the chat interface. This ensures a seamless and interactive experience across all user sessions.

Real-World Use Cases:-

Customer support chat systems

Collaborative group chats in team communication tools

Online multiplayer games where players need to communicate

Classroom discussion tools for remote education platforms

Internal communication platforms for organizations

How to Run the Project Locally:-

Open terminal, go to the project directory, and run npm install to install dependencies.

Start the backend server using node server.js.

Open your browser and visit http://localhost:3000 to use the chat application.

OUTPUT:-

