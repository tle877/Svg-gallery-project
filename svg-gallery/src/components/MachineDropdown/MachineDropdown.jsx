import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { machineList } from "./machineList";
import TickIcon from "../../assets/tick.svg"

const MachineDropdown = () => {
    const [isOpen, setOpen] = useState(false);
    const [content, setContent] = useState("");
    const [activeIndex,setActiveIndex] = useState(null)
    const handleClick = (title,index)=>{
        
        setActiveIndex((prevIndex)=>{
            if (prevIndex!= index ){
                setContent(title)
                return index
            }
            else {
                setActiveIndex(null)
                setContent("")
            }
        })
      
    }
    
    const handleDropdownClick = () => {
        setOpen(!isOpen);
      };
    return (
    <div className="w-full mx-auto mb-5">
        <div>
      
            <div className="flex justify-between">
                <h4 className="font-bold mb-4 text-lg"> Machine </h4>
            </div>
            <div className= {`selected-items-container w-full relative ${isOpen? "active-input" : ""}` }>
                <div className=" min-h-7 p-1 ml-2">
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
                    <div className= "machine-category-item flex gap-2 p-1 relative " id = {item.title} onClick = {()=>handleClick(item.title,index)}>
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