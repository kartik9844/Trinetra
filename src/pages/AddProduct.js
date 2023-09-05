import Navbarhome from "../components/Navbarhome";
import NameInputContainer from "../components/NameInputContainer";
import StatusSelectionContainer from "../components/StatusSelectionContainer";

const AddProduct = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-start">
      <Navbarhome />
      <div className="bg-darkslategray-200 w-[1461px] h-[1332px] flex flex-col pt-[38px] px-0 pb-0 box-border items-center justify-start">
        <main className="w-[1277px] h-[1245px] overflow-hidden shrink-0 flex flex-row py-0 px-[170px] box-border items-center justify-between relative">
          <section
            className="bg-dgray w-[1275px] h-[1240px] flex flex-col items-center justify-start gap-[45px] z-[0] text-center text-21xl text-black font-roboto"
            id="main"
          >
            <b className="relative leading-[48px] inline-block w-[520px]">
              Add Equipment
            </b>
            <NameInputContainer fullname="Name" inputLabel="Enter name" />
            <StatusSelectionContainer componentStatus="Status" />
            <StatusSelectionContainer
              componentStatus="Lab"
              propBackgroundColor="#272c30"
            />
            <NameInputContainer fullname="Make" inputLabel="Enter make" />
            <NameInputContainer
              fullname="Model No."
              inputLabel="Enter model number"
            />
            <NameInputContainer
              fullname="Quantity"
              inputLabel="Enter quantity"
            />
            <NameInputContainer
              fullname="Asset No."
              inputLabel="Enter asset number"
            />
            <NameInputContainer
              fullname="Per Hour Cost"
              inputLabel="Enter cost per hour"
            />
            <NameInputContainer
              fullname="Per Day Cost"
              inputLabel="Enter cost per day"
            />
            <NameInputContainer
              fullname="Per Month Cost"
              inputLabel="Enter cost per month"
            />
            <div className="w-[270px] overflow-hidden flex flex-col items-start justify-start text-17xl text-dwhite">
              <div className="self-stretch rounded-lg bg-dgreen flex flex-col p-3 items-center justify-center">
                <div className="self-stretch relative leading-[24px] font-medium">
                  Add Equipment
                </div>
              </div>
            </div>
          </section>
          <img
            className="absolute my-0 mx-[!important] w-full right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-[0.5px] z-[1]"
            alt=""
            src="/vector-200.svg"
          />
        </main>
      </div>
    </div>
  );
};

export default AddProduct;
