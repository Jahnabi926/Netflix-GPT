import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "./utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful. Routing to be done using navigate logic inside useEffect of Header
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //this useEffect runs once evrytime our Header component loads and Header is present on every page so we put navigation and auth logic here
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User sign in or sign up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        ); // adding user data to store
        // as soon as the user signs in, navigate the user to the browse page
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        // if user signs out, navigate to home page
        navigate("/");
      }
    });
    // unsubscribe whn component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="Netflix logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user?.photoURL} alt="userIcon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
