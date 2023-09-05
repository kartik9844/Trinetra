import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import GoogleSignUpForm from "../components/GoogleSignUpForm";
import HeaderTop1 from "../components/HeaderTop1";

const UserLogin = () => {
  const navigate = useNavigate();

  const onGoogleContainerClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutContainerClick = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  const onUserContainerClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  const onAdminContainerClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onLoginContainerClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  return (
    <div className="relative bg-dwhite w-full h-[1024px] overflow-hidden text-left text-base text-dwhite font-inter">
      <div className="absolute top-[0px] left-[-15px] w-[1470px] overflow-hidden flex flex-col items-start justify-center">
      <HeaderTop1 />
 
      </div>
      <div className="absolute top-[112px] left-[0px] w-[1440px] overflow-hidden flex flex-col items-end justify-center text-xl text-black font-fresca">
        <div className="w-[1396px] h-[839px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
          <div className="rounded-23xl bg-dodgerblue w-[835px] h-[697px] flex flex-col pt-[52px] px-[24.937255859375px] pb-[46.057769775390625px] box-border items-start justify-start gap-[37px] mt-[138px]">
            <div className="w-[574.37px] h-[384.67px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[13px]">
              <Container />
              <div className="w-[554.12px] h-[113.14px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[14px]">
                <div className="w-[170.5px] h-[26.032663345336914px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[9px] ml-0">
                  
                  <input
                     type="checkbox"
                     className="h-6 w-6 rounded  border-gray-300 text-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <div className="relative capitalize inline-block w-[131.07px] h-[23.03px] shrink-0">
                    {" "}
                    remember me
                  </div>
                </div>
                <div
                  className="rounded-23xl bg-blueviolet w-[549.86px] h-[73.09170532226562px] flex flex-col py-0 px-[214.1897430419922px] box-border items-start justify-center cursor-pointer ml-1 text-26xl text-dwhite"
                  onClick={onLoginContainerClick}
                >
                  <div className="relative capitalize inline-block w-[103.37px] h-[52.07px] shrink-0">
                    login
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[554.12px] h-[177.22px] overflow-hidden shrink-0 flex flex-col pt-0 px-0 pb-[0.00000762939453125px] box-border items-center justify-start gap-[46px]">
              <div className="w-[549.86px] h-[23.028894424438477px] ml-1">
                <img
                  className="absolute top-[630.51px] left-[90px] rounded-23xl w-[217.39px] h-px"
                  alt=""
                  src="/line-1.svg"
                />
                <div className="absolute top-[615.51px] left-[260.58px] capitalize inline-block w-[117.22px] h-[23.03px]">
                  Or,Login with
                </div>
                <img
                  className="absolute top-[630.01px] left-[340.67px] w-[214.2px] h-0.5"
                  alt=""
                  src="/line-2.svg"
                />
              </div>
              <GoogleSignUpForm
                dimensions="/google--logo@2x.png"
                onGoogleContainerClick={onGoogleContainerClick}
                onDontHaveAnClick={onDontHaveAnClick}
              />
            </div>
          </div>
          <div className="w-[1040px] h-[839px] overflow-hidden shrink-0 flex flex-row items-start justify-start ml-[-296px] text-30xl font-inter">
            <b className="relative uppercase inline-block w-[601px] h-[68px] shrink-0">
              WELCOME BACK user
            </b>
            <img
              className="rounded-3xs w-[839px] h-[788px] object-cover mt-[51px] ml-[-305px]"
              alt=""
              src="/logo3@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
