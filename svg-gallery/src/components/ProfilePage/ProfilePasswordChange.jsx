import "./profile-password-change.scss"

const ProfilePasswordChange = () =>{
    return (
        <div className="password-change-container md:p-10 p-4 mx-auto">
            <h1 className="mb-5 sm:mb-10">Security Settings</h1>
            <form action="/submit-password" className="flex flex-col md:w-2/3 w-full gap-6 "  method="post" >
                <div className="entity-container">
                        <label htmlFor="Password" className="label-form"> Password</label>
                        <input required 
                        placeholder="Original Password"
                        className="input-form" 
                        type="password"
                        name="Password"
                        id="Password" ></input>
                </div>
                
                <div className="entity-container">
                        <label className="label-form"></label>
                        <input required 
                        placeholder="New Password"
                        className="input-form" 
                        type="password"
                        name="Password"
                        id="Password" ></input>
                </div>

                <div className="button-container">   
                    <label className="label-form"></label>
                    <div className="end-btn">
                        <button
                            className=" rounded-full border border-custom-blue text-custom-blue px-5 sm:px-7 py-1.5 text-sm leading-6  "
                        >
                        Cancel
                        </button>
                        <button
                            type="submit"
                            className=" rounded-full bg-custom-blue px-7 sm:px-9 py-1.5 text-sm leading-6 text-white"
                        >
                        Sure
                        </button>
                    </div> 
                </div>
            </form>    
        </div>

    )
}

export default ProfilePasswordChange