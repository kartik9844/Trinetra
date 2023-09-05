import { useMemo } from "react";
import CellHeader from "./CellHeader";

const Row = ({
  productLabel,
  quantityLabel,
  hoursLabel,
  daysLabel,
  startupLabel,
  personLabel,
  costLabel,
  statusLabel,
  showContent,
  showText,
  cellHeaderHeight,
  contentBackgroundColor,
  cellHeaderFontSize,
  cellHeaderFontWeight,
  cellHeaderColor,
  cellHeaderTextAlign,
  cellHeaderFlex,
  contentBackgroundColor1,
  cellHeaderFontSize1,
  cellHeaderFontWeight1,
  cellHeaderColor1,
  cellHeaderTextAlign1,
  contentBackgroundColor2,
  cellHeaderFontSize2,
  cellHeaderFontWeight2,
  cellHeaderColor2,
  cellHeaderTextAlign2,
  contentBackgroundColor3,
  cellHeaderFontSize3,
  cellHeaderFontWeight3,
  cellHeaderColor3,
  cellHeaderTextAlign3,
  contentBackgroundColor4,
  cellHeaderFontSize4,
  cellHeaderFontWeight4,
  cellHeaderColor4,
  cellHeaderTextAlign4,
  contentBackgroundColor5,
  cellHeaderFontSize5,
  cellHeaderFontWeight5,
  cellHeaderColor5,
  cellHeaderTextAlign5,
  contentBackgroundColor6,
  propFontSize,
  propFontWeight,
  propColor,
  propTextAlign,
  propBackgroundColor,
  propFontSize1,
  propFontWeight1,
  propColor1,
  propTextAlign1,
  showContent1,
  showText1,
}) => {
  const rowStyle = useMemo(() => {
    return {
      height: cellHeaderHeight,
    };
  }, [cellHeaderHeight]);

  const cellHeaderStyle = useMemo(() => {
    return {
      backgroundColor: contentBackgroundColor,
    };
  }, [contentBackgroundColor]);

  const textStyle = useMemo(() => {
    return {
      fontSize: cellHeaderFontSize,
      fontWeight: cellHeaderFontWeight,
      color: cellHeaderColor,
      textAlign: cellHeaderTextAlign,
      flex: cellHeaderFlex,
    };
  }, [
    cellHeaderFontSize,
    cellHeaderFontWeight,
    cellHeaderColor,
    cellHeaderTextAlign,
    cellHeaderFlex,
  ]);

  const cellHeaderStyle1 = useMemo(() => {
    return {
      backgroundColor: contentBackgroundColor1,
    };
  }, [contentBackgroundColor1]);

  const textStyle1 = useMemo(() => {
    return {
      fontSize: cellHeaderFontSize1,
      fontWeight: cellHeaderFontWeight1,
      color: cellHeaderColor1,
      textAlign: cellHeaderTextAlign1,
    };
  }, [
    cellHeaderFontSize1,
    cellHeaderFontWeight1,
    cellHeaderColor1,
    cellHeaderTextAlign1,
  ]);

  const cellHeaderStyle2 = useMemo(() => {
    return {
      backgroundColor: contentBackgroundColor2,
    };
  }, [contentBackgroundColor2]);

  const textStyle2 = useMemo(() => {
    return {
      fontSize: cellHeaderFontSize2,
      fontWeight: cellHeaderFontWeight2,
      color: cellHeaderColor2,
      textAlign: cellHeaderTextAlign2,
    };
  }, [
    cellHeaderFontSize2,
    cellHeaderFontWeight2,
    cellHeaderColor2,
    cellHeaderTextAlign2,
  ]);

  const cellHeaderStyle3 = useMemo(() => {
    return {
      backgroundColor: contentBackgroundColor3,
    };
  }, [contentBackgroundColor3]);

  const textStyle3 = useMemo(() => {
    return {
      fontSize: cellHeaderFontSize3,
      fontWeight: cellHeaderFontWeight3,
      color: cellHeaderColor3,
      textAlign: cellHeaderTextAlign3,
    };
  }, [
    cellHeaderFontSize3,
    cellHeaderFontWeight3,
    cellHeaderColor3,
    cellHeaderTextAlign3,
  ]);

  const cellHeaderStyle4 = useMemo(() => {
    return {
      backgroundColor: contentBackgroundColor4,
    };
  }, [contentBackgroundColor4]);

  const textStyle4 = useMemo(() => {
    return {
      fontSize: cellHeaderFontSize4,
      fontWeight: cellHeaderFontWeight4,
      color: cellHeaderColor4,
      textAlign: cellHeaderTextAlign4,
    };
  }, [
    cellHeaderFontSize4,
    cellHeaderFontWeight4,
    cellHeaderColor4,
    cellHeaderTextAlign4,
  ]);

  const cellHeaderStyle5 = useMemo(() => {
    return {
      backgroundColor: contentBackgroundColor5,
    };
  }, [contentBackgroundColor5]);

  const textStyle5 = useMemo(() => {
    return {
      fontSize: cellHeaderFontSize5,
      fontWeight: cellHeaderFontWeight5,
      color: cellHeaderColor5,
      textAlign: cellHeaderTextAlign5,
    };
  }, [
    cellHeaderFontSize5,
    cellHeaderFontWeight5,
    cellHeaderColor5,
    cellHeaderTextAlign5,
  ]);

  const cellHeaderStyle6 = useMemo(() => {
    return {
      backgroundColor: contentBackgroundColor6,
    };
  }, [contentBackgroundColor6]);

  const textStyle6 = useMemo(() => {
    return {
      fontSize: propFontSize,
      fontWeight: propFontWeight,
      color: propColor,
      textAlign: propTextAlign,
    };
  }, [propFontSize, propFontWeight, propColor, propTextAlign]);

  const cellHeaderStyle7 = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const textStyle7 = useMemo(() => {
    return {
      fontSize: propFontSize1,
      fontWeight: propFontWeight1,
      color: propColor1,
      textAlign: propTextAlign1,
    };
  }, [propFontSize1, propFontWeight1, propColor1, propTextAlign1]);

  return (
    <div
      className="bg-gray-1000 w-[1406px] h-[84px] overflow-hidden shrink-0 flex flex-row items-start justify-start"
      style={rowStyle}
    >
      <CellHeader
        cellHeaderPosition="unset"
        cellHeaderWidth="220px"
        cellHeaderHeight="84px"
        cellHeaderJustifyContent="center"
        cellHeaderAlignSelf="unset"
        cellHeaderMarginLeft="unset"
        textFontSize="30px"
        textColor="#000"
        textTextAlign="center"
        textFlex="unset"
      />
      <CellHeader
        cellHeaderPosition="unset"
        cellHeaderWidth="100px"
        cellHeaderHeight="unset"
        cellHeaderJustifyContent="center"
        cellHeaderAlignSelf="stretch"
        cellHeaderMarginLeft="-2px"
        textFontSize="30px"
        textColor="#000"
        textTextAlign="center"
        textFlex="1"
      />
      <CellHeader
        cellHeaderPosition="unset"
        cellHeaderWidth="142px"
        cellHeaderHeight="unset"
        cellHeaderJustifyContent="center"
        cellHeaderAlignSelf="stretch"
        cellHeaderMarginLeft="-2px"
        textFontSize="30px"
        textColor="#000"
        textTextAlign="center"
        textFlex="1"
      />
      <CellHeader
        cellHeaderPosition="unset"
        cellHeaderWidth="116px"
        cellHeaderHeight="unset"
        cellHeaderJustifyContent="center"
        cellHeaderAlignSelf="stretch"
        cellHeaderMarginLeft="-2px"
        textFontSize="30px"
        textColor="#000"
        textTextAlign="center"
        textFlex="1"
      />
      <CellHeader
        cellHeaderPosition="unset"
        cellHeaderWidth="314px"
        cellHeaderHeight="unset"
        cellHeaderJustifyContent="center"
        cellHeaderAlignSelf="stretch"
        cellHeaderMarginLeft="-2px"
        textFontSize="30px"
        textColor="#000"
        textTextAlign="center"
        textFlex="1"
      />
      <CellHeader
        cellHeaderPosition="unset"
        cellHeaderWidth="214px"
        cellHeaderHeight="unset"
        cellHeaderJustifyContent="center"
        cellHeaderAlignSelf="stretch"
        cellHeaderMarginLeft="-2px"
        textFontSize="30px"
        textColor="#000"
        textTextAlign="center"
        textFlex="1"
      />
      <CellHeader
        cellHeaderPosition="unset"
        cellHeaderWidth="140px"
        cellHeaderHeight="unset"
        cellHeaderJustifyContent="center"
        cellHeaderAlignSelf="stretch"
        cellHeaderMarginLeft="-2px"
        textFontSize="30px"
        textColor="#000"
        textTextAlign="center"
        textFlex="1"
      />
      <CellHeader
        cellHeaderPosition="unset"
        cellHeaderWidth="183px"
        cellHeaderHeight="unset"
        cellHeaderJustifyContent="center"
        cellHeaderAlignSelf="stretch"
        cellHeaderMarginLeft="-2px"
        textFontSize="30px"
        textColor="#000"
        textTextAlign="center"
        textFlex="1"
      />
    </div>
  );
};

export default Row;
