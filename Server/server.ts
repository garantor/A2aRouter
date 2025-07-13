


import express from 'express';
import {
  A2AExpressApp,
  DefaultRequestHandler,
  InMemoryTaskStore
} from "@a2a-js/sdk";
import { HelloWorldA2AJSExecutor } from './agentExecutor';
import dotenv from 'dotenv';
dotenv.config();



const taskStore = new InMemoryTaskStore();
const agentExecutor = new HelloWorldA2AJSExecutor();
import { A2AClient } from "@a2a-js/sdk";
import { AgentCard } from "@a2a-js/sdk";
import { GeminiAgent } from './agent';




console.log("A2A JS SDK installed successfully!");


export const agentCard: AgentCard = {
    name: 'My A2A JS Agent',
    description: 'Intelligent agent built with A2A JS SDK',
    url: 'http://localhost:3000/',
    provider: {
        organization: 'A2A JS Developers',
        url: 'https://example.com'
    },
    version: '1.0.0',
    capabilities: {
        streaming: true,
        pushNotifications: false,
        stateTransitionHistory: true,
    },
    skills: [{
        id: 'general_chat',
        name: 'General Chat',
        description: 'General conversation using A2A JS',
        tags: ['chat', 'a2a-js'],
        examples: ['Hello', 'Help me answer questions']
    }],
    defaultInputModes: [],
    defaultOutputModes: []
};




const requestHandler = new DefaultRequestHandler(
  agentCard,
  taskStore,
  agentExecutor
);

const appBuilder = new A2AExpressApp(requestHandler);


// Create the express app
const app = express();

// Add your custom routes BEFORE A2A routes
app.use(express.json());

// Custom API routes
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const agent = new GeminiAgent({
            model: 'gemini-1.5-flash',
            temperature: 0.7,
            maxTokens: 1000,
            apiKey: process.env.GOOGLE_API_KEY || ''
        });
        const response = await agent.generateResponse(message);
        res.json({ response: response.content });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/api/agent-info', (req, res) => {
    res.json(agentCard);
});

export const expressApp = appBuilder.setupRoutes(app, '');


