
export default function ResetPassword() {
    return (
      <div className="bg-custom-blue p-10 ">
        
        <div id="form" className="rounded-xl mx-auto bg-white flex min-h-full flex-1 flex-col justify-center p-4 sm:py-8 sm:px-14  max-w-full sm:max-w-md">
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
                    <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                        New Password
                    </label>
                    </div>
                    <div className="mt-2 mb-4">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <div className="flex ">
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold leading-6 text-gray-900">
                        Confirm Password 
                    </label>
                    </div>
                    <div className="mt-2 mb-10">
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
 
                <button
                type="submit"
                className=" w-2/3 rounded-full bg-custom-blue px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Reset Password
                </button>
            </form>
          </div>
        </div>
      </div>
      
    )
  }