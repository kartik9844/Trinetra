import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

const AdminProfile = () => {
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

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-left text-17xl text-black font-poppins">
      <div className="bg-dwhite w-[1440px] h-[1024px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[124px]">
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
        <div className="bg-dgray box-border w-[1121px] h-[733px] ml-[139px] border-[1px] border-solid border-black">
          <div className="absolute top-[609px] left-[331px] w-[527px] h-[74px] overflow-hidden flex flex-row items-center justify-start gap-[77px]">
            <Button sx={{ width: 225 }} variant="contained" color="primary">
              Button
            </Button>
            <Button sx={{ width: 225 }} variant="contained" color="primary">
              Button
            </Button>
          </div>
          <div className="absolute top-[83px] left-[54px] w-[195px] h-[239px] overflow-hidden flex flex-col items-start justify-start gap-[38px]">
            <div className="relative capitalize font-extrabold">Name:</div>
            <div className="relative capitalize font-extrabold">Email:</div>
            <div className="relative capitalize font-extrabold">Password:</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
