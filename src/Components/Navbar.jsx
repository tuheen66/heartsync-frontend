import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div >
      <div className="flex flex-col gap-4 lg:gap-4 lg:flex-row justify-between items-center w-[90%]  mx-auto bg-purple-300 shadow-xl pb-8 lg:pb-0  px-2 ">
        <div className="flex items-center">
          <img className="w-20 py-2" src={logo} alt="" />
          <h1 className="font-bold text-2xl">
            <span className="text-[#a9106b]">Heartsync</span>{" "}
          </h1>
        </div>
        <div>
          <div className="flex flex-col md:flex-row font-semibold text-gray-700 justify-between items-center gap-2 md:gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Biodatas</NavLink>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/">Contact Us</NavLink>
            <NavLink to="/">Dashboard</NavLink>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <div className=" relative group">
              <img className="w-14 rounded-full  " src="" />

              <p className="opacity-0 group-hover:opacity-100 absolute  right-14 flex items-center bottom-0 text-xl bg-gray-200 p-2 text-black font-semibold"></p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <div className=" relative group ">
                <img className="w-14 rounded-full  " src="" />

                <p className="opacity-0 group-hover:opacity-100 absolute w-44 text-center -bottom-4 right-16 text-xl text-gray-700 bg-gray-200 font-semibold"></p>
              </div>

              {/* <button
                 
                  className="btn btn-sm lg:btn-md rounded-none border-none bg-[#f0932b] hover:bg-[#30336b] text-white"
                >
                  Logout
                </button> */}
            </div>

            <div>
              <Link to="/login">
                <button className="btn btn-sm lg:btn-md border-none rounded-none mr-2 bg-[#a9106b] hover:bg-[#30336b] text-white">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
