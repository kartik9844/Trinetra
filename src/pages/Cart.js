import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PaymentFormContainer from "../components/PaymentFormContainer";
import FormFrame from "../components/FormFrame";

const Cart = () => {
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

  return (
    <div className="relative bg-dwhite w-full h-[1024px] overflow-hidden text-left text-17xl text-black font-poppins">
      <PaymentFormContainer />
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
