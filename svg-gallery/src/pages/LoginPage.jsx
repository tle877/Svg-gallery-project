
import topLogo from "../assets/logoLoginPage/topLogo.svg"
import botLogo from "../assets/logoLoginPage/botLogo.svg"
import botLogo1 from "../assets/logoLoginPage/botLogo1.svg"
import botLogo2 from "../assets/logoLoginPage/botLogo2.svg"
import "./login-page.scss"

export default function LoginPage() {
  return (
    <div className=" sm:bg-custom-blue sm:p-10 relative ">
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
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="sm:mt-5 mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST">
            <div>
              <div className="flex ">
                <label htmlFor="email" className="block text-lg leading-6 text-gray-900">
                  Email 
                </label>
              </div>
              
              <div className="mt-4">
                <input
                
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  className="input-container placeholder:text-gray-400 focus:outline-custom-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-lg leading-6 text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input-container placeholder:text-gray-400 focus:outline-custom-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="text-sm flex mt-1 sm:mb-6 mb-10  ">
                  <a href="#" className="hover:text-custom-blue">
                    Forgot your password?
                  </a>
            </div>
            
            <div className="flex justify-center">  
              <button
                type="submit"
                className=" sm:w-2/3 w-full rounded-full bg-custom-blue px-3 py-1.5 text-sm leading-6 text-white "
              >
                Login
              </button>
          </div>
          </form>

          <p className="mt-2 text-center text-sm ">
            Need An Account?{' '}
            <a href="#" className=" leading-6 text-custom-blue ">
                 Register
            </a>
          </p>
        </div>
      </div>
    </div>
    
  )
}