import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import FoodCard from '../components/FoodCard';
import { categories, foodItems } from '../data/foodData';
import locationData from '../data/locationData';

const Home = () => {
  // Get featured food items (limited selection for homepage)
  const featuredItems = foodItems.slice(0, 8);
  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Authentic Central Asian Cuisine in Cairo
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Discover delicious Uzbek and Russian food with fast delivery from {locationData.name}
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/menu" 
                  className="bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition duration-200 inline-flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Order Now
                </Link>
                <a 
                  href={`tel:${locationData.phone}`}
                  className="border border-red-600 text-red-600 py-3 px-6 rounded-md font-medium hover:bg-red-50 transition duration-200 inline-flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Call Us
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="text-sm text-gray-700">{locationData.deliveryInfo.averageTime}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  <span className="text-sm text-gray-700">Free delivery from {locationData.deliveryInfo.freeDeliveryThreshold} EGP</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="/images/hero-food.jpg" 
                alt="Delicious Central Asian Food" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-md p-4 hidden md:block">
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full w-3 h-3 mr-2"></div>
                  <span className="font-medium">Open now</span>
                </div>
                <p className="text-sm text-gray-600">{locationData.workingHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Food Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
            <Link 
              to="/menu" 
              className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition duration-200"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800">View Full Menu</h3>
                <p className="text-sm text-gray-500">All dishes</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Popular Dishes Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Popular Dishes</h2>
            <Link to="/menu" className="text-red-600 hover:text-red-700 font-medium flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredItems.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/images/restaurant.jpg" 
                alt="Cairo Plov Center Restaurant" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About {locationData.name}</h2>
              <p className="text-gray-700 mb-6">
                Welcome to Cairo Plov Center, your destination for authentic Uzbek and Russian cuisine in the heart of Cairo. 
                We take pride in our traditional recipes and use only the freshest ingredients to bring the rich flavors of 
                Central Asia to your table.
              </p>
              <p className="text-gray-700 mb-6">
                Our chefs have years of experience preparing classic dishes like Plov, Manti, and Shashlik to perfection. 
                Whether you're dining in or ordering delivery, we guarantee a delicious culinary experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-lg text-red-600 mb-2">Fast Delivery</h3>
                  <p className="text-gray-700 text-sm">Delivery to all areas of Cairo in {locationData.deliveryInfo.averageTime}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-lg text-red-600 mb-2">Quality Food</h3>
                  <p className="text-gray-700 text-sm">Authentic taste with the freshest ingredients</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-lg text-red-600 mb-2">Best Prices</h3>
                  <p className="text-gray-700 text-sm">Affordable prices with regular promotions</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-lg text-red-600 mb-2">Online Ordering</h3>
                  <p className="text-gray-700 text-sm">Easy and convenient online ordering 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-12 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Place your order now and enjoy delicious Uzbek and Russian cuisine delivered right to your doorstep.
          </p>
          <Link
            to="/menu"
            className="bg-white text-red-600 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition duration-200 inline-flex items-center"
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

export default Home;
