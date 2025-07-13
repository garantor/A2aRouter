import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction="column" minHeight="100vh" bg="brand.50">
      <Header />
      <Box as="main" flex="1" display="flex" justifyContent="center" alignItems="center">
        <Box width="100%" maxWidth="1400px" mx="auto" px={4}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;