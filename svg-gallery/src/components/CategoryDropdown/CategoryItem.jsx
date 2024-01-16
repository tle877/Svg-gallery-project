import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";


// if (!isChecked) {
//     if (content.includes(item.title)){
//         handleCheckBox(item.title)
//     }
// }
// })
    
// const ItemList = () =>
// category?.items?.map((item) => {
//     //If parent is unchecked, go uncheck all children
//   return (
//     <div className="ml-7" key={item.title}>
//         <label htmlFor={`checkbox-${item.title}`}>
//             <input
//                 id = {`checkbox-${item.title}`}
//                 type="checkbox"
//                 onChange={() => handleCheckBox(item.title)}
//                 checked={content.includes(item.title)}
//             />{" "}
//             {item.title}
//       </label>
//     </div>
//   );
// });

const CategoryItem = ({ handleParentClick, category, handleCheckBox, content }) => {
  const isChecked = content.includes(category.title);
    const ItemList = () =>
    category?.items?.map((item) => {
        //If parent is unchecked, go uncheck all children
      if (!isChecked) {
        if (content.includes(item.title)){
            handleCheckBox(item.title)
        }
      }
      return (
        <div className={`category-item ml-7 mt-1 ${!isChecked? 'hidden' : ''}`} key={item.title}> 
            <label htmlFor={`checkbox-${item.title}`}>
                <input
                    id = {`checkbox-${item.title}`}
                    type="checkbox"
                    onChange={() => handleCheckBox(item.title)}
                    checked={content.includes(item.title)}
                />{" "}
                {item.title}
          </label>
        </div>
      );
    });


  return (
    <div>
        <div className=" category-item flex gap-1">
            {content.includes(category.title) && < ExpandLessIcon className="text-blue"/>}
            {!content.includes(category.title) && < ExpandMoreIcon/>}
            <div key={category.title} className="category-items">
                <label htmlFor={`checkbox-${category.title}`}>
                    <input
                    type="checkbox"
                    id={`checkbox-${category.title}`}
                    onChange={() => handleCheckBox(category.title)}
                    checked={isChecked}
                    /> 
                    {" "}{category.title}
                </label>
            </div>
        </div>
      {/* {content.includes(category.title) && <ItemList />} */}
      <ItemList />
    </div>
  );
};

export default CategoryItem;
