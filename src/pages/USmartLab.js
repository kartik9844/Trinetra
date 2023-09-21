import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const USmartLab = () => {
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

  const onItemContainer1Click = useCallback(() => {
    navigate("/u-mech-lab");
  }, [navigate]);

  const onTitleText1Click = useCallback(() => {
    navigate("/u-mech-lab");
  }, [navigate]);

  const onTitleText2Click = useCallback(() => {
    navigate("/u-3dlab");
  }, [navigate]);

  return (
    <div className="relative w-full h-[1024px] text-center text-mini text-black font-popins">
      <div className="absolute top-[-3px] left-[0px] w-[1441px] overflow-hidden flex flex-col items-end justify-center">
        <div className="bg-dwhite w-[1440px] h-[1027px] flex flex-col pt-[58px] pb-0 pr-0 pl-[220px] box-border items-center justify-start relative">
          <div className="self-stretch my-0 mx-[!important] absolute h-[calc(100%_-_79px)] top-[79px] bottom-[0px] left-[0px] bg-gray-800 overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[0]">
            <div className="h-14 flex flex-row py-4 px-5 box-border items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div className="relative text-6xl [text-decoration:underline] leading-[20px] font-medium font-popins text-left inline-block w-36 shrink-0">
                Smart Lab
              </div>
            </div>
            <div
              className="h-[55px] flex flex-row py-4 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
              onClick={onItemContainer1Click}
            >
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div
                className="relative text-6xl leading-[20px] font-medium font-poppins text-left inline-block w-36 shrink-0 cursor-pointer"
                onClick={onTitleText1Click}
              >
                Mech Lab
              </div>
            </div>
            <div className="h-14 flex flex-row py-4 px-5 box-border items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div
                className="relative text-6xl leading-[20px] font-medium font-popins text-left inline-block w-36 shrink-0 cursor-pointer"
                onClick={onTitleText2Click}
              >
                3D Lab
              </div>
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
        onContactContainer1Click={onContactContainer1Click}
        onProductsTextClick={onProductsTextClick}
        onIconUserClick={onIconUserClick}
        onCa2ImageClick={onCa2ImageClick}
        onSingoutClick={onSingoutClick}
      />
    </div>
  );
};

export default USmartLab;
