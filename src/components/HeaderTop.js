import { useMemo } from "react";

const HeaderTop = ({
  logoFramPosition,
  logoFramMarginLeft,
  contactCursor,
  onLogoImageClick,
  onAboutTextClick,
  onUserButtonContainerClick,
  onAdminButtonContainerClick,
}) => {
  const navBarStyle = useMemo(() => {
    return {
      position: logoFramPosition,
      marginLeft: logoFramMarginLeft,
    };
  }, [logoFramPosition, logoFramMarginLeft]);

  const aboutStyle = useMemo(() => {
    return {
      cursor: contactCursor,
    };
  }, [contactCursor]);

  return (
    <div
      className="relative bg-gray-400 w-[1440px] h-20 text-left text-base text-dwhite font-popins"
      style={navBarStyle}
    >
      <div className="absolute top-[calc(50%_-_40px)] left-[calc(50%_-_720px)] w-[1161px] h-[73px] flex flex-row pt-[7px] pb-[3px] pr-[912px] pl-0 box-border items-center justify-between">
        <img
          className="relative w-[246.5px] h-[82px] object-cover cursor-pointer"
          alt=""
          src="/logo2@2x.png"
          onClick={onLogoImageClick}
        />
      </div>
      <div className="absolute w-[calc(100%_-_1393px)] top-[27.4px] right-[302.34px] left-[1090.66px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start">
        <div
          className="relative leading-[24px] font-medium"
          style={aboutStyle}
          onClick={onAboutTextClick}
        >
          About
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_1378px)] top-[27.4px] right-[217.03px] left-[1160.97px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start">
        <div className="relative leading-[24px] font-medium">Contact</div>
      </div>
      <div
        className="absolute top-[calc(50%_-_20px)] left-[calc(50%_+_525.54px)] rounded-lg bg-dwhite h-10 flex flex-row py-[15px] pr-[14.674999237060547px] pl-[14.875px] box-border items-center justify-center cursor-pointer text-center text-sm text-gray-200"
        onClick={onUserButtonContainerClick}
      >
        <div className="relative leading-[16.8px] font-extrabold inline-block max-h-[10px]">
          User
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_-_20px)] left-[calc(50%_+_612.09px)] rounded-lg bg-dwhite h-10 flex flex-row py-[15px] pr-[14.454971313476562px] pl-[14.655029296875px] box-border items-center justify-center cursor-pointer text-center text-sm text-gray-200"
        onClick={onAdminButtonContainerClick}
      >
        <div className="relative leading-[16.8px] font-extrabold inline-block max-h-[10px]">
          Admin
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
