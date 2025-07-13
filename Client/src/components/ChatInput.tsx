import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
} from '@chakra-ui/react';
// import { AttachmentIcon } from '@chakra-ui/icons';
import { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
}

const ChatInput = ({ onSendMessage, placeholder = 'Type your message...' }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Flex align="center" px={4} py={3} gap={3}>
      <Box position="relative" flex={1}>
        <Input
          placeholder={placeholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          bg="gray.100" // fallback if brand.100 is not defined
          border="none"
          borderRadius="xl"
          h={12}
          pr="5.5rem" // make space for buttons
          color="gray.800"
          _placeholder={{ color: 'gray.400' }}
          _focus={{
            outline: 'none',
            boxShadow: 'none',
          }}
        />
        <Flex
          position="absolute"
          right="0.5rem"
          top="50%"
          transform="translateY(-50%)"
          align="center"
          gap={2}
        >
          <IconButton
            aria-label="Attach file"
            // icon={<AttachmentIcon />}
            size="sm"
            variant="ghost"
            colorScheme="gray"
            type="button"
            onClick={() => console.log('Attach file clicked')}
          />
          <Button
            size="sm"
            bg="blue.400" // fallback color
            color="white"
            borderRadius="full"
            fontWeight="medium"
            px={4}
            onClick={handleSend}
            _hover={{ bg: 'blue.500' }}
          >
            Send
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ChatInput;
