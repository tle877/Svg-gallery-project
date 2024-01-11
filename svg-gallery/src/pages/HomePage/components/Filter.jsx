import { Tune } from "@mui/icons-material";
import { CATEGORIES, TAGS } from "../constants";
import { Category } from "./Category";
import { useState } from "react";
import { Tag } from "./Tag";
import { Drawer } from "@mui/material";

export const Filter = ({ open, toggleDrawer, toggleActiveFilter }) => {
  const [currentCategory, setCurrentCategory] = useState(false);

  return (
    <div className="max-w-[300px] mb-10">
      {open ? (
        <Drawer open={open} onClose={() => toggleDrawer()}>
          <div className="px-8">
            <div
              className="w-full py-5 cursor-pointer"
              onClick={() => toggleDrawer()}
            >
              <Tune />
            </div>
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
        </Drawer>
      ) : (
        <div className="hidden md:block">
          <div
            className="flex gap-4 p-5 mb-8 bg-blue-40 text-dark-brown text-xl"
            onClick={toggleActiveFilter}
          >
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
      )}
    </div>
  );
};
