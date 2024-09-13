import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useFormState } from "react-hook-form";

const Dashboard = () => {
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  const { logOut, user } = useAuth();

  const handleLogout = () => {
    logOut().then(() => console.log("logged out successfully "));
  };

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const admin = users.filter((user) => user.role === "admin");

  const adminUser = admin.map((user) => user.email);

  console.log(admin);

  return (
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row">
      <Helmet>
        <title>Heartsync | Dashboard</title>
      </Helmet>
      <div className="lg:w-64 min-h-screen bg-purple-300 flex flex-col gap-6 p-4 font-semibold text-gray-700">
        {isAdmin ? (
          <>
            <h2 className="font-bold text-xl px-4">Admin Home</h2>
            <ul className="flex flex-col gap-6 px-4">
              <li>
                <NavLink to="/dashboard/adminDashboard">
                  Admin Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage">Manage Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/appPremium">Approved Premium</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/appContactReq">
                  Approved Contact Request
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/successStory">Success Story</NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <h2 className="font-bold text-xl px-4">User Home</h2>
            <ul className="flex flex-col gap-6 px-4">
              <li>
                <NavLink to="/dashboard/editBiodata">Edit Biodata</NavLink>
              </li>

              <li>
                <NavLink to="viewBiodata">View Biodata</NavLink>
              </li>
              <li>
                <NavLink to="contactRequest">My Contact Request</NavLink>
              </li>
              <li>
                <NavLink to="favoriteBiodata">My Favorite Biodata</NavLink>
              </li>
              <li className="flex">
                <NavLink to="gotMarried">Got Married </NavLink>
              </li>
            </ul>
          </>
        )}

        <button onClick={handleLogout} className="bg-[#a9106b] text-white p-2">
          Logout
        </button>
        <hr />
        <ul className="flex flex-col gap-6 px-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
        <div className="min-h-screen">
          <h2 className="font-bold text-5xl text-center text-gray-700 my-52 uppercase ">
            {adminUser.includes(user.email)
              ? "Admin dashboard home "
              : "User dashboard home"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
