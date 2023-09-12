import { useCallback } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeaderTop1 from "../components/HeaderTop1";
import { Auth,provider, signInWithPopup } from "firebase/auth";


const Desktop2 = () => {
  const navigate = useNavigate();

  const onSignUpContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onGoogleContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onIfYouHaveClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);
  
  const onLogoImageClick = useCallback(() => {
    // Please sync "try home page" to the project
  }, []);

  const onAboutContainerClick = useCallback(() => {
    // Please sync "about page" to the project
  }, []);

  const onAdminButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  

  return (
    <div className="relative w-full h-[1024px] overflow-hidden flex flex-col py-0 px-px box-border items-start justify-start gap-[54px] bg-[url('/public/admin-login@3x.png')] bg-cover bg-no-repeat bg-[top]">
      <header className="w-[1518px] overflow-hidden flex flex-col items-start justify-center text-left text-base text-black font-inter">
        <HeaderTop1/>
      </header>
      <section className=" w-[1021px] h-[682px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[24px] text-left text-30xl text-gray font-poppins">
        
        <div className="absolute rounded-23xl bg-dodgerblue w-[640px] h-[510px] flex flex-col pt-[38px] pb-[2.971099853515625px] pr-[47px] pl-12 box-border items-start justify-start gap-[23px] ml-[376px] text-xl text-white">
          <div className="relative -top-4 left-6 w-[485px] h-[91px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[6px]">
            <div className="relative -left-5 capitalize inline-block h-[30px] ml-5">
              <b>Email</b>
              <b className="font-inter text-firebrick">*</b>
            </div>
            <Form.Group className="[border:none] bg-[transparent] self-stretch h-[55px] ml-0">
              <Form.Control type="text" placeholder="Enter your email" />
            </Form.Group>
          </div>
          <div className=" relative -top-9 w-[550px] h-[435.03px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[19px]">
            <div className="w-[511px] h-[198px] overflow-hidden shrink-0 flex flex-col items-start justify-center gap-[19px]">
              <div className="  w-[490px] h-[85px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[21px]">
                <div className="  h-11 overflow-hidden shrink-0 flex flex-col items-end justify-center">
                  <b className="relative inline-block w-[199px] h-11 shrink-0">
                    <span className="uppercase">P</span>
                    <span className="capitalize">assword*</span>
                  </b>
                </div>
                <Form.Group className="[border:none] bg-[transparent] self-stretch mt-[-14px]">
                  <Form.Control type="text" placeholder="Enter your Password" />
                </Form.Group>
              </div>
              <div className="  relative -top-4 w-[600px] h-[100px]  overflow-hidden shrink-0 flex flex-col py-0 pr-0 pl-1 box-border items-start justify-start ml-4">
                <div className="  w-[200px] h-10 overflow-hidden shrink-0 flex flex-col items-end justify-center">
                  <b className="relative inline-block w-[199px] h-11 shrink-0">
                    <span className="uppercase">R</span>
                    <span className="capitalize">enter Password*</span>
                  </b>
                </div>
                <Form.Group className="[border:none] bg-[transparent] self-stretch mt-[-14px] rounded-sm">
                  <Form.Control type="text" placeholder="Renter password" className="rounded-lg" />
                </Form.Group>
              </div>
            </div>
            <div className="relative -top-12
            
            
            
             only:w-[600px] h-[218.03px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[18px] text-black font-fresca">
              <div className="w-[550px] h-[77px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[5px]">
                <div className="w-[170.5px] h-[26.032663345336914px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[9px] ml-3.5">
                  <Form.Check className="relative" />
                  <div className="relative capitalize inline-block w-[131.07px] h-[23.03px] shrink-0">
                    {" "}
                    remember me
                  </div>
                </div>
                <div className="w-[480px] h-[45px] overflow-hidden shrink-0 flex flex-col items-end justify-center ml-[21px]">
                  <Form.Group className="text-blue-600 w-[468px] [border:none] bg-[transparent]">
                  <Button variant="dark" className="w-[450px]" onClick={onSignUpContainerClick}>Sign up</Button>
                  
                  </Form.Group>
                  
                </div>
              </div>
              <div className="w-[550px] h-[123.03px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[18px] text-2xl">
                <div className="relative w-[550px] h-[23px]">
                  <img
                    className="absolute top-[10.51px] left-[0px] rounded-23xl w-[217.39px] h-px"
                    alt=""
                    src="/line-11.svg"
                  />
                  <div className="absolute top-[0px] left-[219px] capitalize inline-block w-[117.22px] h-[23.03px]">
                    Or,Login with
                  </div>
                  <img
                    className="absolute top-[10.01px] left-[335.67px] w-[214.19px] h-0.5"
                    alt=""
                    src="/line-21.svg"
                  />
                </div>
                <div className="w-[500px] h-[82.03px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[11px] text-8xl">
                  <div
                    className="rounded-23xl bg-slateblue w-[461px] h-12 flex flex-row pt-[8.009942054748535px] pb-[8.010161399841309px] pr-[71.39656829833984px] pl-[54px] box-border items-center justify-start gap-[29px] cursor-pointer ml-[39px]"
                    onClick={onGoogleContainerClick}
                  >
                    <img
                      className="relative rounded-23xl w-10 h-10 object-cover"
                      alt=""
                      src="/google-logo@2x.png"
                    />
                    <h3 className="m-0 relative text-inherit capitalize font-normal font-inherit inline-block w-[263.87px] h-[33.87px] shrink-0">
                      Sign up with google
                    </h3>
                  </div>
                  <div className="text-[15px] inline-block w-[344.2px] h-[23.028894424438477px] shrink-0 ml-36 text-white font-poppins">
                    <span>
                      <span>
                        <span className="capitalize">{`Don’t `}</span>
                        <span className="lowercase">H</span>
                        <span className="capitalize">{`ave `}</span>
                        <span className="lowercase">A</span>
                        <span className="capitalize">n a</span>
                        <span className="lowercase">CC</span>
                        <span className="capitalize">ount?</span>
                      </span>
                      <span className="capitalize">
                        <span className="font-fresca">{` `}</span>
                      </span>
                    </span>
                    <span className="[text-decoration:underline] text-black">
                      <span className="capitalize"> R</span>
                      <span className="lowercase">egister here</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop2;
