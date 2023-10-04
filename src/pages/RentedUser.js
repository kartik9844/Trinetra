import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import PRentRq from "../components/PRentRq";
import { Grid } from "@mui/material";
import Item from "antd/lib/list/Item";

const OnRentUser = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onSingoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactContainerClick = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/u-smart-lab");
  }, [navigate]);

  const onIconUserClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onCa2ImageClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onTitleText1Click = useCallback(() => {
    navigate("/-on-rent-user");
  }, [navigate]);

  return (
      <div className="">
        <Grid container spacing={2}>
<Grid item xs={6}md={6}>
  <Item>
        <div className="absolute top-[0px] left-[0px] bg-dwhite w-[1440px] h-[1016px] flex flex-col pt-20 pb-0 pr-0 pl-[220px] box-border items-center justify-center">
          <div className="self-stretch my-0 mx-[!important] absolute h-[calc(100%_-_68px)] top-[68px] bottom-[0px] left-[0px] bg-gray-800 overflow-hidden flex flex-col py-3 px-0 box-border items-center justify-start z-[0]">
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div className="flex-1 relative text-[22px]  leading-[20px] font-medium font-popins text-left" onClick={onTitleText1Click}>
                On Rent
              </div>
            </div>
            <div className="self-stretch flex flex-row py-4 px-5 items-center justify-center gap-[12px]">
              <div className="rounded-xl bg-gray-800 w-6 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0">
                  😃
                </div>
              </div>
              <div
                className="flex-1 relative text-[26px] [text-decoration:underline] leading-[20px] font-medium font-popins text-left cursor-pointer"
                
              >
                Rented
              </div>
            </div>
          </div>
        </div>
        </Item>
</Grid>

     <Grid item xs={12}md={14}>
      <Item><PRentRq/></Item>
     </Grid>
     </Grid>
        <MainHeader
          propCursor="unset"
          propCursor1="pointer"
          propCursor2="pointer"
          propCursor3="unset"
          propCursor4="pointer"
          propCursor5="pointer"
          onLogoImageClick={onLogoImageClick}
          onContactContainerClick={onContactContainerClick}
          onProductsTextClick={onProductsTextClick}
          onIconUserClick={onIconUserClick}
          onCa2ImageClick={onCa2ImageClick}
          onSingoutClick={onSingoutClick}
        />
      </div>
    
  );
};

export default OnRentUser;
