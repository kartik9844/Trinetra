import { useMemo } from "react";

const CellDefault = ({
  showContent,
  showText,
  cellDefaultPosition,
  cellDefaultWidth,
  cellDefaultHeight,
  cellDefaultJustifyContent,
  cellDefaultAlignSelf,
  cellDefaultMarginLeft,
}) => {
  const cellDefaultStyle = useMemo(() => {
    return {
      position: cellDefaultPosition,
      width: cellDefaultWidth,
      height: cellDefaultHeight,
      justifyContent: cellDefaultJustifyContent,
      alignSelf: cellDefaultAlignSelf,
      marginLeft: cellDefaultMarginLeft,
    };
  }, [
    cellDefaultPosition,
    cellDefaultWidth,
    cellDefaultHeight,
    cellDefaultJustifyContent,
    cellDefaultAlignSelf,
    cellDefaultMarginLeft,
  ]);

  return (
    <div
      className="relative bg-gray-1000 box-border w-[120px] h-9 flex flex-col items-start justify-start text-left text-xs text-dwhite font-inter border-t-[1px] border-solid border-dimgray-300 border-l-[1px]"
      style={cellDefaultStyle}
    >
      {showContent && (
        <div className="self-stretch overflow-hidden flex flex-row py-2.5 px-3 items-start justify-start">
          {showText && <div className="flex-1 relative leading-[130%]" />}
        </div>
      )}
    </div>
  );
};

export default CellDefault;
