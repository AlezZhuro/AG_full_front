import { ChakraProvider } from '@chakra-ui/react';
import { Routes } from './Routes';

export function Providers() {
  return (
    <ChakraProvider>
        <Routes />
    </ChakraProvider>
  );
}
