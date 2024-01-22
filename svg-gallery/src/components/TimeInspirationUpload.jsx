import { useState } from "react"


const TimeInspirationUpload = () =>{
    const [content,setContent] = useState("")

    const handleChange = (event) => {
        setContent(event.target.value)
    }
    return(
    <div className="w-full mx-auto mb-5">
        <div >
                <label htmlFor="power-text" className="font-bold  text-lg">Time <span className ="minute">(Minute)</span> </label>
                <input id="power-text" type="text" className= "mt-2 w-full text-input " value ={content} onChange = {handleChange}/>
        </div>
    </div>
    )
}

export default TimeInspirationUpload