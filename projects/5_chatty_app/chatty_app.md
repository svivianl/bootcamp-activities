[Repo](https://github.com/vshibukawa/chatty-app)

# Description

Many of the web applications that you use today have real-time functionality where the user does not have to reload the page in order to see updates. Major examples of these include Slack, Twitter and Facebook.

Chatty will allow users to communicate with each other without having to register accounts. 

# Requirements

## Technical Requirements

**Front-end**
React
- Webpack with Babel, JSX, ES6, webpack dev server (comes with boilerplate)

**Back-end**
Node, express, WebSockets
- WebSockets using Node package ws on the server-side, and native WebSocket on client side

## Functional Requirements

- Primarily a client-side SPA (single-page app) built with ReactJS
  - Based on the HTML and CSS provided
  - Contains a chat log displaying messages and notifications
  - Contains an input field to change your name and an input field to send a message
- The client-side app communicates with a server via WebSockets for multi-user real-time updates
- No persistent database is involved; the focus is on the client-side experience

### Behaviour Requirements
- When any connected user sends a chat message, all connected users receive and display the message
- When any connected user changes their name, all connected users are notified of the name change
  - Notifications are styled differently from chat messages
- Header will display the count of connected users
- When the number of connected users changes, this count will be updated for all connected users
- Different users' names will each be coloured differently
  - The colouring is consistent between connected user instances or is calculated algorithmically based on their name, or is manually selectable by users, or any other interesting approach!

## Technical Specifications

### React component guidelines:

- A single root component (e.g. App) should be responsible for the main application state, as well as communication with the WebSocket server
  - A message list component renders the chat log (chat messages and system notifications)
  - A chat bar component provides an input field for changing your username and an input field for sending messages. These input fields do not need to be React-style "controlled inputs", although they can be.

### Client websocket behaviour:

- Opens a websocket connection as soon as the App component is mounted
  - The connection stays open until the client closes the page (or otherwise disconnects)
- Sends chat messages and (name change) notifications initiated by the current user
- Handles broadcast messages (chat, notifications, user count) from the server and may alter state accordingly

### Websocket server specs:

- The Chatty client app and Chatty websocket server are separate Node apps each with their own package.json
- It's a simple server using express and ws
- The server should send and receive JSON-encoded messages
- When a client sends a message:
  - The server should determine what to do based on the message's type property
  - It should construct a message to send back in response with a corresponding type and a generated unique id (e.g. a UUID)
- When a client connects or disconnects, the server should broadcast the current user count to all connected clients
- The server may assign and/or keep track of user colours (there are several ways of solving this)
