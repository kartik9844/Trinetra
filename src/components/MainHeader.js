import { useMemo } from "react";

const MainHeader = ({
  propCursor,
  propCursor1,
  propCursor2,
  propCursor3,
  propCursor4,
  propCursor5,
  onLogoFramContainerClick,
  onLogoImageClick,
  onContactContainerClick,
  onContactContainer1Click,
  onProductsTextClick,
  onIconUserClick,
  onCa2ImageClick,
}) => {
  const logoFramStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const logoIconStyle = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const contactStyle = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  const contact1Style = useMemo(() => {
    return {
      cursor: propCursor3,
    };
  }, [propCursor3]);

  const productsStyle = useMemo(() => {
    return {
      cursor: propCursor4,
    };
  }, [propCursor4]);

  const ca2IconStyle = useMemo(() => {
    return {
      cursor: propCursor5,
    };
  }, [propCursor5]);

  return (
    <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[1440px] h-20 text-left text-16xl text-dwhite font-inter">
      <div
        className="absolute top-[calc(50%_-_41px)] left-[calc(50%_-_720px)] w-[248px] h-[73px] flex flex-row pt-[7px] px-0 pb-[3px] box-border items-center justify-between"
        style={logoFramStyle}
        onClick={onLogoFramContainerClick}
      >
        <img
          className="relative w-[246.5px] h-[82px] object-cover cursor-pointer"
          alt=""
          src="/logo1@2x.png"
          onClick={onLogoImageClick}
          style={logoIconStyle}
        />
      </div>
      <div
        className="absolute w-[calc(100%_-_1274px)] top-[24px] right-[666px] left-[608px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start"
        style={contactStyle}
        onClick={onContactContainerClick}
      >
        <div className="relative leading-[24px] font-medium">Payments</div>
      </div>
      <div
        className="absolute w-[calc(100%_-_1325px)] top-[26px] right-[444.5px] left-[880.5px] flex flex-row pt-0 px-0 pb-[0.5999999046325684px] box-border items-start justify-start cursor-pointer"
        onClick={onContactContainer1Click}
        style={contact1Style}
      >
        <div className="relative leading-[24px] font-medium">Orders</div>
      </div>
      <div
        className="absolute top-[24px] left-[355px] leading-[24px] font-medium flex items-center w-40 h-7 cursor-pointer"
        onClick={onProductsTextClick}
        style={productsStyle}
      >
        Products
      </div>
      <img
        className="absolute h-[78.75%] w-[4.93%] top-[11.25%] right-[1.74%] bottom-[10%] left-[93.33%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/-icon-user.svg"
        onClick={onIconUserClick}
      />
      <img
        className="absolute top-[7px] left-[1174px] w-[71px] h-[67px] object-cover cursor-pointer"
        alt=""
        src="/ca-2@2x.png"
        onClick={onCa2ImageClick}
        style={ca2IconStyle}
      />
    </div>
  );
};

export default MainHeader;
