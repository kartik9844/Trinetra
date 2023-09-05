import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignupFormContainer from "../components/SignupFormContainer";

const SignUp = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  const onUserButtonContainerClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  const onAdminButtonContainerClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  return (
    <div className="relative bg-dwhite w-full h-[1024px] overflow-hidden text-left text-base text-dwhite font-inter">
      <div className="absolute top-[0px] left-[-21px] bg-gray-400 w-[1461px] h-20">
        <div className="absolute top-[calc(50%_-_40px)] left-[calc(50%_-_719.5px)] w-[1161px] h-[73px] flex flex-row pt-[7px] pb-[3px] pr-[912px] pl-0 box-border items-center justify-between">
          <img
            className="relative w-[246.5px] h-[82px] object-cover cursor-pointer"
            alt=""
            src="/logo2@2x.png"
            onClick={onLogoImageClick}
          />
        </div>
        <div className="absolute w-[calc(100%_-_1414px)] top-[27.4px] right-[312.84px] left-[1101.16px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start">
          <div
            className="relative leading-[24px] font-medium cursor-pointer"
            onClick={onAboutTextClick}
          >
            About
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_1399px)] top-[27.4px] right-[227.53px] left-[1171.47px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start">
          <div className="relative leading-[24px] font-medium">Contact</div>
        </div>
        <div
          className="absolute top-[calc(50%_-_20px)] left-[calc(50%_+_526.04px)] rounded-lg bg-dwhite h-10 flex flex-row py-[15px] pr-[14.674999237060547px] pl-[14.875px] box-border items-center justify-center cursor-pointer text-center text-sm text-gray-200"
          onClick={onUserButtonContainerClick}
        >
          <div className="relative leading-[16.8px] font-extrabold inline-block max-h-[10px]">
            User
          </div>
        </div>
        <div
          className="absolute top-[calc(50%_-_20px)] left-[calc(50%_+_612.59px)] rounded-lg bg-dwhite h-10 flex flex-row py-[15px] pr-[14.454971313476562px] pl-[14.655029296875px] box-border items-center justify-center cursor-pointer text-center text-sm text-gray-200"
          onClick={onAdminButtonContainerClick}
        >
          <div className="relative leading-[16.8px] font-extrabold inline-block max-h-[10px]">
            Admin
          </div>
        </div>
      </div>
      <div className="absolute top-[120px] left-[-21px] w-[1421px] overflow-hidden flex flex-col items-end justify-center">
        <div className="h-[875px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
          <img
            className="relative rounded-3xs w-[760px] h-[841px] object-cover"
            alt=""
            src="/logo5@2x.png"
          />
          <SignupFormContainer />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
