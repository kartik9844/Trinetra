import { useMemo } from "react";

const CellHeader = ({
  cellHeaderPosition,
  cellHeaderWidth,
  cellHeaderHeight,
  cellHeaderJustifyContent,
  cellHeaderAlignSelf,
  cellHeaderMarginLeft,
  textFontSize,
  textColor,
  textTextAlign,
  textFlex,
}) => {
  const cellHeaderStyle = useMemo(() => {
    return {
      position: cellHeaderPosition,
      width: cellHeaderWidth,
      height: cellHeaderHeight,
      justifyContent: cellHeaderJustifyContent,
      alignSelf: cellHeaderAlignSelf,
      marginLeft: cellHeaderMarginLeft,
    };
  }, [
    cellHeaderPosition,
    cellHeaderWidth,
    cellHeaderHeight,
    cellHeaderJustifyContent,
    cellHeaderAlignSelf,
    cellHeaderMarginLeft,
  ]);

  const textStyle = useMemo(() => {
    return {
      fontSize: textFontSize,
      color: textColor,
      textAlign: textTextAlign,
      flex: textFlex,
    };
  }, [textFontSize, textColor, textTextAlign, textFlex]);

  return (
    <div
      className="relative bg-gray-900 box-border w-[120px] h-9 flex flex-col items-start justify-start text-left text-xs text-dwhite font-inter border-t-[1px] border-solid border-dimgray-300 border-l-[1px]"
      style={cellHeaderStyle}
    >
      <div className="self-stretch overflow-hidden flex flex-row py-2.5 px-3 items-start justify-start">
        <div
          className="flex-1 relative leading-[130%] font-semibold"
          style={textStyle}
        />
      </div>
    </div>
  );
};

export default CellHeader;
