import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create cart context
const CartContext = createContext();

// Initial state
const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
  isCartOpen: false
};

// Actions
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const CLEAR_CART = 'CLEAR_CART';
const TOGGLE_CART = 'TOGGLE_CART';

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      
      let updatedItems;
      
      if (existingItemIndex >= 0) {
        // Item exists in cart, update quantity
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
      } else {
        // New item, add to cart with quantity 1
        updatedItems = [...state.items, { ...newItem, quantity: 1 }];
      }
      
      // Calculate total items and amount
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalAmount
      };
    }
    
    case REMOVE_FROM_CART: {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      
      // Calculate total items and amount
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalAmount
      };
    }
    
    case UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      
      // Don't allow negative quantities
      if (quantity <= 0) {
        return state;
      }
      
      const updatedItems = state.items.map(item => 
        item.id === id ? { ...item, quantity } : item
      );
      
      // Calculate total items and amount
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalAmount
      };
    }
    
    case CLEAR_CART: {
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalAmount: 0
      };
    }
    
    case TOGGLE_CART: {
      return {
        ...state,
        isCartOpen: action.payload !== undefined ? action.payload : !state.isCartOpen
      };
    }
    
    default:
      return state;
  }
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // Try to load cart from localStorage
  const getInitialState = () => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        return JSON.parse(savedCart);
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
    return initialState;
  };
  
  const [state, dispatch] = useReducer(cartReducer, getInitialState());
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [state]);
  
  // Cart actions
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
  
  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };
  
  const updateQuantity = (id, quantity) => {
    dispatch({ type: UPDATE_QUANTITY, payload: { id, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  
  const toggleCart = (isOpen) => {
    dispatch({ type: TOGGLE_CART, payload: isOpen });
  };
  
  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
