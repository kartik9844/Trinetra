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
          total : 1 * Perdaycost + 0 * Permonthcost,
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
      return { ...state, cart:updatedProduct  };
      case 'SET_INCREMENT':
        let pdatedProduct = state.cart.map((curItem) => {
            if(curItem.id === action.payload){
              let decqty = curItem.max + 1;
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
        return { ...state, cart:pdatedProduct  };
        case 'DDecrease':
          let dd = state.cart.map((curItem) => {
              if(curItem.id === action.payload){
                let decqty = curItem.nodays - 1;
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
          return { ...state, cart:dd  };
        case 'DetIncrement':
            let di = state.cart.map((curItem) => {
                if(curItem.id === action.payload){
                  let decqty = curItem.nodays + 1;
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
            return { ...state, cart:di  };
            case 'MetDecrease':
              let md = state.cart.map((curItem) => {
                  if(curItem.id === action.payload){
                    let decqty = curItem.nomonth - 1;
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
              return { ...state, cart:md  };
              case 'MetIncrement':
                let mi = state.cart.map((curItem) => {
                    if(curItem.id === action.payload){
                      let decqty = curItem.nomonth + 1;
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
                return { ...state, cart:mi  };
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

export default cartReducer;