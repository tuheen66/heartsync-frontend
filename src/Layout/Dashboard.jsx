import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="w-[90%] mx-auto flex">
      <div className="w-64 min-h-screen bg-purple-300 flex flex-col gap-6 p-4 font-semibold text-gray-700">
        {isAdmin ? (
          <>
            <h2 className="font-bold text-xl px-4">Admin Home</h2>
            <ul className="flex flex-col gap-6 px-4">
              <li>
                <NavLink to="/dashboard">Admin Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage">Manage Users</NavLink>
              </li>
              <li>
                <NavLink to="appPremium">Approved Premium</NavLink>
              </li>
              <li>
                <NavLink to="appContactReq">Approved Contact Request</NavLink>
              </li>
              
            </ul>
          </>
        ) : (
          <>
            <ul>
              <li>
                <NavLink to="editBiodata">Edit Biodata</NavLink>
              </li>
              <li>
                <NavLink to="viewBiodata">View Biodata</NavLink>
              </li>
              <li>
                <NavLink to="myContactRequest">My Contact Request</NavLink>
              </li>
              <li>
                <NavLink to="editBiodata">Favorite Biodata</NavLink>
              </li>
            </ul>
          </>
        )}

        <button className="bg-[#a9106b] text-white p-2">Logout</button>
        <hr />
        <ul>
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
