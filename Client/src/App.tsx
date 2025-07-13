import { ChakraProvider } from '@chakra-ui/react';
// import Layout from './components/Layout';
// import ChatInterface from './components/ChatInterface';
import theme from './theme';
import Layout from './components/MainLayout';
import ChatInterface from './components/MainInterface';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ChatInterface />
      </Layout>
    </ChakraProvider>
  );
}

export default App;