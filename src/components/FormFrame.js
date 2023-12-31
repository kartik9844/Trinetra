import { TextField, Button } from "@mui/material";

const FormFrame = () => {
  return (
    <div className="w-[1362px] h-[434px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[39px] text-left text-5xl text-black font-popins">
      <img
        className="relative w-[1362px] h-60"
        alt=""
        src="/rectangle-27.svg"
      />
      <div className="w-[927px] h-[155px] overflow-hidden shrink-0 flex flex-col items-start justify-start mr-[325px]">
        <div className="relative w-[378px] h-[50px] overflow-hidden shrink-0">
          <div className="absolute top-[9px] left-[0px] w-[220px] h-[41px] flex flex-col items-start justify-start">
            <div className="relative tracking-[0.15px] leading-[12px] font-extrabold flex items-center w-[220px] h-7 shrink-0">
              Person name:
            </div>
            <div className="self-stretch flex-1 relative left-2 text-xs font-popins text-dimgray-200 mt-[-4.5px]">
              Who is ordering ?
            </div>
            <div className="self-stretch relative h-0.5 mt-[-4.5px]" />
          </div>
          
        </div>
        <div className="relative w-[507px] h-[154px] overflow-hidden shrink-0 mt-[-49px]">
          
          <TextField
            className="[border:none] bg-[transparent] absolute top-[0px] left-[155px]"
            sx={{ width: 220 }}
            color="primary"
            variant="standard"
            type="text"
            size="medium"
            margin="none"
          />
          <Button
            className="absolute top-[83px] left-[0px]"
            sx={{ width: 455 }}
            variant="contained"
            color="primary"
          >
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormFrame;
