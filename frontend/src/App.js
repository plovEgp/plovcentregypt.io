import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Delivery from './pages/Delivery';
import Contacts from './pages/Contacts';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:categorySlug" element={<Menu />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
          <Footer />
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
