import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
  const navigate = useNavigate();

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

  const onCa2ImageClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className="relative bg-dwhite w-full h-[1024px] overflow-hidden text-left text-17xl text-black font-poppins">
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
      <div className="absolute top-[0px] left-[0px] w-[1444px] h-[83px] overflow-hidden flex flex-col items-start justify-end text-16xl text-dwhite font-inter">
        <div className="relative w-[500px] h-[50px]" />
        <div className="relative bg-gray-400 w-[1430px] h-20 mt-[-190px]">
          <div className="absolute top-[calc(50%_-_41px)] left-[calc(50%_-_720px)] w-[270px] h-[76px] flex flex-row pt-[7px] px-0 pb-[3px] box-border items-center justify-between">
            <img
              className="relative w-[244.5px] h-[82px] object-cover"
              alt=""
              src="/logo1@2x.png"
            />
          </div>
          <div
            className="absolute w-[calc(100%_-_1274px)] top-[24px] right-[666px] left-[608px] flex flex-row pt-0 px-0 pb-[1px] box-border items-start justify-start cursor-pointer"
            onClick={onContactContainerClick}
          >
            <div className="relative leading-[24px] font-medium">Payments</div>
          </div>
          <div
            className="absolute w-[calc(100%_-_1325px)] top-[26px] right-[454.5px] left-[880.5px] flex flex-row pt-0 px-0  box-border items-start justify-start cursor-pointer"
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
            className="absolute h-[78.75%] w-[6.93%] top-[11.25%] right-[1.74%] bottom-[10%] left-[93.33%] max-w-full overflow-hidden max-h-full cursor-pointer"
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
      </div>
    </div>
  );
};

export default UserHome;
