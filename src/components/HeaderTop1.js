import { useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button as BsButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HeaderTop1 = () => {
  const navigate = useNavigate();

  const onUserButtonClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  const onAdminButtonClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onAboutContainerClick = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  const onContactContainerClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="self-stretch overflow-y-auto flex flex-row items-start justify-start text-left text-base text-dwhite font-inter">
      <div className="relative bg-gray-400 w-[1440px] h-[73px]">
      <BsButton
          className="absolute top-[calc(50%_-_19.5px)] left-[calc(50%_+_525.54px)] cursor-pointer"
          variant="outline-primary"
          onClick={onUserButtonClick}
        >
          User
        </BsButton>




        
        <BsButton
          className="absolute top-[calc(50%_-_19.5px)] left-[calc(50%_+_612.09px)] cursor-pointer"
          variant="outline-primary"
          onClick={onAdminButtonClick}
        >
          Admin
        </BsButton>
        <div className="absolute top-[0px] left-[0px] w-[1246px] h-[73px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_36.5px)] left-[calc(50%_-_623px)] w-[1173px] h-[76px] flex flex-row pt-[7px] pb-[3px] pr-[912px] pl-0 box-border items-center justify-between">
            <img
              className="relative rounded-3xs w-[270px] h-[76px] object-cover"
              alt=""
              src="/logo@2x.png"
            />
          </div>
          <div
            className="absolute w-[calc(100%_-_1199px)] top-[27.4px] right-[96.84px] left-[1102.16px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start cursor-pointer"
            onClick={onAboutContainerClick}
          >
            <div
              className="relative leading-[24px] font-medium cursor-pointer"
              onClick={onAboutTextClick}
            >
              About
            </div>
          </div>
          <div
            className="absolute w-[calc(100%_-_1184px)] top-[27.4px] right-[11.53px] left-[1172.47px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start cursor-pointer"
            onClick={onContactContainerClick}
          >
            <div className="relative leading-[24px] font-medium">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop1;
