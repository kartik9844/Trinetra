import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Stack from "@mui/material/Stack";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
      <Stack>
        <button onClick={() => setDecrease()}>
          -
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          +
        </button>
        </Stack>
      </div>
    </div>
  );
};

export default CartAmountToggle;