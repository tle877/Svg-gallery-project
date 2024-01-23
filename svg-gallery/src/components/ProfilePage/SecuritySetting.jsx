import "./security-setting.scss"

const SecuritySetting = ({handleTest}) =>{
    return (
        <div className=" security-setting-container md:p-10 p-4 mx-auto">
            <h1 className="mb-6 sm:mb-10">Security Settings</h1>
            <div className="w-full sm:flex-row flex flex-col justify-between sm:w-3/4 gap-6 sm:gap-10 "  method="post" >
                <div className="entity-container">
                        <label htmlFor="Password" className="label-form">Password</label>
                        <input required 
                        className="input-form" 
                        type="password"
                        name="Password"
                        id="Password" ></input>
                </div>
                <div className="end-btn">
                    <button className="submit-password-btn " onClick={handleTest}>Edit</button>
                </div>
            </div>    
        </div>

    )
}

export default SecuritySetting