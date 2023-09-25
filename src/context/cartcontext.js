import { createContext } from "react";
import { useState ,useReducer, useContext } from "react";

const CartContext = createContext();

// Custom hook
function useCart() {
    const [cart, setCart] = useState([]);
    // Initial state
    const initialState = {
    cart: []  
    }
    
    // Reducer 
     const cartReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_TO_CART':
        // Return updated cart
        let {id,name,day,month,max} = action.payload;

        let cp ={
            id: id,
            name: name,
            day: day,
            month: month,
            max: max,
            nodays: 1,
            nomonth : 0,
        };
        return {
          ...state,
          cart: [...state.cart, cp],  
        };
      
      default:
        return state;
    }
  }

    const [state, dispatch] = useReducer(cartReducer, initialState);
    
    const addToCart = (id, name,Perdaycost,Permonthcost,qmax) => {
      //...
    //   console.log(id, name,Perdaycost,Permonthcost);
      dispatch({ type: "ADD_TO_CART", payload: {id, name,Perdaycost,Permonthcost,qmax} });
    };
    return {
        cart,
        setCart,
        ...state,
        addToCart
      };
    }

// const [cart, setCart] = useState([]);

const CartProvider = ({ children }) => {
    const {cart, setCart, addToCart} = useCart();

    // const addToCart = (id,Name,Perdaycost,Permonthcost) => {
    //     setCart([...cart, {id:id,Name:Name,Perdaycost:Perdaycost,Permonthcost:Permonthcost}])
    // };
    return (<CartContext.Provider value={{cart, addToCart}}>{ children }</CartContext.Provider>);
};

const useCartContext = () => {
    return useContext(CartContext);
};
export { CartProvider,CartContext };