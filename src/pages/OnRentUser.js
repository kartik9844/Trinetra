import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const OnRentUser = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onSingoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactContainerClick = useCallback(() => {
    navigate("/payments");
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

  const onTitleText1Click = useCallback(() => {
    navigate("/rented-user");
  }, [navigate]);

  return (
      <div className="relative w-[1440px] h-[1016px]">
        <div className="absolute top-[0px] left-[0px] bg-dwhite w-[1440px] h-[1016px] flex flex-col pt-20 pb-0 pr-0 pl-[220px] box-border items-center justify-center">
          <div className="self-stretch my-0 mx-[!important] absolute h-[calc(100%_-_68px)] top-[68px] bottom-[0px] left-[0px] bg-gray-800 overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[0]">
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div className="flex-1 relative text-[22px] [text-decoration:underline] leading-[20px] font-medium font-poppins text-left">
                On Rent
              </div>
            </div>
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div
                className="flex-1 relative text-[26px] leading-[20px] font-medium font-poppins text-left cursor-pointer"
                onClick={onTitleText1Click}
              >
                Rented
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[98px] left-[248px] text-17xl leading-[24px] uppercase font-extrabold font-poppins text-left inline-block w-[310px] h-[39px]">
          On rent
        </div>
        <MainHeader
          propCursor="unset"
          propCursor1="pointer"
          propCursor2="pointer"
          propCursor3="unset"
          propCursor4="pointer"
          propCursor5="pointer"
          onLogoImageClick={onLogoImageClick}
          onContactContainerClick={onContactContainerClick}
          onProductsTextClick={onProductsTextClick}
          onIconUserClick={onIconUserClick}
          onCa2ImageClick={onCa2ImageClick}
          onSingoutClick={onSingoutClick}
        />
      </div>
    
  );
};

export default OnRentUser;
