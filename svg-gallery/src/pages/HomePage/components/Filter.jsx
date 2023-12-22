import { Tune } from "@mui/icons-material";
import { CATEGORIES, TAGS } from "../constants";
import { Category } from "./Category";
import { useState } from "react";
import { Tag } from "./Tag";

export const Filter = () => {
  const [currentCategory, setCurrentCategory] = useState(false);

  return (
    <div className="max-w-[300px]">
      <div className="flex gap-4 p-5 mb-8 bg-blue-40 text-dark-brown text-xl ">
        <Tune />
        Refine
      </div>
      <div className="px-8">
        <div className="mb-16">
          <h4 className="font-bold mb-6 text-lg">Category</h4>
          {CATEGORIES?.map((e) => (
            <Category
              category={e}
              key={e.title}
              active={currentCategory == e.title}
              callback={() =>
                currentCategory == e.title
                  ? setCurrentCategory(false)
                  : setCurrentCategory(e.title)
              }
            />
          ))}
        </div>
        <div>
          <h4 className="font-bold mb-6 text-lg">Related Tags</h4>
          <div className="flex flex-wrap gap-x-1 gap-y-3">
            {TAGS?.map((e) => (
              <Tag tag={e} key={e.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
