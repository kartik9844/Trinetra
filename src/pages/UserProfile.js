import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const UserProfile = () => {
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
    <div className="relative w-full h-[1003px] text-left text-17xl text-black font-popins">
      <div className="absolute top-[18px] left-[-2px] w-[1442px] h-[985px]">
        <div className="absolute top-[0px] left-[2px] bg-dwhite w-[1440px] h-[985px] flex flex-col pt-20 pb-0 pr-0 pl-[220px] box-border items-center justify-center">
          <div className="relative -top-[300px] w-[1121px] h-[192px] z-[0]">
            <div className="absolute top-[0px] left-[0px] bg-silver w-[1121px] h-[343px]" />
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
              className="absolute top-[418px] left-[336px]"
              sx={{ width: 225 }}
              variant="contained"
              color="primary"
            >
              Button
            </Button>
            <Button
              className="absolute top-[418px] left-[703px]"
              sx={{ width: 225 }}
              variant="contained"
              color="primary"
            >
              Button
            </Button>
          </div>
          <div className="my-0 mx-[!important] absolute h-[calc(100%_-_87px)] top-[87px] bottom-[0px] left-[0px] bg-gray-800 w-[220px] overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[1] text-center text-mini font-popins">
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div className="flex-1 relative text-6xl [text-decoration:underline] leading-[20px] font-medium font-popins text-left">
                Account
              </div>
            </div>
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div className="flex-1 relative text-8xl leading-[20px] font-medium font-popins text-left">
                Profile
              </div>
            </div>
          </div>
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
        onProductsTextClick={onProductsTextClick}
        onIconUserClick={onIconUserClick}
        onCa2ImageClick={onCa2ImageClick}
        onSingoutClick={onSingoutClick}
      />
      </div>
    </div>
  );
};

export default UserProfile;
