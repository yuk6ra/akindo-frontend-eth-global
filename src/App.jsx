import * as React from 'react'

// Import the extendTheme function
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";

/// Import pages
import Home from './pages/Home.jsx';
import CreateHackathon from './pages/CreateHackathon.jsx';
import SubmitProduct from './pages/SubmitProduct.jsx';
import Voting from './pages/Voting.jsx';
import ProductList from './pages/ProductList.jsx';

export const theme = extendTheme({
    styles: {
      global: {
        body: {
          backgroundColor: '#A50C22',
        },
      }
    }
  });



function App() {
    // 2. Wrap ChakraProvider at the root of your app
    return (
        <BrowserRouter>
            <ChakraProvider
                theme={theme}
            >                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateHackathon />} />                    
                    <Route path="/submit" element={<SubmitProduct />} />                    
                    <Route path="/vote" element={<Voting />} />                    
                    <Route path="/productlist" element={<ProductList />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </ChakraProvider>
        </BrowserRouter>
    )
}

export default App