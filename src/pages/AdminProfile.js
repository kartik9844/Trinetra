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
        <div className="absolute top-[390px] left-[225px] w-[300px] h-[260px]py-1.5 overflow-hidden flex flex-col items-start justify-start gap-[38px]">
            <div className="relative capitalize font-extrabold">Name:
            <input
                  type="text"
                  name="Name"
                  id="Name"
                  autoComplete="given-name"
                  className="absolute block w-wide rounded-md border-1 py-1.5 text-Black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div className="relative capitalize font-extrabold">Email:
            <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-wide rounded-md border-1 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div className="relative capitalize font-extrabold">Password:
            <input
                  id="Password"
                  name="Pasword"
                  type="Password"
                  autoComplete="password"
                  className="block w-full rounded-md border-1 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
          </div>
        <div className="bg-dgray box-border w-[1121px] h-[733px] ml-[139px] border-[1px] border-solid border-black">
          <div className="absolute top-[799px] left-[331px] w-[527px] h-[74px] overflow-hidden flex flex-row items-center justify-start gap-[77px]">
            <Button sx={{ width: 225 }} variant="contained" color="primary">
              Edit
            </Button>
            <Button sx={{ width: 225 }} variant="contained" color="primary">
              Save
            </Button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
