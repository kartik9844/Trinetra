import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "./MainHeader";

const PaymentFormContainer = () => {
  const navigate = useNavigate();

  const onLogoFramContainerClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onContactContainerClick = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  const onContactContainer1Click = useCallback(() => {
    navigate("/-on-rent-user");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/u-3dlab");
  }, [navigate]);

  const onIconUserClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  return (
    <div
      className="absolute top-[0px] left-[-1px] w-[1442px] h-[151px] overflow-hidden flex flex-col items-center justify-start gap-[17px] cursor-pointer text-left text-17xl text-black font-popins"
      onClick={onFrameContainer2Click}
    >
      <div className="w-[1440px] h-20 overflow-hidden shrink-0 mr-0.5">
        <MainHeader
          propCursor="pointer"
          propCursor1="unset"
          propCursor2="pointer"
          propCursor3="pointer"
          propCursor4="pointer"
          propCursor5="unset"
          onLogoFramContainerClick={onLogoFramContainerClick}
          onContactContainerClick={onContactContainerClick}
          onContactContainer1Click={onContactContainer1Click}
          onProductsTextClick={onProductsTextClick}
          onIconUserClick={onIconUserClick}
        />
      </div>
      
    </div>
  );
};

export default PaymentFormContainer;
