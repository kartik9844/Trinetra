import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

const Smart = () => {
  const navigate = useNavigate();

  const onMaxresdefault3ImageClick = useCallback(() => {
    navigate("/admin-try");
  }, [navigate]);

  const onEquipmentsTextClick = useCallback(() => {
    navigate("/smart");
  }, [navigate]);

  const onOrdersTextClick = useCallback(() => {
    navigate("/orders");
  }, [navigate]);

  const onIconUserClick = useCallback(() => {
    navigate("/admin-profile");
  }, [navigate]);

  const onUsersTextClick = useCallback(() => {
    navigate("/userprofile-admin");
  }, [navigate]);

  const onTitleText1Click = useCallback(() => {
    navigate("/mech");
  }, [navigate]);

  const onTitleText2Click = useCallback(() => {
    navigate("/3d");
  }, [navigate]);

  return (
    <div className="relative w-full flex flex-col items-center justify-start text-center text-mini text-black font-roboto">
      <Navbaradmin
        dimensionCode="/maxresdefault-3@2x.png"
        carDimensions="/-icon-user.svg"
        divframer11lg61rPosition="relative"
        divframer11lg61rTop="unset"
        divframer11lg61rLeft="unset"
        divframer11lg61rWidth="1440px"
        divframer11lg61rMarginBottom="unset"
        maxresdefault3IconLeft="calc(50% - 725px)"
        maxresdefault3IconCursor="unset"
        frameCursor="pointer"
        iconUserCursor="unset"
        onMaxresdefault3ImageClick={onMaxresdefault3ImageClick}
        onEquipmentsTextClick={onEquipmentsTextClick}
        onOrdersTextClick={onOrdersTextClick}
        onIconUserClick={onIconUserClick}
        onUsersTextClick={onUsersTextClick}
      />
      <div className="bg-dwhite w-[1440px] h-[1024px] flex flex-col pt-20 pb-0 pr-0 pl-[220px] box-border items-center justify-start relative">
        <div className="self-stretch my-0 mx-[!important] absolute h-full top-[0px] bottom-[0px] left-[0px] bg-gray-800 overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[0]">
          <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
            <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
              <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                😃
              </div>
            </div>
            <div className="flex-1 relative text-base [text-decoration:underline] leading-[20px] font-medium text-left">
              Smart Lab
            </div>
          </div>
          <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
            <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
              <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                😃
              </div>
            </div>
            <div
              className="flex-1 relative text-base leading-[20px] font-medium text-left cursor-pointer"
              onClick={onTitleText1Click}
            >
              Mech Lab
            </div>
          </div>
          <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
            <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
              <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                😃
              </div>
            </div>
            <div
              className="flex-1 relative text-base leading-[20px] font-medium text-left cursor-pointer"
              onClick={onTitleText2Click}
            >
              3D Lab
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smart;
