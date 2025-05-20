import React from 'react';
import { Link } from 'react-router-dom';
import locationData from '../data/locationData';

const Delivery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment & Delivery</h1>
        <p className="text-gray-700 max-w-3xl">
          Learn about our delivery service, payment options, and order process at {locationData.name}.
        </p>
      </div>
      
      {/* Delivery Information */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Information</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Delivery Areas</h3>
            <p className="text-gray-700 mb-4">
              We deliver to all areas in Cairo. Delivery time may vary depending on your location and traffic conditions.
            </p>
            
            <h3 className="text-lg font-semibold mb-4 text-red-600">Delivery Hours</h3>
            <p className="text-gray-700 mb-6">
              Our delivery service is available during our working hours:
              <br />
              <span className="font-medium">{locationData.workingHours}</span>
            </p>
            
            <div className="bg-red-50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2 text-red-600">Contact Us</h3>
              <p className="text-gray-700 mb-2">
                If you have any questions about delivery, please contact us:
              </p>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href={`tel:${locationData.phone}`} className="text-red-600 hover:underline">{locationData.phone}</a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${locationData.email}`} className="text-red-600 hover:underline">{locationData.email}</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Delivery Terms</h3>
            <ul className="space-y-4">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="font-medium">Minimum Order Amount:</p>
                  <p className="text-gray-700">{locationData.deliveryInfo.minOrderAmount} EGP</p>
                </div>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="font-medium">Delivery Fee:</p>
                  <p className="text-gray-700">{locationData.deliveryInfo.deliveryFee} EGP</p>
                </div>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="font-medium">Free Delivery:</p>
                  <p className="text-gray-700">For orders over {locationData.deliveryInfo.freeDeliveryThreshold} EGP</p>
                </div>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="font-medium">Average Delivery Time:</p>
                  <p className="text-gray-700">{locationData.deliveryInfo.averageTime}</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-red-600">Order Tracking</h3>
              <p className="text-gray-700 mb-4">
                After placing your order, you will receive a confirmation call from our operator. 
                You can also track your order status by calling our support team.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Methods */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-6">
              We offer several convenient payment options to make your ordering experience as smooth as possible:
            </p>
            
            <ul className="space-y-4">
              {locationData.paymentMethods.map((method, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 text-red-600 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <div>
                    <p className="font-medium">{method}</p>
                    <p className="text-gray-600 text-sm">
                      {method === 'Cash on Delivery' && 'Pay in cash when your order arrives'}
                      {method === 'Credit Card' && 'Secure online credit card payment'}
                      {method === 'Debit Card' && 'Pay directly from your bank account'}
                      {method === 'Mobile Wallet' && 'Pay using your mobile wallet app'}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-red-600">Payment Security</h3>
            <p className="text-gray-700 mb-4">
              All online payments are processed through secure payment gateways. Your payment information is encrypted and never stored on our servers.
            </p>
            
            <h3 className="text-lg font-semibold mb-4 text-red-600">Receipt</h3>
            <p className="text-gray-700 mb-4">
              A receipt will be provided with your order. If you need an additional receipt or invoice, please contact our customer service.
            </p>
          </div>
        </div>
      </div>
      
      {/* How to Order */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Order</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Choose Your Items</h3>
            <p className="text-gray-700">Browse our menu and add items to your cart</p>
          </div>
          
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Review Your Cart</h3>
            <p className="text-gray-700">Check your items and proceed to checkout</p>
          </div>
          
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Complete Order</h3>
            <p className="text-gray-700">Enter delivery details and payment information</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link
            to="/menu"
            className="bg-red-600 text-white py-3 px-8 rounded-md font-medium hover:bg-red-700 transition duration-200 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
