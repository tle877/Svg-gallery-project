import "./profile-page.scss"
import { useState } from "react"
import PersonalSetting from "./PersonalSetting"
import SecuritySetting from "./SecuritySetting"
import ProfilePasswordChange from "./ProfilePasswordChange"
import { PersonalIcon,PersonalIconActive } from "../../assets/PersonalIcon"
import { SecurityIcon,SecurityIconActive } from "../../assets/SecurityIcon"


const ProfilePage = () =>{
    const [content,setContent] = useState("personal")

    const handleCLick = (event) =>{
        console.log(event.currentTarget.id)
        setContent(event.currentTarget.id)
    }
    const handleTest = () => {
        setContent("asd")
    }
    
    return (
    <div>
            <div className="profile-page-container hidden md:grid grid-cols-5 gap-6 bg-gray xl:px-36 py-4 md:px-10">
                <div className="profile-nagivation bg-white col-span-1">
                    <div  id= "personal" className="navigation-items flex items-center p-3 " onClick={ (e) => handleCLick(e)} >
                        {content === "personal" ?
                        <>
                            <PersonalIconActive/>
                            <button id= "btn-active" >personal settings</button>
                        </>
                        :
                        <>
                            <PersonalIcon/>
                            <button >personal settings</button>
                        </>}
                    </div>

                    <div  id= "security" className="navigation-items flex items-center p-3 " onClick={ (e) => handleCLick(e)} >
                        {content === "security" ?
                        <>
                            <SecurityIconActive/>
                            <button id= "btn-active" >Security settings</button>
                        </>
                        :
                        <>
                            <SecurityIcon/>
                            <button >Security settings</button>
                        </>}
                    </div>
                </div>

                <div className="col-span-4 bg-white">
                    { content === "personal" ?
                    <>  
                        <PersonalSetting />
                    </> :  content === "security" ?
                    <>
                        <SecuritySetting handleTest = {handleTest} />
                    </> :
                    <>
                        <ProfilePasswordChange  />
                    </>
                    }
                </div>
            </div>
        
        {/* mobile view */}
            <div className="profile-page-container md:hidden bg-gray flex flex-col gap-6 ">
                <div className="profile-nagivation bg-white flex justify-evenly">
                    <div id="personal" className="navigation-items flex items-center p-2" onClick={ (e) => handleCLick(e)}>
                        {content === "personal" ?
                            <>
                                <PersonalIconActive/>
                                <button id= "btn-active" >personal settings</button>
                            </>
                            :
                            <>
                                <PersonalIcon/>
                                <button >personal settings</button>
                            </>}
                    </div>
                    <div  id="security" className="navigation-items flex items-center p-2"  onClick={ (e) => handleCLick(e)}>
                        {content === "security" ?
                            <>
                                <SecurityIconActive/>
                                <button id= "btn-active" >Security settings</button>
                            </>
                            :
                            <>
                                <SecurityIcon/>
                                <button >Security settings</button>
                            </>}
                    </div>
                </div>
                <div className="col-span-4 bg-white">
                    { content === "personal" ?
                    <>  
                        <PersonalSetting />
                    </> :  content === "security" ?
                    <>
                        <SecuritySetting handleTest = {handleTest} />
                    </> :
                    <>
                        <ProfilePasswordChange  />
                    </>
                    }
                </div>
            </div>

    </div>
    )
}

export default ProfilePage