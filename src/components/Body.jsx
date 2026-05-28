import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
        // as soon as the user signs in, navigate the user to the browse page written in login page
      } else {
        // User is signed out
        dispatch(removeUser());
        // if user signs out, navigate to home page written in header component
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
