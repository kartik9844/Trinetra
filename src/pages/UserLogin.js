import { useCallback, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeaderTop1 from "../components/HeaderTop1";
import { auth,provider} from "../components/firebase";
import {signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";

const Desktop2 = () => {
  const navigate = useNavigate();
   
  const [value,setvalue]= useState("")
  const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

  const onSignUpContainerClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onGoogleContainerClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onIfYouHaveClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);
  
  const newuserClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onAboutContainerClick = useCallback(() => {
    // Please sync "about page" to the project
  }, []);

  const onAdminButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleclick = () => {

    signInWithPopup(auth, provider)
  .then((result) => {
    // Google sign in succeeded.
    // Check if user already exists.
    const user = result.user;
    if (user.metadata.creationTime === user.metadata.lastSignInTime) {
      // This is a new user.
      newuserClick();
    } else {
      // This is an existing user.
      setvalue(data.user.email);
      localStorage.setItem("email",data.user.email);
      localStorage.setItem("uuid",user.uid);
      onGoogleContainerClick();
    }

  })
  .catch((error) => {
    // Handle error.
  });}


  const handleSignIn = () => {
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Handle successful sign-in
        const user = userCredential.user;
        console.log('Signed in:', user);
        localStorage.setItem("uuid",user.uid);
        onSignUpContainerClick();

      })
      .catch((error) => {
        // Handle sign-in errors
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  

  return (
    <div className="relative  w-full h-[1024px] overflow-hidden flex flex-col py-0 px-px box-border items-start justify-start gap-[54px]  bg-cover bg-no-repeat bg-[top]font-popins">
      <img
          className="relative top-[30px] -right-[675px] w-[246.5px] h-[82px] object-cover cursor-pointer"
          alt=""
          src="/logo1@2x.png"
        />
       <div className="relative -right-[690px]  self-stretch text-inherit leading-[25px]font-popins flex items-center w-[470px] shrink-0">
            <ul className="-m-0 pl-[45px]">
              Welcome User
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
              <Form.Control type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
              <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                  <Button variant="dark"className="relative -top-1 -left-2  w-[250px]" onClick={handleSignIn}>Login</Button>
                  
                  </Form.Group>
                  
                </div>
              </div>
              <div className="w-[550px] h-[123.03px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[18px] text-2xl">
                
                <div className="w-[480px] h-[82.03px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[11px] text-8xl">
                  <div className=" relative -left-[135px]  text-[13px] inline-block w-[320.2px] h-[23.028894424438477px] shrink-0 ml-36 text-black font-poppins" onClick={onIfYouHaveClick}>
                    <span>
                      <span>
                        <span className="capitalize">{`Don’t `}</span>
                        <span className="lowercase">H</span>
                        <span className="capitalize">{`ave `}</span>
                        <span className="lowercase">a</span>
                        <span className="capitalize">n A</span>
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
