import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Stack from "@mui/material/Stack";
// import { useCartContext } from '../context/cartcontext'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";



const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  // const { removeItem} = useCartContext();
  // const [noDays, setNoDays] = useState(amount);
  // const handleDaysChange = (value) => {
  //   setNoDays(value);
  //   // call function with value
  //   updateDays(id,noDays); 
  // }
  return (
    <div className="cart-button ">
      <div className="amount-toggle">
        <button className="inline-block relative -left-2" onClick={() => setDecrease()}>
          -
        </button>
        <div className="inline-block">{amount}</div>
        {/* <Form.Group className=" inline-block">
              <Form.Control type="text"  value={amount} className="w-[40px]" />
            </Form.Group> */}
        <button className="inline-block relative left-2" onClick={() => setIncrease()}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;