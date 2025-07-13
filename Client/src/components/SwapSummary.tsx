import {
  Box,
  Button,
  Heading,
  Progress,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';

interface SwapData {
  sourceChain: string;
  destinationChain: string;
  inputToken: string;
  outputToken: string;
  amount: string;
  estimatedGasFee: string;
  slippage: string;
  status: string;
  progress: number;
}

interface SwapSummaryProps {
  swapData: SwapData;
  onConfirmSwap: () => void;
}

const SwapSummary = ({ swapData, onConfirmSwap }: SwapSummaryProps) => {
  const summaryItems = [
    { label: 'Source Chain', value: swapData.sourceChain },
    { label: 'Destination Chain', value: swapData.destinationChain },
    { label: 'Input Token', value: swapData.inputToken },
    { label: 'Output Token', value: swapData.outputToken },
    { label: 'Amount', value: swapData.amount },
    { label: 'Estimated Gas Fee', value: swapData.estimatedGasFee },
    { label: 'Slippage', value: swapData.slippage },
  ];

  return (
    <Box w="360px" flexShrink={0}>
      <Heading
        size="lg"
        color="brand.500"
        fontWeight="bold"
        letterSpacing="-0.015em"
        px={4}
        pb={3}
        pt={5}
      >
        Swap Summary
      </Heading>

      <VStack align="stretch" p={4}>
        {summaryItems.map((item, index) => (
          <Box key={index}>
            {/* <Divider borderColor="brand.200" /> */}
            <HStack justify="space-between" py={5}>
              <Text color="brand.300" fontSize="sm">
                {item.label}
              </Text>
              <Text color="brand.500" fontSize="sm" fontWeight="medium">
                {item.value}
              </Text>
            </HStack>
          </Box>
        ))}
      </VStack>

      {/* Swap Status */}
      <VStack p={4}>
        <HStack justify="space-between" w="full">
          <Text color="brand.500" fontSize="base" fontWeight="medium">
            Swap Status
          </Text>
        </HStack>
        <Progress
          value={swapData.progress}
          colorScheme="green"
          bg="brand.200"
          rounded="md"
          w="full"
          h={2}
        />
        <Text color="brand.300" fontSize="sm" alignSelf="flex-start">
          {swapData.status}
        </Text>
      </VStack>

      {/* Confirm Button */}
      <Box px={4} py={3}>
        <Button
          w="full"
          bg="brand.400"
          color="brand.500"
          rounded="full"
          h={10}
          fontWeight="bold"
          fontSize="sm"
          letterSpacing="0.015em"
          onClick={onConfirmSwap}
          _hover={{ bg: 'brand.400', opacity: 0.8 }}
        >
          Confirm Swap
        </Button>
      </Box>
    </Box>
  );
};

export default SwapSummary;