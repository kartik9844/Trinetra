import { useMemo } from "react";


const Navbaradmin = ({
  dimensionCode,
  carDimensions,
  divframer11lg61rPosition,
  divframer11lg61rTop,
  divframer11lg61rLeft,
  divframer11lg61rWidth,
  divframer11lg61rMarginBottom,
  maxresdefault3IconLeft,
  maxresdefault3IconCursor,
  frameCursor,
  iconUserCursor,
  onDivframer11lg61rContainerClick,
  onMaxresdefault3ImageClick,
  onEquipmentsTextClick,
  onOrdersTextClick,
  onAddTextClick,
  onIconUserClick,
  onUsersTextClick,
}) => {
  const divframerWgdw54Style = useMemo(() => {
    return {
      position: divframer11lg61rPosition,
      top: divframer11lg61rTop,
      left: divframer11lg61rLeft,
      width: divframer11lg61rWidth,
      marginBottom: divframer11lg61rMarginBottom,
    };
  }, [
    divframer11lg61rPosition,
    divframer11lg61rTop,
    divframer11lg61rLeft,
    divframer11lg61rWidth,
    divframer11lg61rMarginBottom,
  ]);
  
  const divframer11lg61rStyle = useMemo(() => {
    return {
      left: maxresdefault3IconLeft,
      cursor: maxresdefault3IconCursor,
    };
  }, [maxresdefault3IconLeft, maxresdefault3IconCursor]);

  const maxresdefault3IconStyle = useMemo(() => {
    return {
      cursor: frameCursor,
    };
  }, [frameCursor]);

  const addStyle = useMemo(() => {
    return {
      cursor: iconUserCursor,
    };
  }, [iconUserCursor]);

  return (
    <div
      className="absolute top-[0px] left-[-10px] bg-white w-[1530px] h-20 text-left text-17xl text-black font-inter"
      style={divframerWgdw54Style}
    >
      <div
        className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_724.5px)] w-[252px] flex flex-row pt-[7px] px-0 pb-[3px] box-border items-center justify-between"
        style={divframer11lg61rStyle}
        onClick={onDivframer11lg61rContainerClick}
      >
        <img
          className="relative w-[246.5px] h-[82px] object-cover"
          alt=""
          src={dimensionCode}
          style={maxresdefault3IconStyle}
          onClick={onMaxresdefault3ImageClick}
        />
      </div>
      <div className="absolute top-[10px] left-[368px] w-[1031px] h-[57px] overflow-hidden flex flex-row items-start justify-start gap-[51px]">
        <div
          className="relative capitalize font-extrabold flex items-center w-[276px] h-[54px] shrink-0 cursor-pointer"
          onClick={onEquipmentsTextClick}
        >
          Equipment's
        </div>
        <div className="relative w-[704px] h-[57px] overflow-hidden shrink-0">
          <div
            className="absolute top-[3px] left-[0px] capitalize font-extrabold flex items-center w-[154px] h-[54px] cursor-pointer"
            onClick={onOrdersTextClick}
          >
            Orders
          </div>
          <div
            className="absolute top-[3px] left-[215px] capitalize font-extrabold flex items-center w-[155px] h-[54px] cursor-pointer"
            onClick={onAddTextClick}
            style={addStyle}
          >
            add
          </div>
          <img
            className="absolute h-full w-[9.66%] top-[0%] right-[0%] bottom-[0%] left-[90.34%] max-w-full overflow-hidden max-h-full cursor-pointer"
            alt=""
            src={carDimensions}
            onClick={onIconUserClick}
          />
          <div
            className="absolute top-[3px] left-[380px] capitalize font-extrabold flex items-center w-[130px] h-[54px] cursor-pointer"
            onClick={onUsersTextClick}
          >
            Users
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbaradmin;
