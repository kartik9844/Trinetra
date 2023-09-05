import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUserButtonClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  const onAdminButtonClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  return (
    <header className="relative bg-gray-400 w-[1440px] h-20 text-left text-base text-dwhite font-inter">
      <div className="absolute top-[calc(50%_-_40px)] left-[calc(50%_-_720px)] w-[1161px] h-[73px] flex flex-row pt-[7px] pb-[3px] pr-[912px] pl-0 box-border items-center justify-between">
        <img
          className="relative w-[246.5px] h-[82px] object-cover cursor-pointer"
          alt=""
          src="/logo2@2x.png"
          onClick={onLogoImageClick}
        />
      </div>
      <div className="absolute w-[calc(100%_-_1393px)] top-[27.4px] right-[302.34px] left-[1090.66px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start">
        <div className="relative leading-[24px] font-medium">About</div>
      </div>
      <div className="absolute w-[calc(100%_-_1378px)] top-[27.4px] right-[217.03px] left-[1160.97px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start">
        <div className="relative leading-[24px] font-medium">Contact</div>
      </div>
      <Button
        className="absolute top-[calc(50%_-_20px)] left-[calc(50%_+_525.54px)] cursor-pointer"
        variant="outline-primary"
        onClick={onUserButtonClick}
      >
        User
      </Button>
      <Button
        className="absolute top-[calc(50%_-_20px)] left-[calc(50%_+_612.09px)] cursor-pointer"
        variant="outline-primary"
        onClick={onAdminButtonClick}
      >
        Admin
      </Button>
    </header>
  );
};

export default Navbar;
