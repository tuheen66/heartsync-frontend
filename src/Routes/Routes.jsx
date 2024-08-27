import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "./../Layout/Dashboard";
import EditBiodata from "../Dashboard/EditBiodata";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Dashboard/AdminHome/ManageUsers";
import AdminDashboard from "../Dashboard/AdminHome/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "manage",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "editBiodata",
        element: <EditBiodata></EditBiodata>,
      },
    ],
  },
]);
