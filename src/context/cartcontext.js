
import { createContext, useEffect } from "react";
import { useState ,useReducer, useContext } from "react";

const CartContext = createContext();

// Custom hook
function useCart() {
    const [cart, setCart] = useState([]);
    // Initial state
    const initialState = {
    cart: [] ,
    totalp: 0,
 
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
          let TT;
           let updatedProduct = state.cart.map((curItem) => {
           if(curItem.id == id)
           {
            let qty = curItem.max + 1;
            TT = state.totalp + (1 * Perdaycost + 0 * Permonthcost);
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
            totalp: TT,
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
            total : 1 * Perdaycost + 0 * Permonthcost,
        };
        //console.log(cp);
        let TT = state.totalp + (1 * Perdaycost + 0 * Permonthcost);

        return {
          ...state,
          cart: [...state.cart, cp],  
          totalp: TT,
        };
      }
      case 'REMOVE_ITEM':
        
        // Find the item being removed
        const itemToRemove = state.cart.find(item => item.id === action.payload);

        // Calculate new total price by subtracting removed item price
        let newTotal = state.totalp - itemToRemove.total;
        let updatedCart = state.cart.filter(
          (curItem) => curItem.id !== action.payload
        );
        return {
          ...state,
          cart: updatedCart,
          totalp: newTotal,
        };
      case 'SET_DECREMENT':
        let Td;
        let updatedProduct = state.cart.map((curItem) => {
            if(curItem.id === action.payload){
              let decqty = curItem.max - 1;
              Td = state.totalp - (curItem.nodays * curItem.day + curItem.nomonth * curItem.month);
              let T = decqty * (curItem.nodays * curItem.day + curItem.nomonth * curItem.month);
              if(decqty <= 1){
                decqty = 1;
                T = decqty * (curItem.nodays * curItem.day + curItem.nomonth * curItem.month);
              }
              return{
                ...curItem,
                max : decqty, 
                total : T,
              }
            }else{
              return curItem;
            }
        });
        return { ...state, cart:updatedProduct,totalp: Td };
        case 'SET_INCREMENT':
          let Ti;
          let pdatedProduct = state.cart.map((curItem) => {
              if(curItem.id === action.payload){
                let decqty = curItem.max + 1;
                Ti = state.totalp + (curItem.nodays * curItem.day + curItem.nomonth * curItem.month);
                let T = decqty * (curItem.nodays * curItem.day + curItem.nomonth * curItem.month);
                if(decqty >= curItem.qmax){
                  decqty = curItem.qmax;
                  T = decqty * (curItem.nodays * curItem.day + curItem.nomonth * curItem.month);
                }
                return{
                  ...curItem,
                  max : decqty, 
                  total : T,
                }
              }else{
                return curItem;
              }
          });
          return { ...state, cart:pdatedProduct ,totalp: Ti };
          case 'DDecrease':
            let tdd;
            let dd = state.cart.map((curItem) => {
                if(curItem.id === action.payload){
                  let decqty = curItem.nodays - 1;
                  tdd = di = state.totalp - Number(curItem.day);
                  let T = curItem.max * (decqty * curItem.day + curItem.nomonth * curItem.month);
                  if(decqty >= 30){decqty = 30;}
                  else if(decqty <= 1){decqty =1;}
                  return{
                    ...curItem,
                    nodays : decqty,
                    total : T, 
                  }
                }else{
                  return curItem;
                }
            });
            return { ...state, cart:dd, totalp:tdd  };
          case 'DetIncrement':
              let tdi;
              let di = state.cart.map((curItem) => {
                  if(curItem.id === action.payload){
                    let decqty = curItem.nodays + 1;
                    tdi = state.totalp + Number(curItem.day);
                    let T = curItem.max * (decqty * curItem.day + curItem.nomonth * curItem.month);
                    if(decqty >= 30){decqty = 30;}
                    else if(decqty <= 1){decqty = 1;}
                    return{
                      ...curItem,
                      nodays : decqty, 
                      total : T,
                    }
                  }else{
                    return curItem;
                  }
              });
              return { ...state, cart:di, totalp:tdi  };
              case 'MetDecrease':
                let tmd;
                let md = state.cart.map((curItem) => {
                    if(curItem.id === action.payload){
                      let decqty = curItem.nomonth - 1;
                      tmd = state.totalp - Number(curItem.month);
                      let T = curItem.max * (curItem.nodays * curItem.day + decqty * curItem.month);
                      if(decqty >= 12){
                        decqty = 12;
                        T = curItem.max * (curItem.nodays * curItem.day + decqty * curItem.month);
                      }
                      else if(decqty <= 0){
                        decqty = 0;
                        T = curItem.max * (curItem.nodays * curItem.day + decqty * curItem.month);
                      }
                      return{
                        ...curItem,
                        nomonth : decqty, 
                        total : T,
                      }
                    }else{
                      return curItem;
                    }
                });
                return { ...state, cart:md, totalp:tmd  };
                case 'MetIncrement':
                  let tmi;
                  let mi = state.cart.map((curItem) => {
                      if(curItem.id === action.payload){
                        let decqty = curItem.nomonth + 1;
                        tmi = state.totalp + Number(curItem.month);
                        let T = curItem.max * (curItem.nodays * curItem.day + decqty * curItem.month);
                        if(decqty >= 12){
                          decqty = 12;
                          T = curItem.max * (curItem.nodays * curItem.day + decqty * curItem.month);
                        }
                        else if(decqty <= 0){
                          decqty = 0;
                          T = curItem.max * (curItem.nodays * curItem.day + decqty * curItem.month);
                        }
                        return{
                          ...curItem,
                          nomonth : decqty,
                          total : T, 
                        }
                      }else{
                        return curItem;
                      }
                  });
                  return { ...state, cart:mi , totalp:tmi };
      case 'totalprice':
        let totalp = state.cart.reduce((Initial, curElem ) => {
          let {total} = curElem;
          Initial = Initial + total;
          return Initial;
        }, 0);
        return {
          ...state,
          totalp,
        }
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

      const DDecrease = (id) => {
        dispatch({ type: "DDecrease", payload: id });
      }

      const DetIncrement = (id) => {
        dispatch({ type: "DetIncrement", payload: id });
      }

      const MetDecrease = (id) => {
        dispatch({ type: "MetDecrease", payload: id });
      }

      const MetIncrement = (id) => {
        dispatch({ type: "MetIncrement", payload: id });
      }

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
   
  // const dispatchTotal = () => {
  //   dispatch({type: 'totalprice'}) 
  // }

  

    return {
        cart,
        setCart,
        ...state,
        addToCart,
        remove,
        removeItem,
        clearCart,
        setDecrease,
        DDecrease,
        DetIncrement,
        MetDecrease,
        MetIncrement,
        setIncrement,
        dispatch,
      };
    }

// const [cart, setCart] = useState([]);

const CartProvider = ({ children }) => {
    const {cart,totalp, state, dispatch, setCart, addToCart, removeItem,  clearCart, setDecrease, setIncrement, DDecrease, DetIncrement, MetDecrease, MetIncrement,dispatchTotal } = useCart();

    // const addToCart = (id,Name,Perdaycost,Permonthcost) => {
    //     setCart([...cart, {id:id,Name:Name,Perdaycost:Perdaycost,Permonthcost:Permonthcost}])
    // };
    // useEffect(() => {
    //   dispatch({type :"totalprice"})
    // });
    
   
    return (<CartContext.Provider value={{cart, totalp, addToCart, removeItem, clearCart, setDecrease, setIncrement,DDecrease, DetIncrement, MetDecrease, MetIncrement}}>{ children }</CartContext.Provider>);
};

const useCartContext = () => {
    return useContext(CartContext);
};
export { CartProvider,CartContext,useCartContext };