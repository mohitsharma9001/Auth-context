import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/navbar';


function App() {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
       <Navbar/>
      </ChakraProvider>
     </AuthContextProvider>
  );
}

export default App;