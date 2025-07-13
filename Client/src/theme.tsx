

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Manrope, sans-serif',
    body: 'Manrope, sans-serif',
  },
  colors: {
    brand: {
      50: '#f8fbfa',
      100: '#e8f2ec',
      200: '#d1e6d9',
      300: '#51946b',
      400: '#39e079',
      500: '#0e1a13',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.50',
        color: 'brand.500',
        fontFamily: 'Manrope, sans-serif',
      },
    },
  },
});

export default theme;