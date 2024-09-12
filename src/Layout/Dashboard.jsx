import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  const { logOut } = useAuth();

  const handleLogout = () => {
    logOut().then(() => console.log("logged out successfully "));
  };

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
                <NavLink to="adminDashboard">Admin Dashboard</NavLink>
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
                <NavLink to="editBiodata">Edit Biodata</NavLink>
              </li>
              {/* <li>
                <NavLink to="newEditBiodata">New Edit Biodata</NavLink>
              </li> */}
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
      </div>
    </div>
  );
};

export default Dashboard;
