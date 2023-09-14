import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const UserHome = () => {
  const navigate = useNavigate();

  const onLogoFramContainerClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onSingoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/u-3dlab");
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
      <div className="absolute top-[230px] left-[99px] bg-gainsboro-200 w-[1260px] h-[310px] hidden" />
      <div className="absolute top-[154px] left-[0px] w-[376px] overflow-hidden flex flex-col items-end justify-center">
        <div className="relative font-extrabold">Rented Products</div>
      </div>
      <div className="absolute top-[529px] left-[0px] w-[266px] overflow-hidden flex flex-col items-end justify-center">
        <div className="relative font-extrabold">Payments</div>
      </div>
      <img
        className="absolute top-[602px] left-[0px] w-[1354px] h-[333px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
      <div className="absolute top-[230px] left-[0px] w-[1354px] overflow-hidden flex flex-col items-end justify-center">
        <div className="relative bg-gainsboro-200 w-[1274px] h-[293px]" />
      </div>
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
    </div>
  );
};

export default UserHome;
