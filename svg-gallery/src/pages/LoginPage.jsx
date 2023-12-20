
export default function Example() {
  return (
    <div className="bg-custom-blue p-10 ">
      <div id="form" className="rounded-xl mx-auto bg-white flex min-h-full flex-1 flex-col justify-center py-12 px-15gi max-w-full sm:max-w-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST">
            <div>
              <div className="flex ">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email 
                </label>
              </div>
              
              <div className="mt-2">
                <input
                
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="  Email"
                  required
                  className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="text-sm flex mt-1 mb-5  ">
                  <a href="#" className="hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
            <div>
              
              <button
                type="submit"
                className=" w-2/3 rounded-full bg-custom-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm ">
            Need An Account?{' '}
            <a href="#" className=" leading-6 text-custom-blue hover:text-indigo-500">
                 Register
            </a>
          </p>
        </div>
      </div>
    </div>
    
  )
}
