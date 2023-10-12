import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";
import POnRent from "../components/POnRent";
import { Grid } from "@mui/material";
import Item from "antd/lib/list/Item";
import AOnRent from "../components/AOnRent";

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

  const onTitleText1Click = useCallback(() => {
    navigate("/orders-retruned");
  }, [navigate]);

  return (
    <div className=" text-black font-popins">
      
              <Grid container spacing={2}>
<Grid item xs={6}md={6}>
  <Item>
        <div className="absolute top-[0px] left-[0px] bg-dwhite w-[1440px] h-[1016px] flex flex-col pt-20 pb-0 pr-0 pl-[220px] box-border items-center justify-center">
          <div className="self-stretch my-0 mx-[!important] absolute h-[calc(100%_-_68px)] top-[68px] bottom-[0px] left-[0px] bg-gray-800 overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[0]">
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              
              <div className="flex-1 relative text-[22px] [text-decoration:underline] leading-[20px] font-medium font-popins text-left">
                On Rent
              </div>
            </div>
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              
              <div
                className="flex-1 relative text-[26px] leading-[20px] font-medium font-popins text-left cursor-pointer"
                onClick={onTitleText1Click}
              >
                Rented
              </div>
            </div>
          </div>
        </div>
        </Item>
</Grid>

     <Grid item xs={12}md={14}>
      <Item><AOnRent/></Item>
     </Grid>
     </Grid>
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
    </div>
  );
};

export default Orders;
