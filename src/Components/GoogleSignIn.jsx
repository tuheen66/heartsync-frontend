import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const GoogleSignIn = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default GoogleSignIn;
