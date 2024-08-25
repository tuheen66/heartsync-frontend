import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-[90%] mx-auto flex">
      <div className="w-64 min-h-screen bg-purple-300 flex flex-col gap-6 p-4 font-semibold text-gray-700">
        <h2 className="font-bold text-xl">User Dashboard</h2>
        <NavLink to="editBiodata">Edit Biodata</NavLink>
        <NavLink to="viewBiodata">View Biodata</NavLink>
        <NavLink to="myContactRequest">My Contact Request</NavLink>
        <NavLink to="editBiodata">Favorite Biodata</NavLink>
        <button className="bg-[#a9106b] text-white p-2">Logout</button>
        <hr />
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
