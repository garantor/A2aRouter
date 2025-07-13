import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import ChatMessage from './Chat';
import ChatInput from './ChatInput';
import SwapSummary from './SwapSummary';
// import ChatMessage from '../ChatMessage';
// import ChatInput from '../ChatInput';
// import SwapSummary from '../SwapSummary';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Hi there! I'm your AI assistant for token swaps. How can I help you today?",
      isUser: false,
    },
    {
      id: 2,
      message: "I want to swap 1 ETH for USDC.",
      isUser: true,
    },
    {
      id: 3,
      message: "Sure, I can help with that. Which blockchain are you using?",
      isUser: false,
    },
    {
      id: 4,
      message: "Ethereum mainnet.",
      isUser: true,
    },
    {
      id: 5,
      message: "Okay, I'll prepare the swap details for you. Please connect your wallet to proceed.",
      isUser: false,
    },
  ]);

  const swapData = {
    sourceChain: 'Ethereum',
    destinationChain: 'Ethereum',
    inputToken: 'ETH',
    outputToken: 'USDC',
    amount: '1 ETH',
    estimatedGasFee: '0.01 ETH',
    slippage: '0.5%',
    status: 'In Progress',
    progress: 50,
  };

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: messages.length + 1,
      message,
      isUser: true,
    };
    setMessages([...messages, newMessage]);
  };

  const handleConfirmSwap = () => {
    console.log('Swap confirmed');
  };

  return (
    <Flex gap={1} px={6} flex={1} justify="center" py={5}>
      {/* Chat Section */}
      <Box maxW="920px" flex={1}>
        <VStack spacing={0} align="stretch">
          <Heading
            color="brand.500"
            fontSize="28px"
            fontWeight="bold"
            letterSpacing="tight"
            px={4}
            textAlign="left"
            pb={3}
            pt={5}
          >
            Chat with CryptoSwap AI
          </Heading>
          <Text
            color="brand.500"
            fontSize="base"
            px={4}
            pb={3}
            pt={1}
          >
            Use natural language to swap tokens across multiple blockchains. Connect your wallet to get started.
          </Text>

          {/* Messages */}
          <VStack spacing={0} align="stretch">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg.message}
                isUser={msg.isUser}
              />
            ))}
          </VStack>

          {/* Chat Input */}
          <ChatInput onSendMessage={handleSendMessage} />
        </VStack>
      </Box>

      {/* Swap Summary Sidebar */}
      <SwapSummary swapData={swapData} onConfirmSwap={handleConfirmSwap} />
    </Flex>
  );
};

export default ChatInterface;