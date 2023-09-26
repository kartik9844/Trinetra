import { useCallback ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import FormFrame from "../components/FormFrame";
import { CartContext } from '../context/cartcontext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const navigate = useNavigate();
  const {cart} = useContext(CartContext);
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
        <div className="relative top-5 w-[1000px] grid grid-cols-8 gap-4 text-center">
          <p>Item</p>
          <p className="hidden md:block">Per Day Cost</p>
          <p className="hidden md:block">Per Month Cost</p>
          <p >qty</p>
          <p >Days</p>
          <p >month</p>
          <p >total</p>
          <p>Remove</p>
        </div>
        <hr className="my-4 w-[1000px]" />
        <div className="space-y-4">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div> 
        <hr className="my-4 w-[1000px]" />
        <div className="flex justify-between items-center space-x-4">
          {/* <NavLink to="/products">
            <button className="btn btn-primary">continue Shopping</button>
          </NavLink> */}
          {/* <button className="btn btn-clear" onClick={clearCart}>
            clear cart
          </button> */}
        </div>

        {/* order total_amount */}
        
      </div>
      <div className="relative top-11 right-10 mt-16 flex justify-end">
            <button className="btn btn-primary">Proceed to checkout</button>
        </div>
    </div>
  );
};

export default Cart;
