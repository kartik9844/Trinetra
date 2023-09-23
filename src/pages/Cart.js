import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import FormFrame from "../components/FormFrame";

const Cart = () => {
  const navigate = useNavigate();

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
    <div className="relative bg-dwhite w-full h-[1024px] overflow-hidden text-left text-17xl text-black font-popins">
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
      <div className="absolute top-[104px] -left-[33px] w-[376px] overflow-hidden flex flex-col items-end justify-center">
        <div className="relative font-extrabold">Rented Products</div>
      </div>
      <div className="absolute top-[168px] left-[29px] w-[1382px] h-[776px] overflow-hidden flex flex-col items-center justify-center gap-[14px]">
        <div className="w-[1382px] h-[328px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[36px]">
          <div className="relative bg-gainsboro-200 w-[1364px] h-[238px] overflow-hidden shrink-0" />
          <div className="font-extrabold inline-block h-[54px] mr-[1092px]">
            Price Summary
          </div>
        </div>
        <FormFrame />
      </div>
    </div>
  );
};

export default Cart;
