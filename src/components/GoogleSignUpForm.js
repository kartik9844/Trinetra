import { useMemo } from "react";

const GoogleSignUpForm = ({
  dimensions,
  propCursor,
  onGoogleContainerClick,
  onDontHaveAnClick,
}) => {
  const dontHaveAnContainerStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className="w-[554.12px] h-[108.14px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[19px] text-left text-8xl text-black font-fresca">
      <div
        className="rounded-23xl bg-slateblue-100 w-[534.94px] h-[66.08291625976562px] flex flex-row pt-[8.009942054748535px] px-[71.39656829833984px] pb-[8.010161399841309px] box-border items-center justify-start gap-[51px] cursor-pointer ml-[19px]"
        onClick={onGoogleContainerClick}
      >
        <img
          className="relative rounded-23xl w-[56.07px] h-[50.06px] object-cover"
          alt=""
          src={dimensions}
        />
        <div className="relative capitalize inline-block w-[263.87px] h-[33.87px] shrink-0">
          Sign up with google
        </div>
      </div>
      <div
        className="text-xl inline-block w-[344.2px] h-[23.028894424438477px] shrink-0 cursor-pointer ml-[118px] text-dwhite"
        onClick={onDontHaveAnClick}
        style={dontHaveAnContainerStyle}
      >
        <span>
          <span className="capitalize">{`Don’t `}</span>
          <span className="lowercase">H</span>
          <span className="capitalize">{`ave `}</span>
          <span className="lowercase">A</span>
          <span className="capitalize">n a</span>
          <span className="lowercase">CC</span>
          <span className="capitalize">{`ount? `}</span>
        </span>
        <span className="[text-decoration:underline] text-black">
          <span className="capitalize"> R</span>
          <span className="lowercase">egister here</span>
        </span>
      </div>
    </div>
  );
};

export default GoogleSignUpForm;
