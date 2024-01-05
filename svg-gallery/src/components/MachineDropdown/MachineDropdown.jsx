import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { machineList } from "./machineList";
import TickIcon from "../../assets/tick.svg"

const MachineDropdown = () => {
    const [isOpen, setOpen] = useState(true);
    const [content, setContent] = useState("");
    const [activeIndex,setActiveIndex] = useState(null)
    const handleClick = (title,index)=>{
        
        setActiveIndex((prevIndex)=>{
            if (prevIndex!= index){
                setActiveIndex(index)
                setContent(title)
            }
            else{
                setActiveIndex(null)
                setContent("")
            }
        })
      
    }
    
    const handleDropdownClick = () => {
        setOpen(!isOpen);
      };
    return (
    <div className="container w-full sm:w-1/3 mx-auto">
        <div>
      
            <div className="flex justify-between">
                <h4 className="font-bold mb-2 text-lg"> Machine </h4>
            </div>
            <div className="selected-items-container w-full relative">
                <div className=" min-h-8 p-1 ml-2">
                    {content}
                </div>
                <span className="absolute top-2 right-2 " onClick={handleDropdownClick}>
                    {isOpen && <ExpandLessIcon className="text-blue" />}
                    {!isOpen && <ExpandMoreIcon />}
                </span>
            </div>
        </div>
        {isOpen && (
            <div className="items-container border flex flex-col flex-wrap gap-1 mb-6 px-4 py-1">
                {machineList.map((item,index) =>(
                    <div className= "category-item flex gap-2 p-1 relative " id = {item.title} onClick = {()=>handleClick(item.title,index)}>
                        <div className="absolute left-0 top-2   ">
                            {index===activeIndex ? <img src={TickIcon} alt="Close" />: "  "}
                        </div>
                        <div className="ml-6">
                            {item.title}
                        </div>
                    </div>  
                ))}
            </div>
        )}
       
    </div>
    )
}

export default MachineDropdown