import HeaderTop1 from "../components/HeaderTop1";
import CardContainer from "../components/CardContainer";

const AboutPage = () => {
  return (
    <div className="relative bg-dwhite w-full h-[2138px] flex flex-col pt-0.5 px-0 pb-0 box-border items-center justify-start gap-[5px]">
      <HeaderTop1 />
      <section className="self-stretch bg-dgreen overflow-hidden flex flex-row py-[60px] px-[170px] items-center justify-center relative gap-[60px] text-left text-21xl text-black font-popins">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] z-[0]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-popins">
            Infinity Studio
          </h1>
          <div className="self-stretch relative text-base leading-[24px]">{`An idea-to-prototype lab that serves as a one-stop solution for innovators, startups and industries seeking opportunities specifically in the mechatronics sector. Set up in association with India Electronics and Semiconductor Association (IESA), Government of Karnataka, Department of Science & Technology (DST) and Nidhi PRAYAS, it offers state-of-the-art infrastructure and extensive in-house facilities to students, startups, MSMEs, and innovators seeking opportunities mainly in the mechatronics sector. To guide them through every stage of product development from ideation and prototyping to testing and validation, we offer a host of services that include skill development, prototyping support and technical consultation.`}</div>
        </div>
        <div className="w-[582px] h-[432px] overflow-hidden shrink-0 flex flex-row py-1 px-0 box-border items-start justify-start z-[1]">
          <img
            className="relative w-[588px] h-[430px] object-cover"
            alt=""
            src="/img-20220726-182319-2-1@2x.png"
          />
        </div>
        <img
          className="absolute my-0 mx-[!important] w-full right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-[0.5px] z-[2]"
          alt=""
          src="/vector-2001.svg"
        />
      </section>
      <section className="self-stretch bg-dblack h-[409px] overflow-hidden shrink-0 flex flex-row pt-[15px] pb-0 pr-[170px] pl-[121px] box-border items-center justify-center relative gap-[72px] text-left text-21xl text-whitesmoke font-popins">
        <div className="h-[285px] overflow-hidden flex flex-row items-start justify-center z-[0]">
          <img
            className="relative w-[499px] h-[330.5px] object-cover"
            alt=""
            src="/144a5661-1@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] z-[1]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-popins">
            Smart Lab
          </h1>
          <div className="self-stretch relative text-base leading-[24px]">
            Smart Lab helps students, startups and innovators learn new concepts
            and explore new technologies related to lot and electronics.
            Extensively equipped with a wide variety of testing and measuring
            instruments, microcontrollers, sensors, hardware tools and software,
            it enables the quick development, testing and deployment of lot and
            robotic prototypes. Additionally, the Smart Lab also offers
            workshops and product cohorts to further the understanding of
            technology and aid skill development.
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] w-full right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-[0.5px] z-[2]"
          alt=""
          src="/vector-2001.svg"
        />
      </section>
      <section className="self-stretch bg-darkslategray-200 h-[498px] overflow-hidden shrink-0 flex flex-row pt-0 px-[170px] pb-[60px] box-border items-center justify-center relative gap-[60px] text-left text-21xl text-snow font-popins">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] z-[0]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-popins">
            Mechanical Lab
          </h1>
          <div className="self-stretch relative text-base leading-[24px]">
            Mechanical Lab is equipped with various design tools and machines
            like lathes, mills, drills, saws, and calipers. These facilitate
            rapid prototyping and specialized computer software is pressed into
            play for the testing and analysis of product performance. To support
            complete product development and aid even customized fabrication,
            the Lab also provides startups with high-quality metal cutting and
            bending services using laser technology. Advanced machinery for CNC
            milling, turning, drilling and tapping is also available.
          </div>
        </div>
        <img
          className="w-[546px] h-[313px] overflow-hidden shrink-0 object-cover z-[1]"
          alt=""
          src="/image-container@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] w-full right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-[0.5px] z-[2]"
          alt=""
          src="/vector-2001.svg"
        />
      </section>
      <CardContainer />
    </div>
  );
};

export default AboutPage;
