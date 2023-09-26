import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Stack from "@mui/material/Stack";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button ">
      <div className="amount-toggle">
        <button className="inline-block relative -left-2" onClick={() => setDecrease()}>
          -
        </button>
        <div className="inline-block">{amount}</div>
        <button className="inline-block relative left-2" onClick={() => setIncrease()}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;