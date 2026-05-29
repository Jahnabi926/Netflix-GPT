import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { USER_AVATAR } from "./utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null); // it creates a reference . Used for getting the typed data inside the input fields in forms
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    const nameValue = name.current ? name.current.value : null;
    const emailValue = email.current ? email.current.value : null;
    const passwordValue = password.current ? password.current.value : null;

    const message = checkValidData(nameValue, emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return; // if there is error , don't go ahead. else proceed with the following sign in sign up logic

    //sign in / sign up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue) // CREATES USER. IT IS AN API THAT RETURNS A PROMISE
        // IF SUCCESS
        .then((userCredential) => {
          //then Sign In the new user
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser; // from the updated user

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              console.log("Who Signed Up ?", user);
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Who Logged in ?", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
          alt="banner"
        />
      </div>
      {/* e.preventDefault prevents form submission on click of submit button */}
      <form
        className="max-w-3/12 p-12 absolute bg-black opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up now"
            : "Already Registered ? Sign In now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
