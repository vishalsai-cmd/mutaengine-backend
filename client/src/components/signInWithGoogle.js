import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(async (result) => {
        console.log(result);
      if (result.user) {
        toast.success("user logged in successfully",{
            position:"top-center",
        });
        window.location.href = "/Homepage";
      }
    })
    .catch((error) => {
      console.error("Google sign-in error:", error);
      toast.error("Sign-in failed. Please try again.", {
        position: "top-center",
      });
    });  
  }
  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div className="google-login">
            <button className="btn-google" onClick={googleLogin}>
              <img src="https://th.bing.com/th/id/OIP.lsGmVmOX789951j9Km8RagHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Google" className="google-icon" />
              login with google
            </button>
        </div>
    </div>
  );
}
export default SignInwithGoogle;