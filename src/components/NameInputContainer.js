const NameInputContainer = ({ fullname, inputLabel }) => {
  return (
    <div className="w-[600px] overflow-hidden flex flex-col items-start justify-center gap-[4px] text-left text-5xl text-black font-popins">
      <div className="self-stretch relative leading-[20px] font-medium">
        {fullname}
      </div>
      <div className="self-stretch rounded-md bg-dwhite flex flex-row py-2 px-3 items-center justify-start text-lgi text-gray-600 border-[1px] border-solid border-gray-700">
        <div className="flex-1 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap h-5">
          {inputLabel}
        </div>
      </div>
    </div>
  );
};

export default NameInputContainer;
