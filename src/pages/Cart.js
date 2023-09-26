import { useCallback ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import FormFrame from "../components/FormFrame";
import { CartContext } from '../context/cartcontext';
import CartItem from '../components/CartItem';
import FormatPrice from "../context/formateprice";

const Cart = () => {
  const navigate = useNavigate();
  const {cart, totalp} = useContext(CartContext);
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
            </div>
            <button className="btn btn-primary">Proceed to checkout</button>
          </div>
        </div>

        {/* order total_amount */}
        
      </div>
       {/* order total_amount */}
       {/* <div className="lg:hidden mt-4">
          <div className="border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p>order total:</p>
                <p>
                  <FormatPrice price={10} />
                </p>
              </div>
            </div>
            <button className="btn btn-primary">Proceed to checkout</button>
          </div>
        </div> */}
        
    </div>
  );
};

export default Cart;
