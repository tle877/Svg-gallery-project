
import topLogo from "../assets/logoLoginPage/topLogo.svg"
import botLogo from "../assets/logoLoginPage/botLogo.svg"
import botLogo1 from "../assets/logoLoginPage/botLogo1.svg"
import botLogo2 from "../assets/logoLoginPage/botLogo2.svg"

export default function ResetPassword() {
    return (
      <div className="sm:bg-custom-blue sm:p-10 relative ">
        <img
        src={topLogo}
        alt="Logo"
        className="absolute top-0 right-0 w-3/12"
      />
      <img 
        src={botLogo}
        alt="Logo1"
        className="absolute bottom-0 left-0 opacity-5"  
      />
        <img 
        src={botLogo1}
        alt="Logo1"
        className="absolute bottom-0 left-0 opacity-5" 
      />
        <img 
        src={botLogo2}
        alt="Logo1"
        className="absolute bottom-0 left-0 opacity-5 " 
      /> 
        
        <div id="form" className="rounded-xl mx-auto bg-white flex min-h-full flex-1 flex-col justify-center sm:p-14 p-4 max-w-full sm:max-w-lg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center mb-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Reset Account Password
            </h2>

            <h4 className="text-center text-xs sm:text-sm mt-4 "> Enter A New Password For Gianna.guo@oceania-inc.com</h4>
          </div>
  
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST">
                <div>
                    <div className="flex ">
                    <label htmlFor="password" className="block text-lg leading-6 text-gray-900">
                        New Password
                    </label>
                    </div>
                    <div className="mt-2 mb-4">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="input-container placeholder:text-gray-400 focus:outline-custom-blue sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <div className="flex ">
                    <label htmlFor="confirmPassword" className="block text-lg leading-6 text-gray-900">
                        Confirm Password 
                    </label>
                    </div>
                    <div className="mt-2 mb-10">
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        className="input-container placeholder:text-gray-400 focus:outline-custom-blue sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
 
                <div className="flex justify-center">
                    <button
                    type="submit"
                    className=" sm:w-2/3 w-full rounded-full bg-custom-blue px-3 py-1.5 text-sm leading-6 text-white"
                    >
                    Reset Password
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
      
    )
  }