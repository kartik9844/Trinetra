import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const onLogoFramContainerClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onContactContainerClick = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  const onOrdersTextClick = useCallback(() => {
    navigate("/-on-rent-user");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/u-3dlab");
  }, [navigate]);

  const onCa2ImageClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className="relative w-full h-[1003px] text-left text-17xl text-black font-poppins">
      <div className="absolute top-[18px] left-[-2px] w-[1442px] h-[985px]">
        <div className="absolute top-[0px] left-[2px] bg-dwhite w-[1440px] h-[985px] flex flex-col pt-20 pb-0 pr-0 pl-[220px] box-border items-center justify-center">
          <div className="relative w-[1121px] h-[792px] z-[0]">
            <div className="absolute top-[0px] left-[0px] bg-silver w-[1121px] h-[703px]" />
            <div className="absolute top-[22px] left-[44px] capitalize font-extrabold">
              Name:
            </div>
            <div className="absolute top-[128px] left-[44px] capitalize font-extrabold">
              Email:
            </div>
            <div className="absolute top-[241px] left-[44px] capitalize font-extrabold">
              Password:
            </div>
            <Button
              className="absolute top-[718px] left-[336px]"
              sx={{ width: 225 }}
              variant="contained"
              color="primary"
            >
              Button
            </Button>
            <Button
              className="absolute top-[718px] left-[703px]"
              sx={{ width: 225 }}
              variant="contained"
              color="primary"
            >
              Button
            </Button>
          </div>
          <div className="my-0 mx-[!important] absolute h-[calc(100%_-_87px)] top-[87px] bottom-[0px] left-[0px] bg-gray-800 w-[220px] overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[1] text-center text-mini font-roboto">
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div className="flex-1 relative text-6xl [text-decoration:underline] leading-[20px] font-medium font-poppins text-left">
                Account
              </div>
            </div>
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div className="flex-1 relative text-8xl leading-[20px] font-medium font-poppins text-left">
                Profile
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[1440px] h-[76.1px] text-16xl text-dwhite font-inter">
          <div
            className="absolute top-[calc(50%_-_41.05px)] left-[calc(50%_-_720px)] w-[248px] h-[73px] flex flex-row pt-[7px] px-0 pb-[3px] box-border items-center justify-between cursor-pointer"
            onClick={onLogoFramContainerClick}
          >
            <img
              className="relative w-[246.5px] h-[82px] object-cover"
              alt=""
              src="/logo1@2x.png"
            />
          </div>
          <div
            className="absolute w-[calc(100%_-_1274px)] top-[24px] right-[666px] left-[608px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start cursor-pointer"
            onClick={onContactContainerClick}
          >
            <div className="relative leading-[24px] font-medium">Payments</div>
          </div>
          <div className="absolute w-[calc(100%_-_1325px)] top-[26px] right-[444.5px] left-[880.5px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start">
            <div
              className="relative leading-[24px] font-medium cursor-pointer"
              onClick={onOrdersTextClick}
            >
              Orders
            </div>
          </div>
          <div
            className="absolute top-[24px] left-[355px] leading-[24px] font-medium flex items-center w-40 h-7 cursor-pointer"
            onClick={onProductsTextClick}
          >
            Products
          </div>
          <img
            className="absolute h-[79.13%] w-[4.93%] top-[11.06%] right-[1.74%] bottom-[9.81%] left-[93.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/-icon-user2.svg"
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

export default UserProfile;
