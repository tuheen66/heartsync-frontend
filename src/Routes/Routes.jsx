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
import AboutUs from "../Pages/AboutUs/AboutUs";
import ManageBlogs from "../Dashboard/AdminHome/ManageBlogs";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import AllBlogsPge from "../Pages/Blogs/AllBlogs";
import CreateBlogPage from "../Pages/Blogs/CreateBlog";

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
        element: <AboutUs></AboutUs>,
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

      {
        path: "/blogs",
        element: <AllBlogsPge />,
      },
      {
        path: "/blog-detail/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}`),
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
            <ApprovedPremium />
          </AdminRoute>
        ),
      },
      {
        path: "appContactReq",
        element: (
          <AdminRoute>
            <AppContactReq />,
          </AdminRoute>
        ),
      },
      {
        path: "successStory",
        element: <SuccessStory />,
      },
      {
        path: "manageBlogs",
        element: <ManageBlogs />,
      },
      {
        path: "createBlog",
        element: <CreateBlogPage />,
      },



      //! regular user routes
      {
        path: "editBiodata",
        element: <EditBiodata />,
      },

      {
        path: "viewBiodata",
        element: <ViewBiodata />,
      },
      {
        path: "contactRequest",
        element: <ContactRequest />,
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
        element: <FavoriteBiodata />,
      },
      {
        path: "gotMarried",
        element: <GotMarried />,
      },
    ],
  },
]);
