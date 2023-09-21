const LabMembersContainer1 = () => {
  return (
    <div className="self-stretch bg-dgray overflow-hidden flex flex-row py-[60px] px-[170px] items-center justify-center relative gap-[60px] text-center text-21xl text-black font-popins">
      <div className="flex-1 flex flex-col items-center justify-start gap-[24px] z-[0]">
        <b className="relative leading-[48px] inline-block w-[520px]">
          Lab Members
        </b>
        <div className="self-stretch flex flex-row py-5 px-0 items-start justify-center gap-[40px] text-43xl-5">
          <div className="rounded-58xl bg-dwhite w-[350px] h-[255px] flex flex-col py-3 px-0 box-border items-center justify-center gap-[20px]">
            <div className="rounded-31xl bg-gray-800 w-[100px] flex flex-col items-center justify-center">
              <div className="self-stretch relative leading-[100px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-[100px] shrink-0">
                👤
              </div>
            </div>
            <div className="self-stretch h-[60px] flex flex-col items-start justify-start gap-[8px] text-xl">
              <div className="self-stretch relative leading-[28px]">
                <p className="m-0">3D lab - Nandish Houti</p>
                <p className="m-0">Product Design Engineer.</p>
              </div>
              <div className="self-stretch relative text-base leading-[24px] text-gray-600">
                Email: john.doe@example.com
              </div>
            </div>
          </div>
          <div className="rounded-58xl bg-dwhite w-[350px] h-[255px] flex flex-col py-3 px-0 box-border items-center justify-center gap-[20px]">
            <div className="rounded-31xl bg-gray-800 w-[100px] flex flex-col items-center justify-center">
              <div className="self-stretch relative leading-[100px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-[100px] shrink-0">
                👤
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl">
              <div className="self-stretch relative leading-[28px] inline-block h-[59px] shrink-0">
                <p className="m-0">Mech lab - Nandish Houti</p>
                <p className="m-0">Product Design Engineer.</p>
                <p className="m-0">{` `}</p>
              </div>
              <div className="self-stretch relative text-base leading-[24px] text-gray-600">
                Email: jane.smith@example.com
              </div>
            </div>
          </div>
          <div className="rounded-58xl bg-dwhite w-[350px] h-[255px] flex flex-col py-3 px-0 box-border items-center justify-center gap-[20px]">
            <div className="rounded-31xl bg-gray-800 w-[100px] flex flex-col items-center justify-center">
              <div className="self-stretch relative leading-[100px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap h-[100px] shrink-0">
                👤
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl">
              <div className="self-stretch relative leading-[28px]">
                <p className="m-0">Smart lab - Omkar Bhatia</p>
                <p className="m-0">Product Engineer.</p>
              </div>
              <div className="self-stretch relative text-base leading-[24px] text-gray-600">
                Email: omkarbhatia@dfmail.org
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute my-0 mx-[!important] w-full right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-[0.5px] z-[1]"
        alt=""
        src="/vector-2001.svg"
      />
    </div>
  );
};

export default LabMembersContainer1;
