import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderTop from "./HeaderTop";

const HeaderTop4 = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  const onUserContainerClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  const onAdminButtonContainerClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  return (
    <div className="absolute top-[0px] left-[-13px] w-[1466px] overflow-hidden flex flex-col items-start justify-center">
      <div className="w-[1453px] h-[375px] overflow-hidden shrink-0 flex flex-col items-start justify-end">
        <HeaderTop
          logoFramPosition="unset"
          logoFramMarginLeft="13px"
          contactCursor="pointer"
          onLogoImageClick={onLogoImageClick}
          onAboutTextClick={onAboutTextClick}
          onUserButtonContainerClick={onUserContainerClick}
          onAdminButtonContainerClick={onAdminButtonContainerClick}
        />
        <img
          className="relative rounded-3xs w-[1447px] h-[330px] object-cover mt-[-35px]"
          alt=""
          src="/logo4@2x.png"
        />
      </div>
    </div>
  );
};

export default HeaderTop4;
