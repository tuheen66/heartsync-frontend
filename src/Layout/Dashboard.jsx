import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { logOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logOut().then(() => console.log("logged out successfully "));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-gray-50">
      <Helmet>
        <title>Heartsync | Dashboard</title>
      </Helmet>

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-purple-300">
        <h2 className="font-bold text-xl">{isAdmin ? "Admin Home" : "User Home"}</h2>
        <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none">
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "block" : "hidden"} lg:block lg:w-64 bg-purple-300 flex flex-col p-4 font-semibold text-gray-700 overflow-y-auto`}
      >
        {isAdmin ? (
          <>
            <h2 className="font-bold text-xl px-4 hidden lg:block">Admin Home</h2>
            <ul className="flex flex-col gap-4 px-4">
              <li>
                <NavLink
                  to="/dashboard/adminDashboard"
                  className={({ isActive }) => 
                    `block p-2 rounded ${isActive ? "bg-[#a9106b] text-white" : "text-gray-700 hover:bg-purple-200"}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Admin Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage"
                  className={({ isActive }) => 
                    `block p-2 rounded ${isActive ? "bg-[#a9106b] text-white" : "text-gray-700 hover:bg-purple-200"}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/appPremium"
                  className={({ isActive }) => 
                    `block p-2 rounded ${isActive ? "bg-[#a9106b] text-white" : "text-gray-700 hover:bg-purple-200"}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Approved Premium
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/appContactReq"
                  className={({ isActive }) => 
                    `block p-2 rounded ${isActive ? "bg-[#a9106b] text-white" : "text-gray-700 hover:bg-purple-200"}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Approved Contact Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/successStory"
                  className={({ isActive }) => 
                    `block p-2 rounded ${isActive ? "bg-[#a9106b] text-white" : "text-gray-700 hover:bg-purple-200"}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Success Story
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <h2 className="font-bold text-xl px-4 hidden lg:block">User Home</h2>
            <ul className="flex flex-col gap-4 px-4">
              <li>
                <NavLink
                  to="/dashboard/editBiodata"
                  className={({ isActive }) => 
                    `block p-2 rounded ${isActive ? "bg-[#a9106b] text-white" : "text-gray-700 hover:bg-purple-200"}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Edit Biodata
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/viewBiodata"
                  className={({ isActive }) => 
                    `block p-2 rounded ${isActive ? "bg-[#a9106b] text-white" : "text-gray-700 hover:bg-purple-200"}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  View Biodata
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/contactRequest"
                  className={({ isActive }) => 
                    `block p-2 rounded ${isActive ? "bg-[#a9106b] text-white" : "text-gray-700 hover:bg-purple-200"}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  My Contact Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/favoriteBiodata"
                  className={({ isActive }) => 
                    `block p-2 rounded ${isActive ? "bg-[#a9106b] text-white" : "text-gray-700 hover:bg-purple-200"}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  My Favorite Biodata
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/gotMarried"
                  className={({ isActive }) => 
                    `block p-2 rounded ${isActive ? "bg-[#a9106b] text-white" : "text-gray-700 hover:bg-purple-200"}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  Got Married
                </NavLink>
              </li>
            </ul>
          </>
        )}

        <button 
          onClick={handleLogout} 
          className="bg-[#a9106b] text-white p-2 rounded mt-4 hover:bg-[#8a0d5a]"
        >
          Logout
        </button>
        
        <hr className="my-4 border-gray-400" />
        
        <ul className="flex flex-col gap-4 px-4">
          <li>
            <NavLink 
              to="/" 
              className="block p-2 rounded hover:bg-purple-200"
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;