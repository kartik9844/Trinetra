import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

const UserprofileAdmin = () => {
  const navigate = useNavigate();

  const onDivframer11lg61rContainerClick = useCallback(() => {
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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/when-clicked");
  }, [navigate]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-left text-21xl text-black font-poppins">
      <div className="bg-dwhite w-[1440px] h-[1024px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[42px]">
        <Navbaradmin
          dimensionCode="/maxresdefault-3@2x.png"
          carDimensions="/-icon-user.svg"
          divframer11lg61rPosition="relative"
          divframer11lg61rTop="unset"
          divframer11lg61rLeft="unset"
          divframer11lg61rWidth="1440px"
          divframer11lg61rMarginBottom="unset"
          maxresdefault3IconLeft="calc(50% - 725px)"
          maxresdefault3IconCursor="pointer"
          frameCursor="unset"
          iconUserCursor="pointer"
          onDivframer11lg61rContainerClick={onDivframer11lg61rContainerClick}
          onEquipmentsTextClick={onEquipmentsTextClick}
          onOrdersTextClick={onOrdersTextClick}
          onAddTextClick={onAddTextClick}
          onIconUserClick={onIconUserClick}
          onUsersTextClick={onUsersTextClick}
        />
        <div
          className="w-[292px] overflow-hidden flex flex-col items-end justify-center cursor-pointer"
          onClick={onFrameContainer2Click}
        >
          <div className="relative capitalize font-extrabold">User profile</div>
        </div>
      </div>
    </div>
  );
};

export default UserprofileAdmin;
