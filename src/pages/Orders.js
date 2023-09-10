import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

const Orders = () => {
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

  const onAddTextClick = useCallback(() => {
    navigate("/add-product");
  }, [navigate]);

  const onIconUserClick = useCallback(() => {
    navigate("/admin-profile");
  }, [navigate]);

  const onUsersTextClick = useCallback(() => {
    navigate("/userprofile-admin");
  }, [navigate]);

  return (
    <div className="relative bg-dwhite w-full h-[1024px] overflow-hidden text-left text-21xl text-black font-poppins">
      <Navbaradmin
        dimensionCode="/maxresdefault-3@2x.png"
        carDimensions="/-icon-user.svg"
        divframer11lg61rPosition="absolute"
        divframer11lg61rTop="0px"
        divframer11lg61rLeft="-12px"
        divframer11lg61rWidth="1452px"
        divframer11lg61rMarginBottom="unset"
        maxresdefault3IconLeft="calc(50% - 725px)"
        maxresdefault3IconCursor="unset"
        frameCursor="pointer"
        iconUserCursor="pointer"
        onMaxresdefault3ImageClick={onMaxresdefault3ImageClick}
        onEquipmentsTextClick={onEquipmentsTextClick}
        onOrdersTextClick={onOrdersTextClick}
        onAddTextClick={onAddTextClick}
        onIconUserClick={onIconUserClick}
        onUsersTextClick={onUsersTextClick}
      />
      <div className="absolute top-[134px] left-[-12px] w-[211px] overflow-hidden flex flex-col items-end justify-center">
        <div className="relative tracking-[0.5px] leading-[30px] uppercase font-extrabold inline-block w-[170px] h-[30px] shrink-0">
          Orders
        </div>
      </div>
    </div>
  );
};

export default Orders;
