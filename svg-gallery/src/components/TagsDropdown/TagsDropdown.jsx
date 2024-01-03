import { tagList } from "./tagList"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import "./TagsDropdown.scss"
import CloseIcon from "../../assets/close-icon.svg"
export const TagsDropdown = () => {
    const [isOpen,setOpen] = useState(true)
    const [content,setContent] = useState(["Chrismast", "Inpedendence Day"])

    const handleDropdownClick = () =>{
        setOpen(!isOpen)
    }
    const handleTagClick = (title) =>{
        if (!content.includes(title)){
            setContent([...content,title])
        }

    }
    const handleRemoveClick = (title) =>{
        const newContent = content.filter((item)=> item != title)
        setContent(newContent)
    }
    return (
        <div className="container w-full sm:w-1/3 mx-auto">
            <div >
                <div className="flex justify-between">
                    <h4 className="font-bold mb-2 text-lg"><span className="text-red font-extrabold">*</span> Tags</h4>
                </div>
                <div className="selected-items-container w-full relative" >
                    <div className="flex flex-wrap gap-1 min-h-8 mr-2">
                        {content.map((item)=>(
                            <div key = {item} className="selected-items" onClick={() => handleRemoveClick(item)} >
                                <span >{item}</span>
                                <img src={CloseIcon} alt="Close" />
                            </div>))
                        }
                    </div>
                    <span className="absolute top-2 right-2 " onClick = {handleDropdownClick}>
                        {isOpen && <ExpandLessIcon />}
                        {!isOpen && <ExpandMoreIcon />}
                    </span>
                </div>
                
                {isOpen && 
                <div className="items-container border flex flex-wrap gap-x-1 gap-y-3 mb-6 p-4">
                    {tagList.map((item) => (
                        <div
                            className="rounded-2xl px-3 py-1 cursor-pointer text-sm bg-blue-60 text-dark-brown hover:text-blue"
                            key={item.title}
                            onClick = { () => handleTagClick(item.title)}
                        >
                            {item.title}
                        </div>
                        ))
                    }
                </div>}
            </div>
        </div>
    )
}