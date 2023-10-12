import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";
import Smartlist from "../components/Smartlist";
import { Grid } from "@mui/material";
import Item from "antd/lib/list/Item";

const Smart = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/admin-try");
  }, [navigate]);

  const onSingoutClick = useCallback(() => {
    navigate("/");
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
        onSingoutClick={onSingoutClick}
      />
     <Grid container spacing={2}>
<Grid item xs={6}md={6}>
  <Item>

  <div > 
        <div className="self-stretch my-0 mx-[!important] absolute h-90 top-[80px] bottom-[0px] left-[0px] bg-gray-800 overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[0]">
          <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
            
            
            <div className="flex-1 relative text-base [text-decoration:underline] leading-[20px] font-medium text-left">
              Smart Lab
            </div>
          </div>
          <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
            
            <div
              className="flex-1 relative text-base leading-[20px] font-medium text-left cursor-pointer"
              onClick={onTitleText1Click}
            >
              Mech Lab
            </div>
          </div>
          <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
            
            <div
              className="flex-1 relative text-base leading-[20px] font-medium text-left cursor-pointer"
              onClick={onTitleText2Click}
            >
              3D Lab
            </div>
          </div>
        </div>
      </div>
  </Item>
</Grid>

     <Grid item xs={12}md={14}>
      <Item><Smartlist/></Item>
     </Grid>
        

     </Grid>
     
    </div>
  );
};

export default Smart;
