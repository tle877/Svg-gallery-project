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
        <div className="flex ">
          <div className="authorDescription text-gray-400 md:text-black">
            New York / Crafts / 2023-11-13 / Views：2341
          </div>

        </div>
      </div>
    </div>
  );
};
export default AuthorInfo;