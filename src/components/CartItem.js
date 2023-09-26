import React from "react";
import { useCallback ,useState, useContext } from "react";
import FormatPrice from "../context/formateprice";
import CartAmountToggle from "../context/CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/cartcontext'



const CartItem = ({ id, name, day, month, max, nodays, nomonth,total }) => {
  const { removeItem, setDecrease, setIncrement, DDecrease, DetIncrement, MetDecrease, MetIncrement} = useCartContext();
  const [noDays, setNoDays] = useState(nodays);
  const [noMonths, setNoMonths] = useState(nomonth);
  const dayNum = Number(day); 
  const monthNum = Number(month);

  const handleDaysChange = (value) => {
    setNoDays(value);
    // call function with value
    updateDays(id,noDays); 
  }

  const handleMonthsChange = (value) => {
    setNoMonths(value);
    // call function with value
    updateMonths(id,noMonths);
  }

  // const setDecrease = () => {
  //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  // };

  return (
    <div className="relative top-5 w-[1400px] grid grid-cols-8 gap-4 text-center">
        <div>
          <p>{name}</p>
        </div>
      {/* price   */}
      <div className="hidden md:block">
        <p>
        <FormatPrice price={dayNum} />
        </p>
      </div>
      <div className="hidden md:block">
        <p>
        <FormatPrice price={monthNum} />
        </p>
      </div>
      {/* Quantity  */}
      <CartAmountToggle
        amount={max}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />
  <div>
  <CartAmountToggle
        amount={nodays}
        setDecrease={() => DDecrease(id)}
        setIncrease={() => DetIncrement(id)}
      />
</div>

<div>
<CartAmountToggle
        amount={nomonth}
        setDecrease={() => MetDecrease(id)}
        setIncrease={() => MetIncrement(id)}
      />
</div>

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
         <FormatPrice price={total}/>
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;