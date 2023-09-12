import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

const Smart = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/admin-try");
  }, [navigate]);

  const onEquipmentsTextClick = useCallback(() => {
    navigate("/smart");
  }, [navigate]);

  const onOrdersTextClick = useCallback(() => {
    navigate("/orders");
  }, [navigate]);

  const onAddTextClick = useCallback(() => {
    navigate("/add-product");
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
    <div >
      <Navbaradmin
        dimensionCode="/maxresdefault-33@2x.png"
        carDimensions="/-icon-user.svg"
        onEquipmentsTextClick={onEquipmentsTextClick}
        onOrdersTextClick={onOrdersTextClick}
        onAddTextClick={onAddTextClick}
        onIconUserClick={onIconUserClick}
        onUsersTextClick={onUsersTextClick}
        onMaxresdefault3ImageClick={onImageClick}
      />
      <div >
        <div className="self-stretch my-0 mx-[!important] absolute h-90 top-[80px] bottom-[0px] left-[0px] bg-gray-800 overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[0]">
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
