import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignupFormContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="rounded-51xl bg-dgray w-[640px] h-[875px] flex flex-col items-center justify-center gap-[23px] text-left text-17xl text-black font-popins">
      <div className="relative text-29xl capitalize text-gray-300 text-right">{`Sign Up `}</div>
      <div className="w-[539px] flex flex-col items-start justify-start font-inter">
        <b className="inline-block h-11 ml-1.5">
          <span className="uppercase">S</span>
          <span className="capitalize">{`tartup `}</span>
          <span className="uppercase">n</span>
          <span className="capitalize">ame</span>
        </b>
        <input
                  type="text"
                  name="Name"
                  id="Name"
                  autoComplete="given-name"
                  placeholder={"enter your startup name"}
                  className="rounded-6xl box-border w-[550px] h-[65px] flex flex-row p-1.5 items-center justify-center text-xl font-fresca border-[2px] border-solid border-black"
                />      
        
      </div>
      <div className="w-[539px] flex flex-col items-start justify-start font-popins">
        <b className="inline-block h-11 ml-1.5">
          <span>
            <span className="uppercase">E</span>
            <span className="lowercase">mail</span>
          </span>
          <span className="uppercase text-red">*</span>
        </b>
        <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder={"enter your email"}
                  className="rounded-6xl box-border w-[550px] h-[65px] flex flex-row p-1.5 items-center justify-center text-xl font-popins border-[2px] border-solid border-black"
                />      
      </div>
      <div className="w-[528px] flex flex-col items-start justify-start font-inter">
        <b className="inline-block h-11 ml-[7px]">
          <span>
            <span className="uppercase">P</span>
          </span>
          <span className="lowercase">
            <span>assword</span>
            <span className="text-red">*</span>
          </span>
        </b>
        <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder={"enter your password"}
                  className="rounded-6xl box-border w-[550px] h-[65px] flex flex-row p-1.5 items-center justify-center text-xl font-popins border-[2px] border-solid border-black"
                />      
      </div>
      <div className="w-[531px] flex flex-col items-start justify-start font-inter">
        <b className="relative">
          <span>
            <span className="uppercase">R</span>
            <span className="capitalize">{`enter `}</span>
            <span className="uppercase">P</span>
            <span className="lowercase text-black">assword</span>
          </span>
          <span className="lowercase text-red">
            <span>*</span>
          </span>
        </b>
        <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder={"Renter your password"}
                  className="rounded-6xl box-border w-[550px] h-[65px] flex flex-row p-1.5 items-center justify-center text-xl font-fresca border-[2px] border-solid border-black"
                /> 
      </div>
      <div
        className="rounded-3xl bg-blueviolet w-[516px] h-[73px] flex flex-col py-0 px-[189px] box-border items-start justify-center cursor-pointer text-24xl text-dwhite"
        onClick={onSignUpContainerClick}
      >
        <div className="relative capitalize">Sign up</div>
      </div>
      <div className="relative w-[516px] h-[23px] text-xl">
        <img
          className="absolute top-[10.5px] left-[0px] w-[204px] h-px"
          alt=""
          src="/line-11.svg"
        />
        <div className="absolute top-[0px] left-[207px] capitalize">
          Or,Login with
        </div>
        <img
          className="absolute top-[10px] left-[315px] w-[201px] h-0.5"
          alt=""
          src="/line-21.svg"
        />
      </div>
      <div
        className="rounded-6xl bg-slateblue-100 w-[516px] h-[60px] flex flex-row pt-[7.2727274894714355px] px-[68.86852264404297px] pb-[7.272728443145752px] box-border items-center justify-start gap-[49px] cursor-pointer text-8xl"
        onClick={onGoogleContainerClick}
      >
        <img
          className="relative rounded-14xl w-[54.09px] h-[45.45px] object-cover"
          alt=""
          src="/google-logo@2x.png"
        />
        <div className="relative capitalize inline-block w-[254.52px] h-[30.75px] shrink-0">
          Sign up with google
        </div>
      </div>
      <div
        className="relative text-xl inline-block w-[235px] cursor-pointer"
        onClick={onIfYouHaveClick}
      >
        <span>
          <span className="capitalize">If you have a</span>
          <span className="lowercase">CC</span>
          <span className="capitalize text-black">{`ount? `}</span>
          <span className="capitalize text-black">
            <span className="[text-decoration:underline]">{` `}</span>
          </span>
        </span>
        <span className="capitalize text-blueviolet">
          <span className="[text-decoration:underline]">
            <span>login</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default SignupFormContainer;
