import { Box, Flex, Text } from '@chakra-ui/react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  avatar?: string;
  timestamp?: string;
}

const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
//   const defaultAiAvatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuDg1L_3aOJYggDYTDuG2-ldEtClu1fDcL6t2SaCDjrGyG59rzir7T888Gc0pxbZp3wkcRjlz-Nr5-_O3VdSlA-qP_kA5bX_RjOdJRTPpwzu3nBznrxL1N_JbSLwSRwi3jlfH862eOzlhdtogvBPSiV4Oq1_22f8UmCLcRQoT8CPQ4QciKb8LkULgUG9fCn9lPMrbil-3pwLv4MKRBIEysfMzjSmQfi6WbdY_EYhL3a1xkwdc6MBbUBk0cN10X5cPKvpUXK_Vqgcvgpd";
//   const defaultUserAvatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuClvXfuTyuKQtkPFLejFpmKenH89OKxlbOkUKV4fKeXHv0Uepnhr7m1rOJU1xjZH3nTcVw4rnHLveT7Xj2hQK99dtuNHY2A9W9jdZvQ_8vPExBmuStDw9LcJZ91pCmQXU9E5OEDefNOzexaWzoJghLFRi2Odi11bSFGrc28xnwXNhjcKIJz1t_fvgzdGqzsdPkSVhZBx7pr9t-VxoRjLYdvBw983FP9BQRuRe7UaEn-aaMNREFV6NcvBzw9YIS_8kQdYIm186ZGiyKG";

  return (
    <Flex
      align="flex-end"
      gap={3}
      p={4}
      justify={isUser ? 'flex-end' : 'flex-start'}
    >
      {/* {!isUser && (
        <Avatar
          size="md"
          src={avatar || defaultAiAvatar}
          flexShrink={0}
        />
      )} */}

      <Flex
        direction="column"
        gap={1}
        align={isUser ? 'flex-end' : 'flex-start'}
        flex={1}
      >
        <Text
          color="brand.300"
          fontSize="13px"
          maxW="360px"
          textAlign={isUser ? 'right' : 'left'}
        >
          {isUser ? 'User' : 'CryptoSwap AI'}
        </Text>
        <Box
          maxW="360px"
          rounded="xl"
          px={4}
          py={3}
          bg={isUser ? 'brand.400' : 'brand.100'}
          color="brand.500"
        >
          <Text fontSize="base">{message}</Text>
        </Box>
      </Flex>
{/* 
      {isUser && (
        <Avatar
          size="md"
          src={avatar || defaultUserAvatar}
          flexShrink={0}
        />
      )} */}
    </Flex>
  );
};

export default ChatMessage;