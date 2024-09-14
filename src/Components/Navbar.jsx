import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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

  const handleLogout = () => {
    logOut().then(() => console.log("logged out successfully "));
  };

  return (
    <div className="about">
      <div className="flex flex-col gap-4 lg:gap-4 lg:flex-row justify-between items-center w-[90%]  mx-auto bg-purple-300 shadow-xl pb-8 lg:pb-0  px-2 ">
        <div className="flex items-center">
          <img className="w-20 py-2" src={logo} alt="" />
          <h1 className="font-bold text-2xl">
            <span className="text-[#a9106b]">Heartsync</span>{" "}
          </h1>
        </div>
        <div>
          <div className="flex flex-col md:flex-row font-semibold text-gray-700 justify-between items-center gap-2 md:gap-8">
            <NavLink
              to="/"
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#a9106b" : "",
                  textDecorationColor: isActive ? "#a9106b" : "none",
                  color: isActive ? "White" : "#374177",
                  padding: "2px 6px",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/biodatas"
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#a9106b" : "",
                  textDecorationColor: isActive ? "#a9106b" : "none",
                  color: isActive ? "White" : "#374177",
                  padding: "2px 6px",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Biodatas
            </NavLink>
            <NavLink
              to="/aboutUs"
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#a9106b" : "",
                  textDecorationColor: isActive ? "#a9106b" : "none",
                  color: isActive ? "White" : "#374177",
                  padding: "2px 6px",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contactUs"
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#a9106b" : "",
                  textDecorationColor: isActive ? "#a9106b" : "none",
                  color: isActive ? "White" : "#374177",
                  padding: "2px 6px",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Contact Us
            </NavLink>
            {user && (
              <NavLink
                to={
                  adminUser.includes(user.email)
                    ? "/dashboard/adminDashboard/"
                    : "/dashboard/editBiodata"
                }
              >
                Dashboard
              </NavLink>
            )}
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
            {user ? (
              <div className="flex items-center gap-4">
                <div className=" relative group ">
                  <h2 className="font-semibold">{user?.displayName}</h2>
                  {/* <img className="w-14 rounded-full  " src={user?.photoURL} /> */}

                  <p className="opacity-0 group-hover:opacity-100 absolute w-44 text-center -bottom-4 right-16 text-xl text-gray-700 bg-gray-200 font-semibold"></p>
                </div>

                <button
                  onClick={handleLogout}
                  className="py-2 px-4 rounded-none border-none bg-[#a9106b] hover:bg-[#30336b] text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className="px-4 py-2 border-none rounded-none mr-2 bg-[#a9106b] hover:bg-[#30336b] text-white">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
