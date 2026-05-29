# Netflix GPT using React + Vite

--Vite app
--Configured tailwindCss
--Header
--Routing of App
--Login Form
--Sign up form
--Form Validation
--useRef Hook
--Firebase Setup
--Deploying our app to production
--Create Sign up user account
--Implemented Sign In user Api
--Created Redux Store with userSlice. ----- created a store, craeted a slice, added the slice reducer onto the store, provided the store to Body using Provider.
--Implemented Sign Out
--Update Profile
--Fetch Movies from Tmdb Api
--Bug Fix: Sign up user displayName and profile picture update
--Bug Fix: if the user is not logged in, redirect /browse to login page and vice-versa
--Unsubscribed to the onAuthStateChanged callback
--Add hardcoded values to the constants file
--Register TMDB Api & create an app & get access token
--Go to API reference & Get data from "Now Playing" movies list
--Custom Hook for Now Playing Movies
--Create movieSlice
--Update Store with movies data
--Planning for Main Container and Secondary Container
--Fetch data for Trailer Video
--Update Store with Trailer Video Data
--Embed the you tube video and make it autoplay and mute
--Tailwind Classes to make Main Container look awesome.

# Features of the app

- Login/Sign up
  ---- Sign in / Sign Up Form
  ---- Once the user signs in we will store the data in the redux store &
  ---- Redirect the user to Browse Page
- Browse page ( after authentication)
  --- Header
  --- Main Movie
  ------ Trailer
  ------ Description
  ---- Movie Suggestions
  ------- MovieLists \* N
- NetFlixGPT
  ---- Search Bar
  ---- Movie Suggestions
