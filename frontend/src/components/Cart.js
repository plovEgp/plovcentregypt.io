import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import locationData from '../data/locationData';

const Cart = () => {
  const { 
    items, 
    totalAmount, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity,
    clearCart 
  } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'Cash on Delivery',
    comment: ''
  });
  
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the order to the backend
    setOrderPlaced(true);
    
    // Reset form and cart after a delay
    setTimeout(() => {
      setOrderPlaced(false);
      clearCart();
      toggleCart(false);
      setFormData({
        name: '',
        phone: '',
        address: '',
        paymentMethod: 'Cash on Delivery',
        comment: ''
      });
    }, 3000);
  };
  
  const deliveryFee = totalAmount >= locationData.deliveryInfo.freeDeliveryThreshold ? 0 : locationData.deliveryInfo.deliveryFee;
  const finalTotal = totalAmount + deliveryFee;

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isCartOpen ? 'opacity-50' : 'opacity-0'}`}
        onClick={() => toggleCart(false)}
      ></div>
      
      {/* Cart sidebar */}
      <div 
        className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl overflow-auto transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            <button 
              onClick={() => toggleCart(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {orderPlaced ? (
            <div className="text-center py-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-green-500 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="text-xl font-bold text-green-600 mb-2">Order Placed Successfully!</h3>
              <p className="text-gray-600">Thank you for your order. We'll contact you shortly.</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some delicious items to your cart</p>
              <button 
                onClick={() => toggleCart(false)}
                className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-200"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Cart items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <div className="flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.weight}</p>
                        <p className="text-red-600 font-medium">{item.price} EGP</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order summary */}
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>{totalAmount} EGP</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Delivery Fee:</span>
                  <span>{deliveryFee} EGP</span>
                </div>
                <div className="border-t border-gray-300 my-2 pt-2 flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>{finalTotal} EGP</span>
                </div>
                {totalAmount < locationData.deliveryInfo.minOrderAmount && (
                  <p className="text-red-600 text-sm mt-2">
                    Minimum order amount is {locationData.deliveryInfo.minOrderAmount} EGP
                  </p>
                )}
                {totalAmount < locationData.deliveryInfo.freeDeliveryThreshold && (
                  <p className="text-gray-600 text-sm mt-2">
                    Add {locationData.deliveryInfo.freeDeliveryThreshold - totalAmount} EGP more for free delivery
                  </p>
                )}
              </div>
              
              {/* Checkout form */}
              <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-semibold mb-3">Delivery Information</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                      Payment Method
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    >
                      {locationData.paymentMethods.map((method, index) => (
                        <option key={index} value={method}>
                          {method}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Comments (optional)
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={
                    totalAmount < locationData.deliveryInfo.minOrderAmount ||
                    !formData.name ||
                    !formData.phone ||
                    !formData.address
                  }
                  className="w-full py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Place Order
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
