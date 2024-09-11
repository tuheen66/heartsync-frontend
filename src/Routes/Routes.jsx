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
import ViewBiodata from "../Dashboard/ViewBiodata";
import Biodatas from "../Pages/Biodatas/Biodatas";
import BiodataDetails from "../Pages/BiodataDetails/BiodataDetails";
import FavoriteBiodata from "../Dashboard/FavoriteBiodata";
import ApprovedPremium from "../Dashboard/AdminHome/ApprovedPremium";
import AdminRoute from "./AdminRoute";
import Checkout from "../Pages/Checkout/Checkout";
import ContactRequest from "../Dashboard/ContactRequest";
import AppContactReq from "../Dashboard/AdminHome/AppContactReq";
import GotMarried from "../Dashboard/GotMarried";
import SuccessStory from "../Dashboard/AdminHome/SuccessStory";
import NewEditBiodata from "../Dashboard/NewEditBiodata";
import AboutUs from "../Pages/AboutUs/AboutUs";


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
      
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },

      {
        path: "/biodatas",
        element: <Biodatas></Biodatas>,
        loader: () => fetch("http://localhost:5000/biodataCount"),
      },

      {
        path: "/biodata-details/:id",
        element: (
          <PrivateRoute>
            <BiodataDetails></BiodataDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodata/${params.id}`),
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
        path: "adminDashboard",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "manage",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "appPremium",
        element: (
          <AdminRoute>
            <ApprovedPremium></ApprovedPremium>
          </AdminRoute>
        ),
      },
      {
        path: "appContactReq",
        element: (
          <AdminRoute>
            <AppContactReq></AppContactReq>,
          </AdminRoute>
        ),
      },
      {
        path: "successStory",
        element: <SuccessStory></SuccessStory>,
      },

      // regular user routes
      {
        path: "editBiodata",
        element: <EditBiodata></EditBiodata>,
      },
      {
        path: "newEditBiodata",
        element: <NewEditBiodata></NewEditBiodata>,
      },
      {
        path: "viewBiodata",
        element: <ViewBiodata></ViewBiodata>,
      },
      {
        path: "contactRequest",
        element: <ContactRequest></ContactRequest>,
      },

      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodata/${params.id}`),
      },
      {
        path: "favoriteBiodata",
        element: <FavoriteBiodata></FavoriteBiodata>,
      },
      {
        path: "gotMarried",
        element: <GotMarried></GotMarried>,
      },
    ],
  },
]);
