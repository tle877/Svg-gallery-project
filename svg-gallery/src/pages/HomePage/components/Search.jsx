import { Search } from "@mui/icons-material";
import { Tag } from "./Tag";
import { SEARCH_TAGS } from "../constants";
import TuneIcon from "../../../assets/TuneIcon";

export const SearchField = ({ toggleDrawer }) => {
  return (
    <div className="container flex flex-col justify-center items-center gap-6">
      <div className="max-w-[1120px] w-full flex justify-center items-center gap-4">
        <div className="group h-[60px] flex grow items-center px-5 py-4 bg-blue-40 rounded-full border border-transparent [&:has(input:focus)]:border-blue [&:has(input:focus)]:border">
          <input
            type="text"
            className="grow bg-transparent h-full pl-0 md:pl-[30px] focus-visible:outline-0 focus-visible:border-r pr-4"
            placeholder="Search the creative world of engraving"
          />
          <Search className="ml-4 group-focus-within:stroke-blue group-focus-within:fill-blue" />
        </div>
      </div>
      <div className="gap-4 flex-wrap hidden md:flex">
        {SEARCH_TAGS?.map((e) => (
          <Tag tag={e} key={e.title} disableActive />
        ))}
      </div>
    </div>
  );
};
