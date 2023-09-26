import React from "react";
import { useCallback ,useState, useContext } from "react";
import FormatPrice from "../context/formateprice";
import CartAmountToggle from "../context/CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/cartcontext'



const CartItem = ({ id, name, day, month, max, nodays, nomonth }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();
  const [noDays, setNoDays] = useState(nodays);
  const [noMonths, setNoMonths] = useState(nomonth);
  const dayNum = Number(day); 
  const monthNum = Number(month);

  // const setDecrease = () => {
  //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  // };

  return (
    <div className="relative top-5 w-[1000px] grid grid-cols-8 gap-4 text-center">
        <div>
          <p>{name}</p>
        </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
        <FormatPrice price={dayNum} />
        </p>
      </div>
      <div className="cart-hide">
        <p>
          {monthNum}
        </p>
      </div>
      {/* Quantity  */}
      <CartAmountToggle
        amount={max}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />
  <div>
    <input
  type="number"
  value={noDays}
  onChange={(e) => setNoDays(e.target.value)}
  style={{width: '50px', height: '20px',border: '1px solid gray' }}
/>
</div>

<div>
<input
  type="number"
  value={noMonths}
  onChange={(e) => setNoMonths(e.target.value)} 
  style={{width: '50px', height: '20px',border: '1px solid gray' }}
/>
</div>

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          {nodays * day + nomonth * month}
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;