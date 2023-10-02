import { useCallback ,useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import FormFrame from "../components/FormFrame";
import { CartContext } from '../context/cartcontext';
import CartItem from '../components/CartItem';
import FormatPrice from "../context/formateprice";
import { TextField, Button } from "@mui/material";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  FirebaseFirestoreSwift,
  doc,query,where,
} from "firebase/firestore";
import { db} from "../components/firebase";
import firebase from 'firebase/compat/app';

const Cart = () => {
  const navigate = useNavigate();
  const {cart, totalp,state, dispatchTotal,clearCart} = useContext(CartContext);
  const [person,setperson]= useState("")
  
   // Current state
   const [curr , setCurr] = useState('');
    
   // Function to get time and date
   const getDate = () => {
       const a = firebase.firestore.Timestamp.now();
           console.log(a);
       setCurr(a);
   }

  useEffect(() => {
    dispatchTotal();
    });
  
  // console.log(cart);
  const onSingoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoFramContainerClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/u-smart-lab");
  }, [navigate]);

  const onContactContainerClick = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  const onContactContainer1Click = useCallback(() => {
    navigate("/-on-rent-user");
  }, [navigate]);

  const onIconUserClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onCa2ImageClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // const map1 = new Map(
    //   cart.map(obj => {
    //     return [obj.id, obj.name, obj.day, obj.month, obj.max, obj.qmax, obj.nodays, obj.nomonth, obj.total];
    //   }),
    // )
    const cartMap = {};

  cart.forEach((item, index) => {
    getDate();
    cartMap[index] = {
      pid: item.id,
      name: item.name,
      cmonth: item.month,
      dcost: item.day,
      max: item.max,
      qmax: item.qmax,
      nodays: item.nodays,
      nomonths: item.nomonth,
      STotal: item.total,
    };
  });
  console.log(cartMap)
  const docData = {
    Lab: "Smart lab",
    Person: person,
    Status: "Pending",
    Totalamount: totalp,
    cart: cartMap,
    Uuid: localStorage.getItem("uuid"),
  };
    const docRef = await addDoc(collection(db, "Order history"), docData);
    console.log("Document written with ID: ", docRef.id);
    const docid = docRef.id;
    console.log(docData);
    for (const key in cartMap) {
      const cartItem = cartMap[key];
      const { nodays, nomonths } = cartItem;
      const updatedCartItem = {
        ...cartItem,
        reference: `${docid}`,
        Person: person,
        Status: "Pending",
        Lab: "Smart lab",
        Uuid: localStorage.getItem("uuid"),
      }
      const docRefi = await addDoc(collection(db, "Order"), updatedCartItem);
      console.log("Document written with ID: ", docRefi.id);
    }
    alert("rent order submited")
    clearCart();
    onLogoFramContainerClick();
  };

  return (
    <div className="font-popins">
    <MainHeader
        propCursor="pointer"
        propCursor1="unset"
        propCursor2="pointer"
        propCursor3="pointer"
        propCursor4="unset"
        propCursor5="pointer"
        onLogoFramContainerClick={onLogoFramContainerClick}
        onContactContainerClick={onContactContainerClick}
        onContactContainer1Click={onContactContainer1Click}
        onProductsTextClick={onProductsTextClick}
        onIconUserClick={onIconUserClick}
        onCa2ImageClick={onCa2ImageClick}
        onSingoutClick={onSingoutClick}
      />
      <div className="fixed top-[90px] left-[100px] h-screen w-full overflow-y-scroll flex-1">
        <div className="relative top-5 w-[1400px] grid grid-cols-8 gap-4 text-center">
          <p>Item</p>
          <p className="hidden md:block">Per Day Cost</p>
          <p className="hidden md:block">Per Month Cost</p>
          <p >qty</p>
          <p >Days</p>
          <p >month</p>
          <p >total</p>
          <p>Remove</p>
        </div>
        <hr className="my-4 w-[1400px]" />
        <div className="space-y-4">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div> 
        <hr className="my-4 w-[1400px]" />
        <div className="flex justify-between items-center space-x-4">
        <div className="border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p>order total:</p>
                <p>
                  <FormatPrice price={totalp} />
                </p>
              </div>
              <div className="relative top-[50px] -left-[78px]">
             <label>Name:</label> 
              <input 
              type="text" 
              value={person}
              onChange={(e) => setperson(e.target.value)}
              className="border border-black relative left-2"
              />
            </div>
            </div>
            <button className="btn btn-primary relative top-2" onClick={handleSubmit}  >Rent Now</button>
          </div>
        </div> 
      </div>        
    </div>
  );
};

export default Cart;
