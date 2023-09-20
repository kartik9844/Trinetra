import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const RentedUser = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
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

  const onTitleTextClick = useCallback(() => {
    navigate("/-on-rent-user");
  }, [navigate]);

  return (
    <div className="relative w-full h-[1016px] flex flex-col items-center justify-start text-center text-mini text-black font-popins">
      <div className="relative w-[1440px] h-[1016px]">
        <div className="absolute top-[0px] left-[0px] bg-dwhite w-[1440px] h-[1016px] flex flex-col pt-20 pb-0 pr-0 pl-[220px] box-border items-center justify-center">
          <div className="self-stretch my-0 mx-[!important] absolute h-[calc(100%_-_68px)] top-[68px] bottom-[0px] left-[0px] bg-gray-800 overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[0]">
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div
                className="flex-1 relative text-6xl leading-[20px] font-medium font-popins text-left cursor-pointer"
                onClick={onTitleTextClick}
              >
                On Rent
              </div>
            </div>
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div className="flex-1 relative text-6xl [text-decoration:underline] leading-[20px] font-medium font-popins text-left">
                Rented
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[100px] left-[247px] text-17xl leading-[24px] uppercase font-extrabold font-popins text-left inline-block w-[310px] h-[39px]">
          rented
        </div>
        <MainHeader
          onLogoImageClick={onLogoImageClick}
          onContactContainer1Click={onContactContainer1Click}
          onProductsTextClick={onProductsTextClick}
          onIconUserClick={onIconUserClick}
          onCa2ImageClick={onCa2ImageClick}
        />
      </div>
    </div>
  );
};

export default RentedUser;
