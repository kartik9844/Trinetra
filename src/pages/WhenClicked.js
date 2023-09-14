import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

const WhenClicked = () => {
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
    <div className="relative bg-dwhite w-full h-[1024px] overflow-hidden flex flex-col items-center justify-center gap-[814px]">
      <div className="w-[1440px] h-[90px] overflow-hidden shrink-0 flex flex-row items-center justify-end">
        <Navbaradmin
          dimensionCode="/maxresdefault-32@2x.png"
          carDimensions="/-icon-user3.svg"
          divframer11lg61rPosition="unset"
          divframer11lg61rTop="unset"
          divframer11lg61rLeft="unset"
          divframer11lg61rWidth="90px"
          divframer11lg61rMarginBottom="10px"
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
      </div>
      <div className="w-[1103px] h-[119px] overflow-hidden shrink-0 flex flex-row items-start justify-end">
        <div className="w-[119px] h-[49px] overflow-hidden shrink-0 mt-[70px]" />
        <div className="w-[821px] h-[95px] overflow-hidden shrink-0 flex flex-row py-0 px-[21px] box-border items-start justify-start gap-[122px] ml-[-904px]">
          <Button
            sx={{ width: 153 }}
            variant="contained"
            name="Back"
            color="primary"
          >
            Back
          </Button>
          <Button sx={{ width: 149 }} variant="contained" color="primary">
            Button
          </Button>
          <Button sx={{ width: 149 }} variant="contained" color="primary">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhenClicked;