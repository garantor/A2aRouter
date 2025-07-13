
import {
  AgentExecutor,
  RequestContext,
  ExecutionEventBus,
  Task,
  TaskStatusUpdateEvent,
  
} from "@a2a-js/sdk";
import { v4 as uuidv4 } from "uuid";



export class HelloWorldA2AJSExecutor implements AgentExecutor {
  private cancelledTasks = new Set<string>();

  async cancelTask(taskId: string, eventBus: ExecutionEventBus): Promise<void> {
    this.cancelledTasks.add(taskId);
    console.log(`A2A JS executor canceling task: ${taskId}`);
  }

  async execute(
    requestContext: RequestContext,
    eventBus: ExecutionEventBus
  ): Promise<void> {
    const userMessage = requestContext.userMessage;
    const existingTask = requestContext.task;
    
    const taskId = existingTask?.id || uuidv4();
    const contextId = userMessage.contextId || existingTask?.contextId || uuidv4();

    console.log(`A2A JS agent processing message: ${userMessage.parts[0]}`);

    // Create new task
    if (!existingTask) {
      const initialTask: Task = {
        kind: 'task',
        id: taskId,
        contextId: contextId,
        status: {
          state: 'submitted',
          timestamp: new Date().toISOString(),
        },
        history: [userMessage],
        metadata: userMessage.metadata,
        artifacts: [],
      };
      eventBus.publish(initialTask);
    }

    // Publish working status
    const workingUpdate: TaskStatusUpdateEvent = {
      kind: 'status-update',
      taskId: taskId,
      contextId: contextId,
      status: {
        state: 'working',
        message: {
          kind: 'message',
          role: 'agent',
          messageId: uuidv4(),
          parts: [{ kind: 'text', text: 'A2A JS agent is thinking...' }],
          taskId: taskId,
          contextId: contextId,
        },
        timestamp: new Date().toISOString(),
      },
      final: false,
    };
    eventBus.publish(workingUpdate);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check cancellation status
    if (this.cancelledTasks.has(taskId)) {
      const cancelledUpdate: TaskStatusUpdateEvent = {
        kind: 'status-update',
        taskId: taskId,
        contextId: contextId,
        status: {
          state: 'canceled',
          timestamp: new Date().toISOString(),
        },
        final: true,
      };
      eventBus.publish(cancelledUpdate);
      return;
    }

    // Generate response
    const userPart = userMessage.parts[0];
    let userText = '';
    if (userPart && userPart.kind === 'text') {
      userText = userPart.text;
    }
    let responseText = '';
    
    if (userText.toLowerCase().includes('hello') || userText.toLowerCase().includes('hi')) {
      responseText = `Hello! Welcome to A2A JS SDK! I'm an intelligent agent built with A2A JS.`;
    } else if (userText.toLowerCase().includes('a2a js')) {
      responseText = `A2A JS SDK is a powerful JavaScript library for building intelligent agent applications!`;
    } else {
      responseText = `I'm an A2A JS agent and I received your message: "${userText}". Thank you for using A2A JS SDK!`;
    }

    // Publish final result
    const finalUpdate: TaskStatusUpdateEvent = {
      kind: 'status-update',
      taskId: taskId,
      contextId: contextId,
      status: {
        state: 'completed',
        message: {
          kind: 'message',
          role: 'agent',
          messageId: uuidv4(),
          parts: [{ kind: 'text', text: responseText }],
          taskId: taskId,
          contextId: contextId,
        },
        timestamp: new Date().toISOString(),
      },
      final: true,
    };
    eventBus.publish(finalUpdate);
  }
}
