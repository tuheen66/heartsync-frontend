const Dropdown = () => {
  return (
   
      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    
  );
};

export default Dropdown;

{/* <div className="flex items-center gap-4">
                  <div className=" relative group ">
                    <h2 className="font-semibold">{user?.displayName}</h2>
                    {/* <img className="w-14 rounded-full  " src={user?.photoURL} /> 

                    <p className="opacity-0 group-hover:opacity-100 absolute w-44 text-center -bottom-4 right-16 text-xl text-gray-700 bg-gray-200 font-semibold"></p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="py-2 px-4 rounded-none border-none bg-[#a9106b] hover:bg-[#30336b] text-white"
                  >
                    Logout
                  </button>
                </div> */}
