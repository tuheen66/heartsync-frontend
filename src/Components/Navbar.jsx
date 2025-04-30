import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import "flowbite";
import { initFlowbite } from "flowbite";
import MegaMenu from "./Megamenu";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const admin = users.filter((user) => user.role === "admin");

  const adminUser = admin.map((user) => user.email);

  useEffect(() => {
    // Initialize Flowbite when user changes
    initFlowbite();
  }, [user]);

  const handleLogout = () => {
    logOut().then(() => console.log("logged out successfully "));
  };

  return (
    <div className="about lg:sticky lg:top-0 lg:z-10">
      <div className="flex flex-col gap-4 lg:gap-4 lg:flex-row justify-between items-center  mx-auto bg-slate-100  pb-8 lg:pb-0  px-[5%] ">
        <Link to="/">
          <div className="flex items-center">
            <img className="w-16 py-2" src={logo} alt="" />
            <h1 className="font-bold text-2xl">
              <span className="text-[#a9106b]">Heartsync</span>{" "}
            </h1>
          </div>
        </Link>
        <div>
          <div className="flex flex-wrap font-semibold text-gray-700 justify-between items-center gap-2 md:gap-8">
            <NavLink
              to="/"
              style={({ isActive, isTransitioning }) => ({
                fontWeight: isActive ? "bold" : "",
                color: "#374177",
                padding: "2px 6px",
                // Replace textDecoration with border-bottom for better control
                borderBottom: isActive ? "2px solid #a9106b" : "none",
                paddingBottom: isActive ? "4px" : "0", // Space between text and underline
                marginBottom: isActive ? "-2px" : "0", // Compensate for the added space
                viewTransitionName: isTransitioning ? "slide" : "",
                display: "inline-block", // Needed for proper border-bottom spacing
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/biodatas"
              style={({ isActive, isTransitioning }) => ({
                fontWeight: isActive ? "bold" : "",
                color: "#374177",
                padding: "2px 6px",
                // Replace textDecoration with border-bottom for better control
                borderBottom: isActive ? "2px solid #a9106b" : "none",
                paddingBottom: isActive ? "4px" : "0", // Space between text and underline
                marginBottom: isActive ? "-2px" : "0", // Compensate for the added space
                viewTransitionName: isTransitioning ? "slide" : "",
                display: "inline-block", // Needed for proper border-bottom spacing
              })}
            >
              Biodatas
            </NavLink>

            <NavLink
              to="/blogs"
              style={({ isActive, isTransitioning }) => ({
                fontWeight: isActive ? "bold" : "",
                color: "#374177",
                padding: "2px 6px",
                // Replace textDecoration with border-bottom for better control
                borderBottom: isActive ? "2px solid #a9106b" : "none",
                paddingBottom: isActive ? "4px" : "0", // Space between text and underline
                marginBottom: isActive ? "-2px" : "0", // Compensate for the added space
                viewTransitionName: isTransitioning ? "slide" : "",
                display: "inline-block", // Needed for proper border-bottom spacing
              })}
            >
              Blogs
            </NavLink>

            <NavLink
              to="/aboutUs"
              style={({ isActive, isTransitioning }) => ({
                fontWeight: isActive ? "bold" : "",
                color: "#374177",
                padding: "2px 6px",
                // Replace textDecoration with border-bottom for better control
                borderBottom: isActive ? "2px solid #a9106b" : "none",
                paddingBottom: isActive ? "4px" : "0", // Space between text and underline
                marginBottom: isActive ? "-2px" : "0", // Compensate for the added space
                viewTransitionName: isTransitioning ? "slide" : "",
                display: "inline-block", // Needed for proper border-bottom spacing
              })}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contactUs"
              style={({ isActive, isTransitioning }) => ({
                fontWeight: isActive ? "bold" : "",
                color: "#374177",
                padding: "2px 6px",
                // Replace textDecoration with border-bottom for better control
                borderBottom: isActive ? "2px solid #a9106b" : "none",
                paddingBottom: isActive ? "4px" : "0", // Space between text and underline
                marginBottom: isActive ? "-2px" : "0", // Compensate for the added space
                viewTransitionName: isTransitioning ? "slide" : "",
                display: "inline-block", // Needed for proper border-bottom spacing
              })}
            >
              Contact Us
            </NavLink>
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
            {!user ? (
              <div>
                <Link to="/login">
                  <button className="px-4 py-2 border-none rounded-md mr-2 bg-[#a9106b] hover:bg-[#30336b] text-white">
                    Login
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="px-1 py-1 border-none rounded-full mr-2 bg-[#a9106b] hover:bg-[#30336b] text-white"
                  type="button"
                >
                  <img className="w-14 rounded-full  " src={user?.photoURL} />
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-slate-100 divide-y divide-gray-100  shadow-sm w-44 dark:bg-gray-700 border-2"
                >
                  <ul
                    className="ml-4 py-4 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      {user && (
                        <NavLink
                          className=" text-gray-900 py-2 px-4 "
                          to={
                            adminUser.includes(user.email)
                              ? "/dashboard/adminDashboard/"
                              : "/dashboard/editBiodata"
                          }
                        >
                          Dashboard
                        </NavLink>
                      )}
                    </li>

                    <li>
                      <button
                        onClick={handleLogout}
                        className="py-2 px-4  text-gray-900"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
