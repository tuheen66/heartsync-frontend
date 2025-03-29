import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import GoogleSignIn from "../../Components/GoogleSignIn";
import login from "../../assets/images/login.jpg"

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(from, { replace: true });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("firebase", error);

        Swal.fire({
          title: "Ooops!",
          text: "Please provide valid email and correct password",
          icon: "error",
          confirmButtonText: "Oh no!",
        });
      });
  };

  const handleQuickLogin = (email, password) => {
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("firebase", error);
        Swal.fire({
          title: "Ooops!",
          text: "Login failed",
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };

  return (
    <div className="w-[90%]  mx-auto items-center ">
      <Helmet>
        <title>Heartsync | Login</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row border border-gray-300">
        <div className="flex-1">
          <img src={login} alt="" />
        </div>
        <div className="w-full flex-1 p-4  mx-auto text-gray-700 my-8 ">
          <h2 className="text-center text-3xl font-bold">Please Login</h2>

          <div className=" border border-gray-300 px-4 my-4">
            <p className="text-sm text-center my-4">For test purpose only</p>
            <div className="flex  gap-4 mb-6">
              <button
                onClick={() =>
                  handleQuickLogin("admin@heartsync.com", "admin123")
                }
                className=" bg-slate-100 text-gray-800 py-2 px-4  flex-1 border border-gray-300"
              >
                Login as Admin
              </button>
              <button
                onClick={() => handleQuickLogin("aminur@rahman.com", "123456")}
                className="bg-slate-300 text-gray-800 py-2 px-4  flex-1 border border-gray-300"
              >
                Login as Premium User
              </button>
              <button
                onClick={() => handleQuickLogin("ayesha@sultana.com", "123456")}
                className="bg-slate-300 text-gray-800 py-2 px-4  flex-1 border border-gray-300"
              >
                Login as Normal User
              </button>
            </div>
          </div>

          <form onSubmit={handleSignIn} className="form-action space-y-4">
            <div className="w-full">
              <label className="pl-4 " htmlFor="email">
                Your email:
              </label>
              <input
                className=" py-2 px-4 w-full mb-2  border border-gray-300"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="w-full relative">
              <label className="pl-4 " htmlFor="password">
                Password:
              </label>
              <input
                className=" py-2 px-4 w-full mb-2  border border-gray-300"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-9"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>

            <input
              className=" bg-[#a9106b] py-2  w-full border-none text-white text-lg mt-6 hover:bg-[#30336b] "
              type="submit"
              value="Login"
            />
          </form>

          <div className="text-center mt-4 space-y-2">
            <p className="flex justify-center items-center">
              Sign In with
              <span
                //   onClick={handleGoogleSignIn}
                className="text-[#eb4d4b] font-bold mx-2 cursor-pointer hover:underline"
              >
                <GoogleSignIn />
              </span>
            </p>
            <p>
              New to this site? Please
              <Link to="/register" className="font-bold ml-2 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
