
import topLogo from "../assets/logoLoginPage/topLogo.svg"
import botLogo from "../assets/logoLoginPage/botLogo.svg"
import botLogo1 from "../assets/logoLoginPage/botLogo1.svg"
import botLogo2 from "../assets/logoLoginPage/botLogo2.svg"
export default function ResetPasswordByEmail() {
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
              Reset Your Password
            </h2>

            <h4 className="text-center text-xs sm:text-sm mb-5 mt-4 "> We Will Send You An Email To Reset Your Password</h4>
          </div>
  
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST">
              <div>
                <div className="flex ">
                  <label htmlFor="password" className="block text-lg leading-6 text-gray-900">
                    Email 
                  </label>
                </div>
                
                <div className="mt-4 mb-10">
                  <input
                  
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
 
            <div className="flex justify-evenly ">    
                <button
                  type="submit"
                  className=" w-1/3 rounded-full border border-custom-blue text-custom-blue px-3 py-1.5 text-sm leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className=" w-1/3 rounded-full bg-custom-blue px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    )
  }