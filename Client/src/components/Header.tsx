import {
  Box,
  Button,
  Flex,
  Stack,
  Heading,
  // Avatar,
  IconButton,
  Link,
  Spacer,
} from '@chakra-ui/react';
// import { QuestionIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <Box
      as="header"
      borderBottom="1px"
      borderColor="gray.200" // fallback if brand.100 not defined
      px={10}
      py={3}
      bg="white"
    >
      <Flex align="center" justify="space-between">
        {/* Logo and Brand */}
        <Flex align="center" gap={4} color="blue.500"> {/* fallback if brand.500 not defined */}
          <Box w={4} h={4}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Heading size="lg" fontWeight="bold" letterSpacing="-0.015em">
            CryptoSwap AI
          </Heading>
        </Flex>

        <Spacer />

        <Flex align="center" gap={8}>
          {/* Navigation Links */}
          <Stack direction="row"  align="center">
            <Link href="#" fontSize="sm" fontWeight="medium" color="blue.500">
              Home
            </Link>
            <Link href="#" fontSize="sm" fontWeight="medium" color="blue.500">
              Swap
            </Link>
            <Link href="#" fontSize="sm" fontWeight="medium" color="blue.500">
              Pool
            </Link>
            <Link href="#" fontSize="sm" fontWeight="medium" color="blue.500">
              Vote
            </Link>
            <Link href="#" fontSize="sm" fontWeight="medium" color="blue.500">
              Docs
            </Link>
          </Stack>

          {/* Action Buttons */}
          <Stack direction="row" align="center">
            <Button
              bg="blue.100" // fallback if brand.100 is undefined
              color="blue.700"
              fontSize="sm"
              fontWeight="bold"
              rounded="full"
              h={10}
              px={4}
              _hover={{ bg: 'blue.200' }}
            >
              Connect Wallet
            </Button>
            <IconButton
              aria-label="Help"
              // icon={<QuestionIcon />}
              bg="blue.100"
              color="blue.700"
              rounded="full"
              h={10}
              w={10}
              _hover={{ bg: 'blue.200' }}
            />
          </Stack>

          {/* User Avatar */}
          {/* <Avatar
            size="md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjbwHnH3VrhfJGO6p3I_z4kwxx9qLMFrHriMy5dBCCfIY0fwEKTCsfuQINIUfrzOZNJqusRl0MKFQNpyhQwkAUSKCN7P4OvQ-gTOYXKsR4P7Eq_EGEMN-4r6GHGChAP8aG-FIGPnKYDV3A5_hezHNpyoaSYqztxp74DOT1n2pcrpvCIn2WriODG3ItolDenJ4EAAtZJS2Gr6BWOunD-FfjhKwwxwyQEfHpMGJliZxmgE6KV55w0gY8434v6JawvhsoVlRL648LYHuL"
          /> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
