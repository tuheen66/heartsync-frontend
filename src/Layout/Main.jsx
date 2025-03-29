import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div className="mx-auto font-raleway">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
