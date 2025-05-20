import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import locationData from '../data/locationData';

const Header = () => {
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  
  // Check if this link is active
  const isActive = (path) => {
    return location.pathname === path ? 'text-red-600 border-b-2 border-red-600' : '';
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="Cairo Plov Center" className="h-14" />
              <div className="ml-2">
                <h1 className="text-xl font-bold text-red-600">Cairo Plov Center</h1>
                <p className="text-sm text-green-600">مركز بلوف القاهرة</p>
              </div>
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`py-2 px-1 ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/menu" className={`py-2 px-1 ${isActive('/menu')}`}>
              Menu
            </Link>
            <Link to="/delivery" className={`py-2 px-1 ${isActive('/delivery')}`}>
              Payment & Delivery
            </Link>
            <Link to="/contacts" className={`py-2 px-1 ${isActive('/contacts')}`}>
              Contacts
            </Link>
          </nav>
          
          {/* Phone */}
          <div className="hidden md:flex items-center">
            <a href={`tel:${locationData.phone}`} className="flex items-center bg-red-100 rounded-full py-2 px-4 hover:bg-red-200 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span className="text-red-600 font-medium">{locationData.phone}</span>
            </a>
          </div>
          
          {/* Shopping Cart */}
          <button 
            onClick={() => toggleCart(true)}
            className="flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition duration-200 border border-red-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="ml-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
