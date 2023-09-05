import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Payments = () => {
  const navigate = useNavigate();

  const onLogoFramContainerClick = useCallback(() => {
    navigate("/user-home");
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

  const onCa2ImageClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className="relative bg-dwhite w-full h-[1024px] overflow-hidden flex flex-col items-start justify-start gap-[32px] text-left text-16xl text-dwhite font-inter">
      <div className="relative bg-gray-400 w-[1440px] h-20">
        <div
          className="absolute top-[calc(50%_-_41px)] left-[calc(50%_-_720px)] w-[248px] h-[73px] flex flex-row pt-[7px] px-0 pb-[3px] box-border items-center justify-between cursor-pointer"
          onClick={onLogoFramContainerClick}
        >
          <img
            className="relative w-[246.5px] h-[82px] object-cover"
            alt=""
            src="/logo1@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_1274px)] top-[24px] right-[666px] left-[608px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start">
          <div className="relative leading-[24px] font-medium">Payments</div>
        </div>
        <div
          className="absolute w-[calc(100%_-_1325px)] top-[26px] right-[444.5px] left-[880.5px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start cursor-pointer"
          onClick={onContactContainer1Click}
        >
          <div className="relative leading-[24px] font-medium">Orders</div>
        </div>
        <div
          className="absolute top-[24px] left-[355px] leading-[24px] font-medium flex items-center w-40 h-7 cursor-pointer"
          onClick={onProductsTextClick}
        >
          Products
        </div>
        <img
          className="absolute h-[78.75%] w-[4.93%] top-[11.25%] right-[1.74%] bottom-[10%] left-[93.33%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="/-icon-user.svg"
          onClick={onIconUserClick}
        />
        <img
          className="absolute top-[7px] left-[1174px] w-[71px] h-[67px] object-cover cursor-pointer"
          alt=""
          src="/ca-2@2x.png"
          onClick={onCa2ImageClick}
        />
      </div>
      <div className="text-17xl font-extrabold font-poppins text-black inline-block h-[54px] ml-7">
        Payments
      </div>
    </div>
  );
};

export default Payments;
