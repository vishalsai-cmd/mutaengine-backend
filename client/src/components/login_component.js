import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import SignInwithGoogle from "./signInWithGoogle";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setError("Please complete the CAPTCHA");
      return;
    }

    fetch("https://mutaengine-backend-0hc3.onrender.com/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Login successful");
          localStorage.setItem("token", data.data);
          localStorage.setItem("userType", data.userType);
          localStorage.setItem("loggedIn", true);
          navigate(data.userType === "Admin" ? "/admin-dashboard" : "/Homepage");
        } else {
          setError(data.message || "Login failed");
        }
      })
      .catch((err) => setError("An error occurred. Please try again."));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Login</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              className="form-check-input"
              id="customCheck1"
            />
            <label className="form-check-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>

          <ReCAPTCHA
            sitekey="6LeFEEoqAAAAAG09wNx9dXcKNukzTxYaTU_HPSob"
            onChange={handleCaptchaChange}
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn-submit" disabled={!captchaValue}>
            Submit
          </button>

          <div className="links">
            <a href="/register">Register</a> | <a href='/reset'>Forgot password?</a>
          </div>

          <SignInwithGoogle></SignInwithGoogle>
        </form>
      </div>
    </div>
  );
}
