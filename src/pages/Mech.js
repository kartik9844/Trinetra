import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

const Mech = () => {
  const navigate = useNavigate();

  const onEquipmentsTextClick = useCallback(() => {
    navigate("/smart");
  }, [navigate]);

  const onOrdersTextClick = useCallback(() => {
    navigate("/orders");
  }, [navigate]);

  const onSingoutClick = useCallback(() => {
    navigate("/");
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

  const onImageClick = useCallback(() => {
    navigate("/admin-try");
  }, [navigate]);

  const onTitleTextClick = useCallback(() => {
    navigate("/smart");
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
        onSingoutClick={onSingoutClick}
      />
      <div >
        <div className="self-stretch my-0 mx-[!important] absolute h-full top-[80px] bottom-[0px] left-[0px] bg-gray-800 overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[0]">
          <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
            
            <div
              className="flex-1 relative text-base leading-[20px] font-medium text-left cursor-pointer"
              onClick={onTitleTextClick}
            >
              Smart Lab
            </div>
          </div>
          <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
            
            <div
              className="flex-1 relative text-base leading-[20px] [text-decoration:underline] font-medium text-left cursor-pointer"
              
            >
              Mech Lab
            </div>
          </div>
          <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
            
            <div className="flex-1 relative text-base  leading-[20px] font-medium text-left" onClick={onTitleText2Click}>
              3D Lab
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Mech;
