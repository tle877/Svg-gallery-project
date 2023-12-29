// import React from "react";
import StarIcon from "@mui/icons-material/Star";
// import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./style.scss";
const Rating = () => {
  return (
    <div className="relative w-[355px] h-[129px] mt-5">
      <div className="w-[355px] h-[129px]">
        <div className="absolute w-[355px] h-[21px] top-0 left-0">
          <div className="inline-flex items-start gap-[10px] relative">
            <StarIcon className={"activeStar"} />
            <StarIcon className={"activeStar"} />
            <StarIcon className={"activeStar"} />
            <StarIcon className={"activeStar"} />
            <StarIcon className={"activeStar"} />
            <div className="relative w-[150px] h-[18px] bg-[#242b2e0a] rounded-[9px]">
              <div className="w-[132px] h-[18px] bg-[#fcb500] rounded-[9px_0px_0px_9px]" />
            </div>
            <div className="relative w-[35px] mt-[-1.00px] [font-family:'Avenir-Roman',Helvetica] font-normal text-c-93t-bm text-[14px] tracking-[0] leading-[21px]">
              88%
            </div>
            <div className="w-fit whitespace-nowrap relative mt-[-1.00px] [font-family:'Avenir-Roman',Helvetica] font-normal text-c-93t-bm text-[14px] tracking-[0] leading-[21px]">
              (209)
            </div>
          </div>
        </div>
        <div className="absolute w-[355px] h-[21px] top-[27px] left-0">
          <div className="inline-flex items-start gap-[10px] relative">
            <StarIcon className={"activeStar"} />
            <StarIcon className={"activeStar"} />
            <StarIcon className={"activeStar"} />
            <StarIcon className={"inactiveStar"} />
            <StarIcon className={"inactiveStar"} />
            <div className="relative w-[150px] h-[18px] bg-[#242b2e0a] rounded-[9px]">
              <div className="w-[18px] h-[18px] bg-[#fcb500] rounded-[9px_0px_0px_9px]" />
            </div>
            <div className="relative w-[35px] mt-[-1.00px] [font-family:'Avenir-Roman',Helvetica] font-normal text-c-93t-bm text-[14px] tracking-[0] leading-[21px]">
              10%
            </div>
            <div className="w-[32px] relative mt-[-1.00px] [font-family:'Avenir-Roman',Helvetica] font-normal text-c-93t-bm text-[14px] tracking-[0] leading-[21px]">
              (24)
            </div>
          </div>
        </div>
        <div className="absolute w-[355px] h-[21px] top-[54px] left-0">
          <div className="inline-flex items-start gap-[10px] relative">
            <StarIcon className={"activeStar"} />
            <StarIcon className={"activeStar"} />
            <StarIcon className={"inactiveStar"} />
            <StarIcon className={"inactiveStar"} />
            <StarIcon className={"inactiveStar"} />
            <div className="relative w-[150px] h-[18px] bg-[#242b2e0a] rounded-[9px]">
              <div className="w-[11px] h-[18px] bg-[#fcb500] rounded-[9px_0px_0px_9px]" />
            </div>
            <div className="relative w-[35px] mt-[-1.00px] [font-family:'Avenir-Roman',Helvetica] font-normal text-c-93t-bm text-[14px] tracking-[0] leading-[21px]">
              2%
            </div>
            <div className="w-[32px] relative mt-[-1.00px] [font-family:'Avenir-Roman',Helvetica] font-normal text-c-93t-bm text-[14px] tracking-[0] leading-[21px]">
              (4)
            </div>
          </div>
        </div>
        <div className="absolute w-[355px] h-[21px] top-[81px] left-0">
          <div className="inline-flex items-start gap-[10px] relative">
            <StarIcon className={"activeStar"} />
            <StarIcon className={"inactiveStar"} />
            <StarIcon className={"inactiveStar"} />
            <StarIcon className={"inactiveStar"} />
            <StarIcon className={"inactiveStar"} />
            <div className="relative w-[150px] h-[18px] bg-[#242b2e0a] rounded-[9px]" />
            <div className="relative w-[35px] mt-[-1.00px] [font-family:'Avenir-Roman',Helvetica] font-normal text-c-93t-bm text-[14px] tracking-[0] leading-[21px]">
              0%
            </div>
            <div className="w-[32px] relative mt-[-1.00px] [font-family:'Avenir-Roman',Helvetica] font-normal text-c-93t-bm text-[14px] tracking-[0] leading-[21px]">
              (0)
            </div>
          </div>
        </div>
        <div className="absolute w-[355px] h-[21px] top-[108px] left-0">
          <div className="inline-flex items-start gap-[10px] relative">
            <StarIcon className={"inactiveStar"} />
            <StarIcon className={"inactiveStar"} />
            <StarIcon className={"inactiveStar"} />
            <StarIcon className={"inactiveStar"} />
            <StarIcon className={"inactiveStar"} />
            <div className="relative w-[150px] h-[18px] bg-[#242b2e0a] rounded-[9px]" />
            <div className="relative w-[35px] mt-[-1.00px] [font-family:'Avenir-Roman',Helvetica] font-normal text-c-93t-bm text-[14px] tracking-[0] leading-[21px]">
              0%
            </div>
            <div className="w-[32px] relative mt-[-1.00px] [font-family:'Avenir-Roman',Helvetica] font-normal text-c-93t-bm text-[14px] tracking-[0] leading-[21px]">
              (0)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
