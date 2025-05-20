import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/menu/${category.slug}`}
      className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition duration-200"
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-orange-50 flex items-center justify-center mb-4 relative overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-16 h-16 object-contain"
          />
          <div className="absolute inset-0 rounded-full border-2 border-orange-100"></div>
        </div>
        <h3 className="font-medium text-gray-800">{category.name}</h3>
        <p className="text-sm text-gray-500">{category.nameArabic}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
