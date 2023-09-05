import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormContainer = () => {
  const navigate = useNavigate();

  const onDivframer14dfk51Click = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  const onDivframer1soagorClick = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  return (
    <div className="self-stretch bg-dwhite overflow-hidden flex flex-row items-center justify-center text-left text-31xl text-darkslategray-100 font-inter">
      <div className="flex-1 overflow-hidden flex flex-row py-14 pr-[155.7999725341797px] pl-[155.8000030517578px] items-center justify-center">
        <div className="w-[400px] h-[488px] flex flex-col items-start justify-start gap-[19px] max-w-[2018px]">
          <div className="w-[400px] flex flex-row items-start justify-start">
            <h1 className="m-0 relative text-inherit tracking-[-2px] leading-[60px] font-bold font-inherit inline-block max-w-[400px]">
              <p className="m-0">{`Shape your `}</p>
              <p className="m-0">{`imagination. `}</p>
            </h1>
          </div>
          <div className="w-[400px] flex flex-row items-start justify-start text-5xl text-gray-100">
            <h2 className="m-0 relative text-inherit tracking-[-0.5px] leading-[36px] font-medium font-inherit inline-block max-w-[401px]">
              <p className="m-0">{`An all-encompassing lab, in `}</p>
              <p className="m-0">{`collaboration with IESA, `}</p>
              <p className="m-0">{`Government of Karnataka, DST, and `}</p>
              <p className="m-0">{`Nidhi PRAYAS, empowering `}</p>
              <p className="m-0">mechatronics innovators with top-</p>
              <p className="m-0">{`notch facilities, skill development, `}</p>
              <p className="m-0">{`and expert guidance for seamless `}</p>
              <p className="m-0">idea-to-prototype realization</p>
            </h2>
          </div>
          <div className="flex flex-row items-center justify-center gap-[15px]">
            <Button
              className="cursor-pointer"
              variant="outline-primary"
              onClick={onDivframer14dfk51Click}
            >
              Get Started
            </Button>
            <Button
              className="cursor-pointer"
              variant="outline-primary"
              onClick={onDivframer1soagorClick}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <img
        className="relative w-[711.6px] h-[600px] overflow-hidden shrink-0 object-cover"
        alt=""
        src="/f4z9junbeullvmi8q0nh3kuxkf8jpg@2x.png"
      />
    </div>
  );
};

export default FormContainer;
