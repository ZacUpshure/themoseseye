import React, { createContext, useContext, useState, useEffect} from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState();

    useEffect(() => {
        // Load cart items from localStorage when the component mounts
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (savedCartItems) {
          setCartItems(savedCartItems);
        }
      }, []);
    
      useEffect(() => {
        // Save cart items to localStorage whenever cartItems state changes
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems]);

      useEffect(() => {
        // Calculate the total price whenever cartItems changes
        const totalPrice = cartItems.reduce((total, item) => total + item?.price, 0);
        setTotalPrice(totalPrice);
      }, [cartItems]);

    const onAdd = (product) => {
        const checkProductInCart = cartItems.find((item) => item?._id === product?._id);
      
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
        if (checkProductInCart) {
          toast.success(`${product.name} already in cart!`);
        } else {
          setCartItems((prevCartItems) => [...prevCartItems, {...product, quantity: 1}]);
          toast.success(`${product.name} added to the cart!`);
        }
    };

    const onRemove = (productId) => {
        const updatedCartItems = cartItems.filter((item) => item._id !== productId);
        const removedItem = cartItems.find((item) => item._id === productId);
    
        if (removedItem) {
          setTotalPrice((prevTotalPrice) => prevTotalPrice - removedItem.price);
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
          setCartItems(updatedCartItems);
          toast.success(`${removedItem.name} removed from the cart!`);
        }
    };
      

    return(
        <Context.Provider
            value={{showCart, cartItems, totalPrice, totalQuantities, onAdd, setShowCart, onRemove}}
        >
            {children}
        </Context.Provider>
    );
}

export const useStateContext = () => {
    return useContext(Context);
}
