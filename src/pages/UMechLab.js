import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const UMechLab = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onSingoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/u-smart-lab");
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

  const onItemContainerClick = useCallback(() => {
    navigate("/u-smart-lab");
  }, [navigate]);

  const onItemContainer2Click = useCallback(() => {
    navigate("/u-3dlab");
  }, [navigate]);

  const onTitleText2Click = useCallback(() => {
    navigate("/u-3dlab");
  }, [navigate]);

  return (
    <div className="relative w-full h-[1024px] text-center text-mini text-black font-popins">
      <div className="absolute top-[-3px] left-[0px] w-[1441px] overflow-hidden flex flex-col items-end justify-center">
        <div className="bg-dwhite w-[1440px] h-[1027px] flex flex-col pt-[58px] pb-0 pr-0 pl-[220px] box-border items-center justify-start relative">
          <div className="self-stretch my-0 mx-[!important] absolute h-[calc(100%_-_79px)] top-[79px] bottom-[0px] left-[0px] bg-gray-800 overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[0]">
            <div
              className="h-14 flex flex-row py-4 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
              onClick={onItemContainerClick}
            >
              
              <div className="relative text-6xl leading-[20px] font-medium font-poppins text-left inline-block w-36 shrink-0">
                Smart Lab
              </div>
            </div>
            <div className="h-[55px] flex flex-row py-4 px-5 box-border items-center justify-center gap-[12px]">
              
              <div className="relative text-6xl [text-decoration:underline] leading-[20px] font-medium font-poppins text-left inline-block w-36 shrink-0">
                Mech Lab
              </div>
            </div>
            <div
              className="h-14 flex flex-row py-4 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
              onClick={onItemContainer2Click}
            >
             
              <div
                className="relative text-6xl leading-[20px] font-medium font-poppins text-left inline-block w-36 shrink-0 cursor-pointer"
                onClick={onTitleText2Click}
              >
                3D Lab
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainHeader
        propCursor="unset"
        propCursor1="pointer"
        propCursor2="unset"
        propCursor3="pointer"
        propCursor4="unset"
        propCursor5="pointer"
        onLogoImageClick={onLogoImageClick}
        onContactContainer1Click={onContactContainer1Click}
        onProductsTextClick={onProductsTextClick}
        onIconUserClick={onIconUserClick}
        onCa2ImageClick={onCa2ImageClick}
        onSingoutClick={onSingoutClick}
      />
    </div>
  );
};

export default UMechLab;
