import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignupFormContainer from "../components/SignupFormContainer";
import HeaderTop1 from "../components/HeaderTop1";

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
      <HeaderTop1/>
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
