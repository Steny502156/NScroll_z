import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/inc/Footer';
import AnimeSet from './components/pages/AnimeSet';
import Cart from './components/pages/Cart'; 
import { CartProvider } from './components/pages/CartContext';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './components/AnimeBot/chatbotConfig';
import MessageParser from './components/AnimeBot/MessageParser';
import ActionProvider from './components/AnimeBot/ActionProvider'; 

function App() {
    

    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <CartProvider>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/animeset/:setId" element={<AnimeSet />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </CartProvider>
                <Footer />
                <div className="chatbot">
                    <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
