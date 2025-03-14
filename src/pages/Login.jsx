import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    if (!email || !password) {
      toast.error("Both fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (
      !storedUser ||
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success("Login successful! Redirecting...");
    login(storedUser);
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="section section--content">
        <div className="section__content">
          <form onSubmit={handleSubmit} className="form form--content">
            <div className="form__logo-wrap">
              <Link to="/" className="form__logo">
                <img src="/assets/img/logo.svg" alt="" />
              </Link>
              <span className="form__tagline">
                Arbitrage trading <br />
                HTML Template
              </span>
            </div>

            <div className="form__group">
              <input
                type="text"
                className="form__input"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <div className="form__group">
              <input
                type="password"
                name="password"
                className="form__input"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <div className="form__group form__group--checkbox">
              <input id="remember" name="remember" type="checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <button className="form__btn" type="submit">
              Sign in
            </button>

            <span className="form__text form__text--center">
              Don't have an account? <Link to="/register">Sign up!</Link>
              <br /> <Link to="/forgotPassword">Forgot password?</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
