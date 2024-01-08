import CategoryItem from "./CategoryItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { categoryList } from "./categoryList";
import CloseIcon from "../../assets/close-icon.svg";

const CategoryDropdown = () => {
  const [isOpen, setOpen] = useState(true);
  const [content, setContent] = useState([]);

  const handleCheckBox = (title) => {
    if (content.includes(title)) {
      // If title is already in content, remove it
      setContent((prevContent) => prevContent.filter((item) => item !== title));
    } else {
      // If title is not in content, add it
      setContent((prevContent) => [...prevContent, title]);
    }
  };

  const handleDropdownClick = () => {
    setOpen(!isOpen);
  };

  const handleRemoveClick = (title) => {
    const newContent = content.filter((item) => item !== title);
    setContent(newContent);
  };

  return (
    <div className="w-full mx-auto">
      <div>
        <div className="flex justify-between">
          <h4 className="font-bold mb-2 text-lg">
            <span className="text-red font-extrabold">*</span> Categorize
          </h4>
        </div>
        <div className="selected-items-container w-full relative">
          <div className="flex flex-wrap gap-1 min-h-8 mr-2">
            {content.map((item) => (
              <div
                key={item}
                className="selected-items"
                onClick={() => handleRemoveClick(item)}
              >
                <span>{item}</span>
                <img src={CloseIcon} alt="Close" />
              </div>
            ))}
          </div>
          <span className="absolute top-2 right-2 " onClick={handleDropdownClick}>
            {isOpen && <ExpandLessIcon className="text-blue" />}
            {!isOpen && <ExpandMoreIcon />}
          </span>
        </div>
        {isOpen &&(
        <div className="items-container border flex flex-col flex-wrap gap-1 mb-6 p-4"> 
            {categoryList?.map((item) => (
                <CategoryItem
                category={item}
                key={item.title}
                handleCheckBox={handleCheckBox}
                content={content}
                />
            ))}
        </div>)
        }

      </div>
    </div>
  );
};

export default CategoryDropdown;
