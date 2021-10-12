import { useState, useEffect } from 'react';
import axios from 'axios';
import initialState from '../initialState';

const API = 'https://platzi-conf-merch-back-strapi.herokuapp.com/products';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function productsRequest() {
      const response = await axios(API);
      setProducts(response.data);
      setLoading(false);
    }
    productsRequest();
  }, []);

  const addToCart = (payload) => {
    const product = state.cart.find((item) => item.id === payload.id);
    if (!product) {
      setState({
        ...state,
        cart: [...state.cart, payload],
      });
    }
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    loading,
    state,
    products,
  };
};

export default useInitialState;
