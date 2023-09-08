import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const AdminLogin = () => {
  const onGoogleContainerClick = useCallback(() => {
    // Please sync "admin try" to the project
  }, []);

  return (
    <div className="relative w-full h-[1024px] overflow-hidden flex flex-col py-[123px] pr-[398px] pl-[397px] box-border items-center justify-center gap-[60px] bg-[url('/public/admin-login@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[49px] text-gray font-poppins">
      <h2 className="m-0 relative text-inherit uppercase font-bold font-inherit inline-block w-[601px] h-[68px] shrink-0">
        WELCOME BACK admin
      </h2>
      <div className="rounded-23xl bg-dodgerblue w-[645px] h-[590px] flex flex-col py-[29px] pr-[34.1397705078125px] pl-[46px] box-border items-start justify-start gap-[28px] text-11xl text-white">
        <div className="w-[513px] h-[219px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[9px]">
          <div className="w-[509px] h-[98px] overflow-hidden shrink-0 ml-1">
            <b className="absolute top-[350px] left-[480px]">
              <span>Email</span>
              <b className="font-inter text-red">*</b>
            </b>
            <Form.Group className="w-[490px] [border:none] bg-[transparent] absolute top-[390px] left-[480px]">
              <Form.Control type="text" placeholder="Enter your email" />
            </Form.Group>
          </div>
          <div className="w-[199px] h-11 overflow-hidden shrink-0 flex flex-col items-end justify-center">
            <div className="relative inline-block w-[199px] h-6 shrink-0">
              <b>
                <span>
                  <span className="uppercase">P</span>
                </span>
              </b>
              <span className="lowercase">
                <b>
                  <span>assword</span>
                  
                 
                </b>
                <b className="font-inter text-red">*</b>
              </span>
            </div>
          </div>
          <Form.Group className="[border:none] bg-[transparent] self-stretch h-[55px] ml-0">
            <Form.Control type="text" placeholder="Enter your password" />
          </Form.Group>
        </div>
        <div className="w-[564.86px] h-[247px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[19px] text-[20px] text-black">
          <div className="w-[508px] h-[86px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[14px]">
            <div className="w-[170.5px] h-[26.03px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[9px]">
              <Form.Check className="relative" />
              <div className="relative capitalize inline-block w-[400px] h-[30.03px] shrink-0">
                {" "}
                remember me
              </div>
            </div>
            <div className="rounded-46xl w-[480px] h-[48px] overflow-hidden shrink-0 flex flex-col items-end justify-center ml-7">
              <Form.Group className="w-[480px] [border:none] bg-[transparent]">
                <Form.Control type="text" placeholder="Login" />
              </Form.Group>
            </div>
          </div>
          <div className="w-[564.86px] h-[142px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[30px] text-[21px] font-fresca">
            <div className="w-[564.86px] h-[89px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[19px]">
              <div className="w-[549.86px] h-[23.028894424438477px] ml-[15px]">
                <img
                  className="absolute top-[680px] left-[520px] rounded-23xl w-[200px] h-px"
                  alt=""
                  src="/line-1.svg"
                />
                <div className="absolute top-500px] left-[680px] capitalize inline-block w-[117.22px] h-[23.03px]">
                  Or,Login with
                </div>
                <img
                  className="absolute top-[678px] left-[765px] w-[210px] h-0.5"
                  alt=""
                  src="/line-2.svg"
                />
              </div>
              <div
                className="rounded-46xl bg-slateblue w-[479px] h-[46px] flex flex-row pt-[8.009942054748535px] pb-[8.010161399841309px] pr-[71.39656829833984px] pl-[54px] box-border items-center justify-start gap-[29px] cursor-pointer ml-7 text-[27px] font-poppins"
                onClick={onGoogleContainerClick}
              >
                <img
                  className="relative rounded-23xl w-10 h-10 object-cover"
                  alt=""
                  src="/google-logo@2x.png"
                />
                <div className="relative capitalize inline-block w-[280px] h-[34px] shrink-0">
                  Sign up with google
                </div>
              </div>
            </div>
            <div className="text-[22px] font-poppins inline-block w-[423px] h-[23px] shrink-0 ml-[65px] text-white">
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
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
