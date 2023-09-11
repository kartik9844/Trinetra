import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

const UserprofileAdmin = () => {
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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/when-clicked");
  }, [navigate]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-left text-21xl text-black font-poppins">
      <div className="bg-dwhite w-[1440px] h-[1024px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[42px]">
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
        
          <div className="relative top-20 capitalize font-extrabold">User profile</div>
        
      </div>
    </div>
  );
};

export default UserprofileAdmin;
