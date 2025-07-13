# A2A Router Client

A simple agent-to-agent (A2A) client built with React and Chakra UI that communicates with an A2A server.

## Features

- 🤖 Simple chat interface for communicating with A2A agents
- 📡 Real-time connection status monitoring
- 💬 Message history with timestamps
- 🎨 Clean, modern UI built with Chakra UI
- ⚡ Fast development with Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A running A2A server on localhost:3000

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
# Create a .env file in the root directory
GOOGLE_API_KEY=your_google_api_key_here
```

### Running the Application

#### Start the A2A Server (Port 3000)

```bash
npm run dev
```

#### Start the Client (Port 5173/5174)

```bash
npm run client
```

The client will automatically proxy API requests to the server running on port 3000.

### API Endpoints

The client communicates with these endpoints:

- `POST /api/chat` - Send messages to the A2A agent
- `GET /api/health` - Check server health status
- `GET /api/agent-info` - Get agent configuration details

### Project Structure

```
├── Client/
│   ├── src/
│   │   ├── App.tsx           # Main application component
│   │   ├── SimpleApp.tsx     # Simple chat interface (currently active)
│   │   └── main.tsx          # React entry point
│   └── tsconfig.json
├── Server/
│   ├── agent.ts              # Gemini AI agent implementation
│   ├── agentExecutor.ts      # A2A agent executor
│   ├── app.ts                # Server entry point
│   └── server.ts             # Express server with A2A routes
├── package.json
└── vite.config.ts
```

### Usage

1. Start both the server and client
2. Open your browser to http://localhost:5173 or http://localhost:5174
3. Check the connection status in the header
4. Type messages and chat with the A2A agent
5. View message history and timestamps

### Features of the Client

- **Connection Status**: Green badge when connected, red when disconnected
- **Real-time Messaging**: Send messages with Enter key (Shift+Enter for new lines)
- **Message History**: All conversations are stored locally during the session
- **Error Handling**: Clear error messages when the server is unavailable
- **Responsive Design**: Works on desktop and mobile devices

### Troubleshooting

1. **Server not responding**: Make sure the A2A server is running on port 3000
2. **Connection issues**: Check that the `/api/chat` endpoint is accessible
3. **TypeScript errors**: Ensure all dependencies are installed with `npm install`

### Technologies Used

- **Frontend**: React 19, TypeScript, Chakra UI, Vite
- **Backend**: Express.js, A2A JS SDK, Google Gemini AI
- **Development**: Nodemon, tsx, ESLint

## License

MIT License
