import * as React from 'react'

// Import the extendTheme function
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

/// Import pages
import Home from './pages/Home.jsx';
import CreateHackathon from './pages/CreateHackathon.jsx';
import SubmitProduct from './pages/SubmitProduct.jsx';
import Voting from './pages/Voting.jsx';


function App() {
    // 2. Wrap ChakraProvider at the root of your app
    return (
        <BrowserRouter>
            <ChakraProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateHackathon />} />                    
                    <Route path="/submit" element={<SubmitProduct />} />                    
                    <Route path="/vote" element={<Voting />} />                    
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </ChakraProvider>
        </BrowserRouter>
    )
}

export default App