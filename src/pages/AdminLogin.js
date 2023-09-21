import { useCallback } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeaderTop1 from "../components/HeaderTop1";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onSignUpContainerClick = useCallback(() => {
    navigate("/admin-try");
  }, [navigate]);

  const onGoogleContainerClick = useCallback(() => {
    navigate("/admin-try");
  }, [navigate]);

  const onIfYouHaveClick = useCallback(() => {
    navigate("/sign-up");
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
    <div className="relative w-full h-[1024px] overflow-hidden flex flex-col py-0 px-px box-border items-start justify-start gap-[54px]  bg-cover bg-no-repeat bg-[top]font-popins">
      <img
          className="relative top-[30px] -right-[675px] w-[246.5px] h-[82px] object-cover cursor-pointer"
          alt=""
          src="/logo1@2x.png"
        />
        <div className="relative -right-[690px]  self-stretch text-inherit leading-[25px]font-popins flex items-center w-[470px] shrink-0">
            <ul className="-m-0 pl-[45px]">
              Welcome Admin
            </ul>
          </div>
      <section className=" w-[1021px] h-[682px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[24px] text-left text-30xl text-gray font-poppins">
        
        <div className="absolute top-[150px] left-60 rounded-23xl  w-[340px] h-[410px] flex flex-col pt-[35px] pb-[2.971099853515625px] pr-[48px] pl-12 box-border items-start justify-start gap-[23px] ml-[376px] text-xl text-black">
          <div className="relative -top-4 left-0 w-[250px] h-[91px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[6px]">
            <div className="relative -left-5 capitalize not-italic inline-block h-[30px] ml-5">
              <b>Email</b>
              <b className="font-popins text-firebrick">*</b>
            </div>
            <Form.Group className="  [border-solid] border-t-2  bg-[transparent] self-stretch h-[55px] ml-0">
              <Form.Control type="text" placeholder="Enter your email" />
            </Form.Group>
          </div>
          <div >
            {/* <div className="w-[511px] h-[180px] overflow-hidden shrink-0 flex flex-col items-start justify-center gap-[19px]"> */}
            <div className="relative -top-12 -left-[0px] w-[250px] h-[91px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[6px]">
            <div className="relative -left-5 capitalize non-italic inline-block h-[30px] ml-5">
              <b>Password</b>
              <b className="font-popins  text-firebrick">*</b>
            </div>
            <Form.Group className="[border:none] bg-[transparent] self-stretch h-[55px] ml-0">
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
          </div>
            {/* </div> */}
            <div className="relative -top-10
             only:w-[500px] h-[210px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[19px] text-black font-popins font-thin">
              <div className="w-[500px] h-[77px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[5px]">
                <div className="w-[200px] h-[26.5px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[9px] ml-3.5">
                  <Form.Check className="relative" />
                  <div className="relative capitalize inline-block -top-1 w-[150px] h-[23.03px] shrink-0">
                    {" "}
                    remember me
                  </div>
                </div>
                <div className="realtive 
                w-[485px] h-[50px] overflow-hidden shrink-0 flex flex-col items-end justify-center -ml-[7px]">
                  <Form.Group className="text-blue-600 w-[469px] [border:none] bg-[transparent]">
                  <Button variant="dark"className="relative -top-1 -left-2  w-[250px]" onClick={onSignUpContainerClick}>Login</Button>
                  
                  </Form.Group>
                  
                </div>
              </div>
              <div className="w-[550px] h-[123.03px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[18px] text-2xl">
                <div className="relative w-[150px] h-[10px] -left-20">
                  <img
                    className="absolute top-[12px] left-[11px] rounded-23xl w-[150px] h-px"
                    alt=""
                    src="/line-11.svg"
                  />
                  <div className="absolute -top-[1px] left-[161px]  inline-block w-[260px] h-[23.03px]">
                    Or,login with
                  </div>
                  <img
                    className="absolute top-[10px] left-[289px] w-[70px] h-1"
                    alt=""
                    src="/line-21.svg"
                  />
                </div>
                <div className="w-[480px] h-[82.03px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[11px] text-8xl">
                  <div
                    className="relative -left-10 rounded-23xl w-[440px] h-9  flex flex-row pt-[8.009942054748535px] pb-[8.010161399841309px] pr-[71.39656829833984px] pl-[54px] box-border items-center justify-start gap-[40px] cursor-pointer ml-[39px]"
                    onClick={onGoogleContainerClick}
                  >
                    <Form.Group className="text-blue-600 w-[469px] [border:none] bg-[transparent]">
                  <Button variant="gray-500"  className="relative  -top-0 -left-[50px]  w-[250px]" onClick={onSignUpContainerClick}>Login with google</Button>
                  </Form.Group>
                  <img
                      className="relative -left-[320px] rounded-23xl w-7 h-7  object-cover"
                      alt=""
                      src="/google-logo@2x.png"
                    />  
                  </div>
                  <div className=" relative -left-[135px]  text-[13px] inline-block w-[320.2px] h-[23.028894424438477px] shrink-0 ml-36 text-black font-poppins" onClick={onIfYouHaveClick}>
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
                        <span className="font-popins">{` `}</span>
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
