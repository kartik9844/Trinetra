const Container = () => {
  return (
    <div className="w-[574.37px] h-[258.52px] overflow-hidden shrink-0 flex flex-col pt-0 px-0 pb-[0.00000762939453125px] box-border items-center justify-start gap-[19px] text-left text-17xl text-dwhite font-inter">
      <div className="w-[574.37px] h-[126.3492431640625px] flex flex-col items-start justify-start gap-[17px] ml-0">
        <b className="inline-block w-[123.61px] h-[44.055274963378906px] shrink-0 ml-[39px]">
          <span>
            <span className="uppercase">E</span>
            <span className="lowercase">mail</span>
          </span>
          <span className="uppercase text-red">*</span>
        </b>
        <div className="rounded-23xl box-border w-[574.37px] h-[65.08px] flex flex-row p-2.5 items-center justify-center text-xl font-fresca border-[2px] border-solid border-black">
          <div className="relative inline-block w-[220px] shrink-0">
            <span className="uppercase">e</span>
            <span className="lowercase">nter your mail address</span>
          </div>
        </div>
      </div>
      <div className="w-[565.84px] h-[113.14196014404297px] flex flex-col py-0 pr-0 pl-[0.000008140923455357552px] box-border items-start justify-start gap-[9px] ml-[9px]">
        <b className="inline-block w-[206.73px] h-[44.055274963378906px] shrink-0 ml-[17px]">
          <span>
            <span className="uppercase">P</span>
          </span>
          <span className="lowercase">
            <span>assword</span>
            <span className="text-red">*</span>
          </span>
        </b>
        <div className="rounded-23xl box-border w-[565.84px] h-[60.07537841796875px] flex flex-row p-2.5 items-center justify-center ml-0 text-xl font-fresca border-[2px] border-solid border-black">
          <div className="relative capitalize">{`Enter password                                                               `}</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
