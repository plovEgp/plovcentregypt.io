import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import { categories, foodItems } from '../data/foodData';

const Menu = () => {
  const { categorySlug } = useParams();
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  
  // Set default active category or from URL param
  useEffect(() => {
    if (categorySlug) {
      const category = categories.find(cat => cat.slug === categorySlug);
      if (category) {
        setActiveCategory(category.id);
      } else {
        setActiveCategory(categories[0].id);
      }
    } else {
      setActiveCategory(categories[0].id);
    }
  }, [categorySlug]);
  
  // Filter items when active category changes
  useEffect(() => {
    if (activeCategory) {
      const items = activeCategory === 'all' 
        ? foodItems 
        : foodItems.filter(item => item.category === activeCategory);
      setFilteredItems(items);
    }
  }, [activeCategory]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Menu</h1>
        <p className="text-gray-700 max-w-3xl">
          Explore our wide variety of authentic Central Asian and Russian dishes. 
          All meals are prepared fresh daily using traditional recipes and the finest ingredients.
        </p>
      </div>
      
      {/* Category Navigation */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full ${
            activeCategory === 'all' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          All Items
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category.id 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Food Items Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No items found in this category.</p>
        </div>
      )}
      
      {/* Category Sections (alternative display method) */}
      <div className="mt-16 space-y-12">
        {categories.map(category => {
          const categoryItems = foodItems.filter(item => item.category === category.id);
          
          return (
            <div key={category.id} id={`category-${category.slug}`}>
              <div className="flex items-center mb-6">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-12 h-12 mr-4"
                />
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryItems.map(item => (
                  <FoodCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
