import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer4 from "../components/FormContainer4";
import FormContainer1 from "../components/FormContainer1";
import FilterForm from "../components/FilterForm";
import FormContainer2 from "../components/FormContainer2";
import FormRadioGroup1 from "../components/FormRadioGroup1";
import HeaderTop1 from "../components/HeaderTop1";


const RegisterFrom = () => {
  const navigate = useNavigate();

  

  const onSubmitButtonContainerClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  return (
    <div className="relative bg-lavender w-full h-[6137px] overflow-hidden text-left text-5xl text-gray-300 font-popins">
      <HeaderTop1/>
      <div className="absolute top-[150
        px] left-[402px] w-[636px] overflow-hidden flex flex-col items-end justify-center text-30xl text-black font-popins">
        <b className="relative uppercase inline-block w-[601px] h-[68px] shrink-0">
          {" "}
          Registration form
        </b>
      </div>

      <div className="absolute top-[653px] left-[243px] rounded-lg bg-dwhite box-border w-[954px] h-[315px] flex flex-col pt-[24.669998168945312px] pb-[24.8800048828125px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] text-[33px] border-[1px] border-solid border-gainsboro-100">
        
        
      
        
      </div>
      <div className="absolute top-[1219px] left-[242px] w-[956px] overflow-hidden flex flex-col items-center justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[955px] h-[130px] flex flex-col pt-[24.65999984741211px] pb-[34.900001525878906px] pr-80 pl-[24.889999389648438px] items-start justify-start gap-[30px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[741px] flex flex-row pt-0 px-0 pb-[7.152557373046875e-7px] box-border items-start justify-start">
            <div className="w-[716px] h-10 flex flex-row pt-0 px-0 pb-[0.2200000286102295px] box-border items-start justify-start">
              <div className="relative leading-[24px] flex items-center w-[716px] h-10 shrink-0">
                Startup Name*
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.17px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <div className="w-[522px] h-[35px] flex flex-row pt-[0.8899999856948853px] pb-[1.9999994039535522px] pr-[215.1099853515625px] pl-0 box-border items-start justify-start relative text-dimgray-100">
            <div className="w-[295px] h-[34px] overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[1.1100000143051147px] box-border items-start justify-start max-w-[295.1099853515625px] z-[0]">
              <div className="relative tracking-[0.2px] leading-[20px]">
                Your answer
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] w-full right-[0%] bottom-[-2px] left-[0%] bg-gray-500 h-px z-[1]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[1401px] left-[239px] w-[962px] overflow-hidden flex flex-col items-end justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[955px] h-[127px] flex flex-col pt-[24.669998168945312px] pb-[34.88999938964844px] pr-80 pl-[24.889999389648438px] items-start justify-start gap-[30px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[764px] h-[43px] flex flex-row items-start justify-start">
            <div className="w-[764px] h-[43px] flex flex-row pt-0 px-0 pb-[0.2200002670288086px] box-border items-start justify-start">
              <div className="relative leading-[24px]">Phone Number</div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.59px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <div className="w-[482px] h-[29px] flex flex-row pt-[0.8899999856948853px] pb-[1.9999994039535522px] pr-[215.1099853515625px] pl-0 box-border items-start justify-start relative text-dimgray-100">
            <div className="w-[295px] h-7 overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[1.1100000143051147px] box-border items-start justify-start max-w-[295.1099853515625px] z-[0]">
              <div className="relative tracking-[0.2px] leading-[20px]">
                Your answer
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] w-full right-[0%] bottom-[-2px] left-[0%] bg-gray-500 h-px z-[1]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[1580px] left-[242px] w-[956px] overflow-hidden flex flex-col items-end justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[954px] h-[150px] flex flex-col pt-[24.669998168945312px] pb-[34.88999938964844px] pr-80 pl-[24.889999389648438px] items-start justify-start gap-[30px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[601px] h-[35px] flex flex-row items-start justify-start">
            <div className="w-[598px] h-[35px] flex flex-row pt-0 px-0 pb-[0.2200002670288086px] box-border items-start justify-start">
              <div className="relative leading-[24px]">
                Do you have a female co-founder?
              </div>
            </div>
            <div className="ml-[-0.31px]" />
          </div>
          <div className="flex flex-row pt-[0.8899999856948853px] pb-[1.9999994039535522px] pr-[215.1099853515625px] pl-0 items-start justify-start relative text-dimgray-100">
            <div className="w-[264px] h-[23px] overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[1.1100000143051147px] box-border items-start justify-start max-w-[295.1099853515625px] z-[0]">
              <div className="relative tracking-[0.2px] leading-[20px] flex items-center w-[264px] h-[23px] shrink-0">
                Your answer
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] w-full right-[0%] bottom-[-2.11px] left-[0%] bg-gray-500 h-px z-[1]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[1782px] left-[242px] w-[956px] overflow-hidden flex flex-col items-start justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[955px] h-[352px] flex flex-col pt-[24.65999984741211px] pb-[24.879989624023438px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[171px] h-7 flex flex-row pt-0 px-0 pb-[4.76837158203125e-7px] box-border items-start justify-start">
            <div className="w-[153px] h-[31px] flex flex-row pt-0 px-0 pb-[0.23000001907348633px] box-border items-start justify-start">
              <div className="relative leading-[24px] flex items-center w-[165px] h-7 shrink-0">
                Startup Sector
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.23000001907348633px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.84px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <FormContainer1 />
        </div>
      </div>
      <div className="absolute top-[2186px] left-[242px] w-[956px] overflow-hidden flex flex-col items-start justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[955px] h-[457px] flex flex-col pt-[24.670000076293945px] pb-[24.879989624023438px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[648px] h-11 flex flex-row pt-0 pb-[7.152557373046875e-7px] pr-[0.0000057220458984375px] pl-0 box-border items-start justify-start">
            <div className="w-[156px] h-[38px] flex flex-row pt-0 px-0 pb-[0.2200000286102295px] box-border items-start justify-start">
              <div className="relative leading-[24px] flex items-center w-[565px] h-[38px] shrink-0">
                Startup Stage
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-219px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <FilterForm />
        </div>
      </div>
      <div className="absolute top-[2695px] left-[238px] w-[964px] overflow-hidden flex flex-col items-end justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[955px] h-[168px] flex flex-col pt-[24.669998168945312px] pb-[34.88999938964844px] pr-80 pl-[24.889999389648438px] items-start justify-start gap-[30px] border-[1px] border-solid border-gainsboro-100">
          <div className="flex flex-row py-0 pr-[0.0000057220458984375px] pl-0 items-start justify-start">
            <div className="w-[627px] h-[49px] flex flex-row pt-0 px-0 pb-[0.2200002670288086px] box-border items-start justify-start">
              <div className="relative leading-[24px] flex items-center w-[627px] h-[49px] shrink-0">
                Founder's LinkedIn ID
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.38px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <div className="w-[327px] h-[35px] flex flex-row pt-[0.8899999856948853px] pb-[1.9999994039535522px] pr-[215.1099853515625px] pl-0 box-border items-start justify-start relative text-dimgray-100">
            <div className="w-[295px] h-[35px] overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[1.1100000143051147px] box-border items-start justify-start max-w-[295.1099853515625px] z-[0]">
              <div className="relative tracking-[0.2px] leading-[20px]">
                Your answer
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] w-full right-[0%] bottom-[-2px] left-[0%] bg-gray-500 h-px z-[1]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[2922px] left-[240px] w-[960px] overflow-hidden flex flex-col items-end justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[955px] flex flex-col pt-[24.670000076293945px] px-[24.88888931274414px] pb-[34.88999938964844px] items-start justify-start gap-[30.22px] border-[1px] border-solid border-gainsboro-100">
          <div className="relative leading-[24px] flex items-center w-[480px] h-11 shrink-0 max-w-[590.2222290039062px]">
            Startup's Website
          </div>
          <div className="flex flex-row pt-[0.8899999856948853px] pb-[1.9999994039535522px] pr-[215.1099853515625px] pl-0 items-start justify-start relative text-dimgray-100">
            <div className="overflow-hidden flex flex-row pt-0 px-0 pb-[1.1100000143051147px] box-border items-start justify-start max-w-[295.1099853515625px] z-[0]">
              <div className="relative tracking-[0.2px] leading-[20px]">
                Your answer
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] w-full right-[0%] bottom-[-2px] left-[0%] bg-gray-500 h-px z-[1]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[3131px] left-[245px] rounded-lg bg-dwhite box-border w-[950px] flex flex-col pt-[24.669998168945312px] pb-[24.889999389648438px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row pt-0 px-0 pb-[0.2200002670288086px] items-start justify-start">
            <div className="relative leading-[24px]">
              Have you registered your startup?
            </div>
          </div>
          <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.95px] text-base text-tomato">
            <div className="relative tracking-[0.2px] leading-[24px]">*</div>
          </div>
        </div>
        <div className="w-[590.22px] flex flex-col items-start justify-start text-lgi">
          <div className="w-[590.22px] flex flex-row py-2 pr-[534.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
            <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
              <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
              <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                <div className="relative leading-[20px]">Yes</div>
              </div>
            </div>
          </div>
          <div className="w-[590.22px] flex flex-row py-2 pr-[539.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
            <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
              <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
              <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                <div className="relative leading-[20px]">No</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3348px] left-[240px] w-[960px] overflow-hidden flex flex-col items-end justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[954px] flex flex-col p-[24.88888931274414px] items-start justify-start gap-[16.11px] border-[1px] border-solid border-gainsboro-100">
          <div className="relative leading-[24px] inline-block max-w-[590.2222290039062px]">
            <span>Registration/Incorporation year</span>
            <span className="text-base">.</span>
          </div>
          <div className="w-[275px] flex flex-col items-start justify-start text-lgi text-dimgray-100">
            <div className="relative tracking-[0.3px] leading-[16px] flex items-center w-[51px] h-4 shrink-0">
              Date
            </div>
            <div className="w-[162px] flex flex-row pt-3.5 px-0 pb-2.5 box-border items-start justify-start mt-[-0.88px] text-5xl text-gray-300">
              <div className="w-[169px] h-[34px] flex flex-row items-start justify-start relative">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row py-px px-0 items-center justify-start z-[0]">
                  <div className="flex-1 h-[22px] overflow-hidden flex flex-row py-px pr-[34px] pl-0 box-border items-start justify-start">
                    <div className="relative tracking-[0.2px] leading-[20px]">
                      dd-mm-yyyy
                    </div>
                  </div>
                  <div className="w-4 h-[18px] flex flex-row pt-0.5 px-0.5 pb-[4.75px] box-border items-start justify-start">
                    <img
                      className="relative w-3 h-[11.25px] overflow-hidden shrink-0"
                      alt=""
                      src="/image.svg"
                    />
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] w-full right-[0%] bottom-[-2px] left-[0%] bg-gray-500 h-px z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3575px] left-[241px] w-[958px] overflow-hidden flex flex-col items-start justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[954px] flex flex-col pt-[24.669998168945312px] pb-[32.88999938964844px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
          <div className="flex flex-row py-0 pr-[0.0000057220458984375px] pl-0 items-start justify-start">
            <div className="flex flex-row pt-0 px-0 pb-[0.2200002670288086px] items-start justify-start">
              <div className="relative leading-[24px] flex items-center w-[436px] h-[41px] shrink-0">
                Explain your Problem Statement in brief.
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.34px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <div className="flex flex-row pt-3.5 px-0 pb-0 box-border items-start justify-start relative min-h-[24px] text-dimgray-100">
            <div className="my-0 mx-[!important] absolute bottom-[3px] left-[0px] overflow-hidden flex flex-row pt-0 px-0 pb-[1.1100000143051147px] box-border items-start justify-start max-w-[590.219970703125px] z-[0]">
              <div className="relative tracking-[0.2px] leading-[20px]">
                Your answer
              </div>
            </div>
            <div className="relative w-[590.22px] h-6 overflow-hidden shrink-0 min-h-[24px] z-[1]" />
            <div className="absolute my-0 mx-[!important] w-full top-[38px] right-[0%] left-[0%] bg-gray-500 h-px z-[2]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[3787px] left-[237px] w-[966px] overflow-hidden flex flex-col items-end justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[957px] h-[302px] flex flex-col pt-[24.669998168945312px] pb-[24.879989624023438px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
          <div className="flex flex-row py-0 pr-[0.0000057220458984375px] pl-0 items-start justify-start">
            <div className="flex flex-row pt-0 px-0 pb-[0.2200002670288086px] items-start justify-start">
              <div className="relative leading-[24px]">
                What support are you looking for from prototyping lab?
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-1.23px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <FormContainer2 />
        </div>
      </div>
      <div className="absolute top-[4147px] left-[240px] w-[960px] overflow-hidden flex flex-col items-end justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[954px] h-[308px] flex flex-col pt-[24.65999984741211px] pb-[24.900001525878906px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[642px] h-[46px] flex flex-row py-0 pr-[0.0000057220458984375px] pl-0 box-border items-start justify-start">
            <div className="w-[635px] h-10 flex flex-row pt-0 px-0 pb-[0.2200002670288086px] box-border items-start justify-start">
              <div className="relative leading-[24px] flex items-center w-[635px] h-10 shrink-0">
                Expected time of your project completion
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.34px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <div className="w-[590.22px] flex flex-col items-start justify-start text-lgi">
            <div className="w-[590.22px] flex flex-row py-2 pr-[440.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="w-[590px] h-8 flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] box-border items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px] flex items-center w-[193px] h-5 shrink-0">
                    Less than 30 days
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[590.22px] flex flex-row py-2 pr-[410.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px] flex items-center w-[242px] h-5 shrink-0">
                    Between 30 to 60 days
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[590.22px] flex flex-row py-2 pr-[410.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px]">
                    Between 60 to 90 days
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[590.22px] flex flex-row py-2 pr-[437.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px] flex items-center w-[198px] h-5 shrink-0">
                    More than 90 days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[4508px] left-[237px] w-[966px] overflow-hidden flex flex-col items-end justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[957px] h-[336px] flex flex-col pt-[24.669998168945312px] pb-[24.889999389648438px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[454px] h-[34px] flex flex-row py-0 pr-[0.010000228881835938px] pl-0 box-border items-start justify-start">
            <div className="w-[397px] h-[34px] flex flex-row pt-0 px-0 pb-[0.2200002670288086px] box-border items-start justify-start">
              <div className="relative leading-[24px] flex items-center w-[336px] h-6 shrink-0">
                Estimated budget of the project
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.3px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <div className="w-[590.22px] flex flex-col items-start justify-start text-lgi">
            <div className="w-[590.22px] flex flex-row py-2 pr-[418.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px]">
                    Less than 100 rupees
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[590.22px] flex flex-row py-2 pr-[440.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px] flex items-center w-48 h-5 shrink-0">
                    100 - 5000 rupees
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[590.22px] flex flex-row py-2 pr-[424.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px]">
                    5000 - 25000 rupees
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[590.22px] flex flex-row py-2 pr-[416.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px]">
                    25000 - 50000 rupees
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[590.22px] flex flex-row py-2 pr-[398.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px]">
                    More than 50000 rupees
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[4891px] left-[237px] w-[966px] overflow-hidden flex flex-col items-end justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[954px] h-[263px] flex flex-col pt-[24.669998168945312px] pb-[24.889999389648438px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[815px] h-12 flex flex-row py-0 pr-[0.0000057220458984375px] pl-0 box-border items-start justify-start">
            <div className="w-[743px] h-12 flex flex-row pt-0 px-0 pb-[0.2200002670288086px] box-border items-start justify-start">
              <div className="relative leading-[24px]">
                Which Lab support do you need?
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.74px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <div className="w-[590.22px] h-36 flex flex-col pt-[7.8900146484375px] px-0 pb-0 box-border items-start justify-start gap-[11px] text-lgi">
            <div className="w-[401.55px] h-[92.11px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[15px]">
              <div className="flex flex-row items-center justify-start gap-[11.99px]">
                <div className="rounded-10xs box-border w-[19.56px] h-[19.56px] flex flex-col items-center justify-center z-[1] border-[9px] border-solid border-dimgray-200">
                  <div className="relative box-border w-4 h-4 border-[8px] border-solid border-dwhite" />
                </div>
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] items-start justify-start z-[0]">
                  <div className="relative leading-[20px]">Mechanical Lab</div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[11.99px]">
                <div className="rounded-10xs box-border w-[19.56px] h-[19.56px] flex flex-col items-center justify-center z-[1] border-[9px] border-solid border-dimgray-200">
                  <div className="relative box-border w-4 h-4 border-[8px] border-solid border-dwhite" />
                </div>
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] items-start justify-start z-[0]">
                  <div className="relative leading-[20px]">
                    <span>3D Printing Lab (3D Designing || 3D Printing</span>
                    <span className="text-[14.67px]">)</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[11.99px]">
                <div className="rounded-10xs box-border w-[19.56px] h-[19.56px] flex flex-col items-center justify-center z-[1] border-[9px] border-solid border-dimgray-200">
                  <div className="relative box-border w-4 h-4 border-[8px] border-solid border-dwhite" />
                </div>
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] items-start justify-start z-[0]">
                  <div className="relative leading-[20px]">
                    Smart Lab (Electronics || IoT || Robotics)
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[590px] h-[54px] flex flex-row flex-wrap items-center justify-start gap-[12px]">
              <div className="flex flex-row pt-[6.889999866485596px] pb-[7.999999523162842px] pr-[19.669998168945312px] pl-0 items-start justify-between">
                <div className="flex flex-row items-end justify-start gap-[11.99px]">
                  <div className="rounded-10xs box-border w-[19.56px] h-[19.56px] flex flex-col items-center justify-center z-[1] border-[9px] border-solid border-dimgray-200">
                    <div className="relative box-border w-4 h-4 border-[8px] border-solid border-dwhite" />
                  </div>
                  <div className="flex flex-row pt-0 px-0 pb-[1.1100000143051147px] items-start justify-start z-[0]">
                    <div className="relative tracking-[0.2px] leading-[20px]">
                      Other:
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[488px] h-[26px] flex flex-row pt-[23.559999465942383px] px-0 pb-0.5 box-border items-start justify-start">
                <div className="flex-1 relative bg-gray-500 h-px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[5205px] left-[241px] w-[958px] overflow-hidden flex flex-col items-start justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[957px] h-[381px] flex flex-col pt-[24.669998168945312px] pb-[24.879989624023438px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[731px] h-[50px] flex flex-row items-start justify-start">
            <div className="w-[731px] h-[50px] flex flex-row pt-0 px-0 pb-[0.2200002670288086px] box-border items-start justify-start">
              <div className="relative leading-[24px]">
                How did you get to know about us?
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.95px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <FormRadioGroup1 />
        </div>
      </div>
      <div className="absolute top-[5644px] left-[241px] w-[958px] overflow-hidden flex flex-col items-start justify-center">
        <div className="rounded-lg bg-dwhite box-border w-[957px] h-[193px] flex flex-col pt-[24.669998168945312px] pb-[24.889999389648438px] pr-[24.890029907226562px] pl-[24.889999389648438px] items-start justify-start gap-[16px] border-[1px] border-solid border-gainsboro-100">
          <div className="w-[726px] h-12 flex flex-row py-0 pr-[0.0000057220458984375px] pl-0 box-border items-start justify-start">
            <div className="w-[726px] h-12 flex flex-row pt-0 px-0 pb-[0.2200002670288086px] box-border items-start justify-start">
              <div className="relative leading-[24px]">
                Are you aware about the charges?
              </div>
            </div>
            <div className="flex flex-row pt-0 pb-[0.2200000286102295px] pr-[0.10000038146972656px] pl-1 items-start justify-start ml-[-0.66px] text-base text-tomato">
              <div className="relative tracking-[0.2px] leading-[24px]">*</div>
            </div>
          </div>
          <div className="w-[590.22px] flex flex-col items-start justify-start text-lgi">
            <div className="w-[590.22px] flex flex-row py-2 pr-[464.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px]">Yes I'm aware.</div>
                </div>
              </div>
            </div>
            <div className="w-[590.22px] flex flex-row py-2 pr-[377.219970703125px] pl-0 box-border items-start justify-start min-h-[24px]">
              <div className="flex flex-row pt-[1.8899999856948853px] px-0 pb-[1.9999994039535522px] items-center justify-start gap-[12px]">
                <div className="relative rounded-3xs box-border w-5 h-5 z-[1] border-[1px] border-solid border-dimgray-200" />
                <div className="flex flex-row pt-0 px-0 pb-[0.11000001430511475px] box-border items-start justify-start min-w-[1px] z-[0]">
                  <div className="relative leading-[20px]">
                    <span>No please share the details</span>
                    <span className="text-[14.67px]">.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="absolute top-[5981px] left-[372px] w-[696px] overflow-hidden flex flex-col items-start justify-center text-center text-29xl text-dwhite">
        <div className="w-[568px] h-[105px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[137px]">
          <div
            className="w-[219px] h-[105px] flex flex-row pt-0 pb-2.5 pr-[224.5800018310547px] pl-0 box-border items-start justify-start cursor-pointer"
            onClick={onSubmitButtonContainerClick}
          >
            <div className="rounded-[21px] bg-dgreen w-[239px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <div className="relative tracking-[0.25px] leading-[36px] font-medium flex items-center justify-center w-[219px] h-[105px] shrink-0">
                Submit
              </div>
            </div>
          </div>
          <div className="rounded w-[212px] h-[91px] overflow-hidden shrink-0 flex flex-row pt-0 pb-[0.11999988555908203px] pr-[9.370010375976562px] pl-[9.569992065429688px] box-border items-start justify-center text-[42px]">
            <div className="relative tracking-[0.25px] leading-[36px] font-medium [background:linear-gradient(26.57deg,_#53389e,_#6941c6)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[206px] h-[82px] shrink-0">
              Clear form
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFrom;
