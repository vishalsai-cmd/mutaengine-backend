import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Homepage from "./pages/Homepage";
import Reset from "./components/reset";
import Profile from "./components/profile";
import CourseDetails from "./pages/CourseDetails";
import Success from "./payments/pdfbill";

function App() {

  return (
    <Router>
      <div className="App">

        <Routes>
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/" element={<Login />} />
              <Route path="/Homepage" element={<Homepage />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Success" element={<Success />} />
              <Route path="/course/:id" component={CourseDetails} />
            </>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
