import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const onDivframerHdi9trContainerClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onDivframer2597hcClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  return (
    <footer className=" h-[245px] flex flex-col items-center justify-start text-left text-29xl text-black font-glass-antiqua">
      <div className="self-stretch bg-dgray flex flex-col py-1 pr-[211.59994506835938px] pl-[211.60000610351562px] items-center justify-center">
        <div className="w-[1000px] overflow-hidden flex flex-col py-0 pr-[200px] pl-0 box-border items-start justify-start gap-[13.6px] max-w-[1423.199951171875px]">
          <div className="w-[800px] flex flex-row items-start justify-start">
            <h1 className="m-0 relative text-inherit leading-[57.6px] font-normal font-inherit inline-block max-w-[800px]">
              Get on board with Infinity Studios today!
            </h1>
          </div>
          <div
            className="flex flex-row items-center justify-center gap-[15px] cursor-pointer"
            onClick={onDivframerHdi9trContainerClick}
          >
            <Button
              className="cursor-pointer"
              variant="outline-primary"
              name="user login"
              onClick={onDivframer2597hcClick}
            >
              User Login
            </Button>
            <Button variant="primary">Admin Login</Button>
          </div>
        </div>
      </div>
      <footer className="self-stretch bg-dgray overflow-hidden flex flex-col py-0 pr-[211.59994506835938px] pl-[211.60000610351562px] items-center justify-center text-center text-sm text-black font-inter">
        <div className="w-full flex flex-col pt-[62px] px-0 pb-[0.5999984741210938px] box-border items-center justify-center max-w-[1000px]">
          <div className="w-[1000px] overflow-hidden flex flex-row items-start justify-center">
            <div className="relative leading-[24px] inline-block max-w-[1000px]">
              © 2023 Infinity Studios - All Rights Reserved
            </div>
          </div>
          <div className="w-[1000px] overflow-hidden flex flex-row items-start justify-center opacity-[0.5] mt-[-0.6px] text-smi">
            <div className="relative leading-[24px] inline-block max-w-[1000px]">
              Generated on August 29, 2023
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
