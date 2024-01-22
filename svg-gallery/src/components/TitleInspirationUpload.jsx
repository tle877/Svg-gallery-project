import { useState } from "react"


const TitleInspirationUpload = () =>{
    const [content,setContent] = useState("")

    const handleChange = (event) => {
        setContent(event.target.value)
    }
    return(
    <div className="w-full mx-auto mt-5 mb-5">
        <div >
                <label htmlFor="power-text" className="font-bold  text-lg">Title</label>
                <input id="power-text" type="text" className= "mt-2 w-full text-input " value ={content} onChange = {handleChange}/>
        </div>
    </div>
    )
}

export default TitleInspirationUpload