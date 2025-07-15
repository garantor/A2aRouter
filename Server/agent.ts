import { GoogleGenerativeAI } from '@google/generative-ai';


import dotenv from 'dotenv';

dotenv.config();
console.log('rocess.env.GOOGLE_API_KEY ', process.env.GOOGLE_API_KEY)
interface AgentConfig {
apiKey?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface AgentResponse {
  content: string;
  tokensUsed?: number;
  finishReason?: string;
}

export class GeminiAgent {
  private genAI: GoogleGenerativeAI;
  private model: any;
  private config: AgentConfig;

  constructor(config: AgentConfig) {
    this.config = {
      model: 'gemini-1.5-flash',
      temperature: 0.7,
      maxTokens: 1000,
      apiKey: process.env.GOOGLE_API_KEY || '', // Ensure you set your API key in the environment variables
      ...config
    };

    this.genAI = new GoogleGenerativeAI(this.config.apiKey as string);
    this.model = this.genAI.getGenerativeModel({ 
      model: this.config.model!,
      generationConfig: {
        temperature: this.config.temperature,
        maxOutputTokens: this.config.maxTokens,
      }
    });
  }

  async generateResponse(prompt: string): Promise<AgentResponse> {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      
      return {
        content: response.text(),
        finishReason: response.candidates?.[0]?.finishReason
      };
    } catch (error) {
      throw new Error(`Gemini API error: ${error}`);
    }
  }

  async chat(messages: Message[]): Promise<AgentResponse> {
    try {
      // Convert messages to Gemini format
      const chatHistory = messages.slice(0, -1).map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      const chat = this.model.startChat({
        history: chatHistory
      });

      const lastMessage = messages[messages.length - 1];
      const result = await chat.sendMessage(lastMessage.content);
      const response = await result.response;

      return {
        content: response.text(),
        finishReason: response.candidates?.[0]?.finishReason
      };
    } catch (error) {
      throw new Error(`Gemini chat error: ${error}`);
    }
  }

  async streamResponse(prompt: string, onChunk: (chunk: string) => void): Promise<void> {
    try {
      const result = await this.model.generateContentStream(prompt);
      
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        if (chunkText) {
          onChunk(chunkText);
        }
      }
    } catch (error) {
      throw new Error(`Gemini streaming error: ${error}`);
    }
  }

  updateConfig(newConfig: Partial<AgentConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    if (newConfig.apiKey) {
      this.genAI = new GoogleGenerativeAI(newConfig.apiKey);
    }
    
    if (newConfig.model || newConfig.temperature || newConfig.maxTokens) {
      this.model = this.genAI.getGenerativeModel({ 
        model: this.config.model!,
        generationConfig: {
          temperature: this.config.temperature,
          maxOutputTokens: this.config.maxTokens,
        }
      });
    }
  }
}
