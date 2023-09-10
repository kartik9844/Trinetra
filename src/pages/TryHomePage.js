import HeaderTop1 from "../components/HeaderTop1";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";

const TryHomePage = () => {
  return (
      <div >
        <HeaderTop1 />
        <FormContainer />
        <div className="self-stretch bg-dgreen overflow-hidden flex flex-col py-[100px] pr-[211.59994506835938px] pl-[211.60000610351562px] items-center justify-start">
          <div className="w-[1000px] h-[264px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[39px] max-w-[1000px]">
            <div className="w-[1000px] flex flex-row items-start justify-start">
              <h1 className="m-0 relative text-lg leading-[57.6px] font-normal font-inherit inline-block max-w-[1000px]">
                Our Offerings
              </h1>
            </div>
            <div className="w-[800px] overflow-hidden flex flex-row items-start justify-start text-[28px] font-inter">
              <h1 className="m-0 relative text-inherit tracking-[-1.6px] leading-[41.6px] font-normal font-inherit inline-block max-w-[600px]">
                <p className="m-0">
                Infinity Studio, with IESA, Karnataka Govt, DST, Nidhi PRAYAS, offers mechatronics innovation: ideation-to-prototype, 3D & Smart Labs, cutting-edge fabrication tools.
                </p>
                Join us and unleash your mechatronics potential
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default TryHomePage;
