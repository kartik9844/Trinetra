const CardContainer = () => {
  return (
    <section className="self-stretch bg-dwhite h-[570px] overflow-hidden shrink-0 flex flex-row py-[60px] px-[170px] box-border items-center justify-center relative gap-[60px] text-left text-21xl text-black font-popins">
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] z-[0]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-popins">
          3D Lab
        </h1>
        <div className="self-stretch relative text-base leading-[24px]">
          3D Lab allows users to innovate, experiment with materials and quickly
          draft and design accurate prototypes using cutting-edge 3D printing
          technologies.
        </div>
        <div className="overflow-hidden" />
      </div>
      <div className="w-[580px] h-[455px] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[1]">
        <img
          className="relative w-[580px] h-[487px] object-cover"
          alt=""
          src="/img-20220726-182156-1-1@2x.png"
        />
      </div>
      <img
        className="absolute my-0 mx-[!important] w-full right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-[0.5px] z-[2]"
        alt=""
        src="/vector-2001.svg"
      />
    </section>
  );
};

export default CardContainer;
