import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

const AdminProfile = () => {
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

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-left text-17xl text-black font-poppins">
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
      
        
        <div className="absolute top-[190px] left-[225px] w-[600px] h-[260px]py-1.5 overflow-hidden flex flex-col items-start justify-start gap-[38px]">
            <div className="relative capitalize font-extrabold">Name:
            <input
                  type="text"
                  name="Name"
                  id="Name"
                  autoComplete="given-name"
                  className="absolute block w-wide rounded-md border-1 py-1.5 w-{200px} text-Black-900 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
        <div >
          <div className="absolute top-[550px] left-[431px] w-[527px] h-[74px] overflow-hidden flex flex-row items-center justify-start gap-[77px]">
            <Button sx={{ width: 225 }} variant="contained" color="primary">
              Edit
            </Button>
            <Button sx={{ width: 225 }} variant="contained" color="primary">
              Save
            </Button>
          </div> 
        </div>
      </div>
    
  );
};

export default AdminProfile;
