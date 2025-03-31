# Chat App

A real-time chat application built using **Node.js**, **Socket.io**, and **React (Vite)**.

## Features

- Real-time messaging
- User authentication
- Online/offline status indication
- Typing indicators
- Responsive UI
- Scalable architecture

## Tech Stack

### Frontend
- **React (Vite)**
- Tailwind CSS (for styling)
- Socket.io-client

### Backend
- **Node.js** (Express framework)
- Socket.io (WebSocket communication)
- MongoDB (for user data and messages storage)

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (>= 14)
- npm or yarn
- MongoDB (if using a local database)

### Clone the repository
```sh
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

### Backend Setup
```sh
cd server
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `server` directory and set the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### Start the Backend Server
```sh
npm run dev
```

### Frontend Setup
```sh
cd ../client
npm install
```

#### Start the Frontend
```sh
npm run dev
```

## Usage
1. Run the backend server (`npm run dev` in `server` folder)
2. Run the frontend (`npm run dev` in `client` folder)
3. Open the app in your browser (usually at `http://localhost:5173`)
4. Sign up or log in to start chatting in real-time

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

