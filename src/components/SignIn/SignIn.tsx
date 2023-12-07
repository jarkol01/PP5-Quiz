import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "../../Firebase";

const provider = new GoogleAuthProvider();

const signInWithGooglePopup = () => {
  signInWithPopup(auth, provider)
    .then()
    .catch((error) => {
      console.log(error);
    });
};

function SignIn() {
  return (
    <button onClick={signInWithGooglePopup} className="google-btn">
      Zaloguj się przez Google
    </button>
  );
}

export default SignIn;
