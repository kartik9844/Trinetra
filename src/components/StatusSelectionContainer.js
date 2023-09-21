import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, SplitButton } from "react-bootstrap";

const StatusSelectionContainer = ({ componentStatus, propBackgroundColor }) => {
  const chipGroupStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="w-[595px] overflow-hidden flex flex-col items-start justify-start gap-[4px] text-left text-5xl text-black font-popins
    
    
    
    
    
    
    
    ">
      <div className="self-stretch relative leading-[20px] font-medium">
        {componentStatus}
      </div>
      <div
        className="bg-dgreen w-[122px] flex flex-row items-start justify-between"
        style={chipGroupStyle}
      >
        <DropdownButton
          className="w-[121px] flex flex-col"
          title="Dropdown"
          variant="primary"
          align="start"
          drop="down"
        >
          <Dropdown.Item>Working</Dropdown.Item>
          <Dropdown.Item>not Working</Dropdown.Item>
          <Dropdown.Item>Dead</Dropdown.Item>
          <Dropdown.Item>Missing</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default StatusSelectionContainer;
