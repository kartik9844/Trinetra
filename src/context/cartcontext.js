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
        let {id,name,Perdaycost,Permonthcost,qmax} = action.payload;
        //console.log(id,name,Perdaycost,Permonthcost,qmax);

        let existingProduct = state.cart.find((curItem) => curItem.id == id );
   
        
        if(existingProduct){
           let updatedProduct = state.cart.map((curItem) => {
           if(curItem.id == id)
           {
            let qty = curItem.max + 1;
            if( qty >= qmax){
              qty = qmax;
            }
            return {
              ...curItem,
              max: qty,
            }
           }
           else{
            return curItem;
           }
          });
          return {
            ...state,
            cart: updatedProduct,
          }
        }

        else{
        let cp ={
            id: id,
            name: name,
            day: Perdaycost,
            month: Permonthcost,
            max: 1,
            qmax: qmax,
            nodays: 1,
            nomonth : 0,
        };
        //console.log(cp);
        return {
          ...state,
          cart: [...state.cart, cp],  
        };
      }
      case 'REMOVE_ITEM':
        let updatedCart = state.cart.filter(
          (curItem) => curItem.id !== action.payload
        );
        return {
          ...state,
          cart: updatedCart,
        };
      case 'SET_DECREMENT':
        let updatedProduct = state.cart.map((curItem) => {
            if(curItem.id === action.payload){
              let decqty = curItem.max - 1;
              if(decqty <= 1){decqty = 1;}
              return{
                ...curItem,
                max : decqty, 
              }
            }else{
              return curItem;
            }
        });
        return { ...state, cart:updatedProduct  };
        case 'SET_INCREMENT':
          let pdatedProduct = state.cart.map((curItem) => {
              if(curItem.id === action.payload){
                let decqty = curItem.max + 1;
                if(decqty >= curItem.qmax){decqty = curItem.qmax;}
                return{
                  ...curItem,
                  max : decqty, 
                }
              }else{
                return curItem;
              }
          });
          return { ...state, cart:pdatedProduct  };
      default:
        return state;
    }
  }

    const [state, dispatch] = useReducer(cartReducer, initialState);
    
    const addToCart = (id, name,Perdaycost,Permonthcost,qmax) => {
      //...
    //console.log(id, name,Perdaycost,Permonthcost);
      dispatch({ type: "ADD_TO_CART", payload: {id, name,Perdaycost,Permonthcost,qmax} });
    };

    const remove = (id) =>{
      dispatch( {type: "REMOVE_ITEM", payload: (id)});
    }

    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
      };
    
      const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
      };

       // to remove the individual item from cart
       const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      }

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

    return {
        cart,
        setCart,
        ...state,
        addToCart,
        remove,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      };
    }

// const [cart, setCart] = useState([]);

const CartProvider = ({ children }) => {
    const {cart, setCart, addToCart, removeItem,  clearCart, setDecrease, setIncrement} = useCart();

    // const addToCart = (id,Name,Perdaycost,Permonthcost) => {
    //     setCart([...cart, {id:id,Name:Name,Perdaycost:Perdaycost,Permonthcost:Permonthcost}])
    // };
   
    return (<CartContext.Provider value={{cart, addToCart, removeItem, clearCart, setDecrease, setIncrement}}>{ children }</CartContext.Provider>);
};

const useCartContext = () => {
    return useContext(CartContext);
};
export { CartProvider,CartContext,useCartContext };