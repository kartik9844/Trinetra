import LabMembersContainer1 from "../components/LabMembersContainer1";
import HeaderTop1 from "../components/HeaderTop1";
const Contact = () => {
  
  return (
    <div className="relative bg-dwhite w-full h-[1024px] flex flex-col items-center justify-start text-center text-21xl text-black font-roboto">
      
      <div className="self-stretch bg-dgray overflow-hidden flex flex-row py-[60px] px-[170px] items-center justify-center relative gap-[60px]">
      
        <div className="flex-1 flex flex-col items-center justify-start gap-[24px] z-[0]">
        <HeaderTop1 />
          <b className="relative leading-[48px] inline-block w-[520px]">
            Get in Touch with Us
          </b>
          <div className="relative text-base leading-[24px] inline-block w-[520px]">
            We're thrilled to connect with you! Our contact page is designed to
            help you reach out to our labs easily.
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] w-full right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-[0.5px] z-[1]"
          alt=""
          src="/vector-2001.svg"
        />
      </div>
      <LabMembersContainer1 />
      <div className="self-stretch bg-dgray h-[217px] overflow-hidden shrink-0 flex flex-row p-[60px] box-border items-center justify-center text-xl text-darkslategray-200">
        <div className="h-[100px] flex flex-row items-center justify-center gap-[60px]">
          <div className="self-stretch relative text-inherit leading-[28px] font-inherit flex items-center w-[465px] shrink-0">
            <ul className="m-0 pl-[27px]">
              Lab Address: Deshpande Foundation,, Skill Development Center,,
              Airport Road, Hubballi, Karnataka 580030, India.
            </ul>
          </div>
          <div className="self-stretch relative leading-[28px] flex items-center justify-center w-[221px] shrink-0">
            Phone: +91 9611532933
          </div>
          <div className="self-stretch relative leading-[28px] flex items-center justify-center w-[232px] shrink-0">
            Email: foundation@dfmail.org
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
