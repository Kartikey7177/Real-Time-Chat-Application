# Real Time Chat Application

*COMPANY* : CODTECH IT SOLUTIONS

*NAME* : KARTIKEY BORA

*INTERN ID* : CT06DN1196

*DOMAIN* : FRONTEND WEB DEVELOPMENT

*DURATION* : 6 WEEKS

*MENTOR* : NEELA SANTOSH 


# DESCRIPTION : 
Real-Time Chat Application
The Real-Time Chat Application is a fully responsive, web-based messaging platform built using React.js for the frontend and Node.js with Socket.IO on the backend. Designed for seamless and instantaneous communication, this application allows multiple users to join chat rooms, send and receive messages in real-time, and experience a modern, intuitive chat interface. It closely mirrors popular messaging platforms like WhatsApp Web and Slack in terms of real-time responsiveness and user interactivity.

Purpose and Objective
The core objective of this real-time chat application is to create a fast, reliable, and interactive messaging system where users can connect instantly. Whether for social interactions, team collaboration, or customer support integration, this application serves as a versatile communication tool.

Key Features
Real-Time Messaging (via WebSockets)
Using Socket.IO, the application enables bi-directional communication between the client and server. Messages are sent and received instantly without needing to refresh the page.

Multi-User Chat Support
Multiple users can join a common room or chat environment. Each user is uniquely identified by a username, and messages are broadcast to all connected users in real time.

Message Broadcasting and Reception
Messages are shown with the sender's name, timestamp, and styled bubbles. The message list updates dynamically for all users as new messages arrive.

Join/Leave Notifications
When a user joins or leaves the chat, system-generated messages are broadcast to notify other users, enhancing the interactivity of the environment.

Clean and Responsive UI
Built with React.js and styled using CSS or Tailwind CSS, the interface includes a chat window, input bar, send button, and scrollable message area. It is fully responsive and works well across desktops, tablets, and mobile devices.

Auto Scroll to Latest Message
The chat window automatically scrolls to display the most recent messages, keeping the conversation flow uninterrupted.

Disconnection Handling
Users who disconnect (voluntarily or due to network issues) are automatically removed from the chat, and a leave message is displayed to others.

Technologies Used
Frontend: React.js

Backend: Node.js

Real-Time Communication: Socket.IO

Styling: CSS / Tailwind CSS

Hosting (optional): Vercel for frontend, Render or Heroku for backend

Folder Structure Overview
client/: Contains the React frontend (components like Chat.js, Join.js, App.js, and styling files like Chat.css)

server/: Contains the Node.js backend (server.js) and manages WebSocket events

User Flow
User lands on the join screen and enters a username.

Upon joining, they are connected to the WebSocket server and enter the main chat window.

They can now send messages and view others’ messages live.

They receive notifications when users join or leave.

Upon leaving the app, they are disconnected and a system message is sent.

Conclusion
The Real-Time Chat Application demonstrates the power of WebSockets in building responsive and collaborative web applications. With a minimal and effective design, it provides users with instant connectivity, making it suitable for both learning and real-world deployments. It is an excellent foundation for further features like private messaging, message history, user authentication, and media sharing.


# OUTPUT - 
![Image](https://github.com/user-attachments/assets/c8760f30-dccf-455d-916c-548ca48c236f)

