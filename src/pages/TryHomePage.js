import HeaderTop1 from "../components/HeaderTop1";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";

const TryHomePage = () => {
  return (
      <div className="bg-dodgerblue w-[1440px] h-[1393px] overflow-auto shrink-0 flex flex-col items-center justify-start min-h-[810px]">
        <HeaderTop1 />
        <FormContainer />
        <div className="self-stretch bg-dgreen overflow-hidden flex flex-col py-[100px] pr-[211.59994506835938px] pl-[211.60000610351562px] items-center justify-start">
          <div className="w-[1000px] h-[264px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[39px] max-w-[1000px]">
            <div className="w-[1000px] flex flex-row items-start justify-start">
              <h1 className="m-0 relative text-inherit leading-[57.6px] font-normal font-inherit inline-block max-w-[1000px]">
                Our Offerings
              </h1>
            </div>
            <div className="w-[600px] overflow-hidden flex flex-row items-start justify-start text-[28px] font-inter">
              <h1 className="m-0 relative text-inherit tracking-[-1.6px] leading-[41.6px] font-normal font-inherit inline-block max-w-[600px]">
                <p className="m-0">
                  From cutting-edge software development to eye
                </p>
                <p className="m-0">{`catching user interfaces, we bring innovation to `}</p>
                <p className="m-0">{`life in a way you never thought was possible. `}</p>
                <p className="m-0">
                  We're here for you every step of your journey.
                </p>
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default TryHomePage;
