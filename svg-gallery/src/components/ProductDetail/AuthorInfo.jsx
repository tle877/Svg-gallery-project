// import React from "react";
import Avatar from "../../assets/avatar.png"
const AuthorInfo = () => {
  return (
    <div className="w-full inline-flex items-start gap-[22px] relative">
      <img className="relative authorAvatar" alt="Mask group" src={Avatar} />
      <div className="inline-flex flex-col items-start gap-[9px] relative flex-[0_0_auto]">
        <div className="relative authorName">
          William
        </div>
        <div className="relative w-[320px] h-[18px] mr-[-10.00px]">
          <div className="absolute top-0 left-0 opacity-40 [font-family:'Metropolis-Regular',Helvetica] font-normal text-e-c-abf-e text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
            New York /
          </div>
          <div className="absolute top-0 left-[79px] opacity-40 [font-family:'Metropolis-Regular',Helvetica] font-normal text-e-c-abf-e text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
            Crafts /
          </div>
          <div className="absolute top-0 left-[136px] opacity-40 [font-family:'Metropolis-Regular',Helvetica] font-normal text-e-c-abf-e text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
            2023-11-13 /
          </div>
          <div className="absolute w-[83px] h-[18px] top-0 left-[227px]">
            <div className="absolute top-0 left-0 opacity-40 [font-family:'Metropolis-Regular',Helvetica] font-normal text-e-c-abf-e text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
              Views：
            </div>
            <div className="absolute top-0 left-[52px] opacity-40 [font-family:'Metropolis-Regular',Helvetica] font-normal text-e-c-abf-e text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
              2341
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthorInfo;