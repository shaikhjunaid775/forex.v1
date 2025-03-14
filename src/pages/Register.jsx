import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
    sponsorId: "",
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      fullName,
      username,
      email,
      phone,
      country,
      password,
      confirmPassword,
      sponsorId,
      termsAccepted,
    } = formData;

    if (
      !fullName ||
      !username ||
      !email ||
      !phone ||
      !country ||
      !password ||
      !confirmPassword ||
      !sponsorId
    ) {
      toast.error("All fields are required");
      return;
    }

    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));
    toast.success("Registration successful! Redirecting...");
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <>
      <Toaster />
      <div className="section section--content">
        <div className="section__content">
          <form onSubmit={handleSubmit} className="form form--content px-6">
            <div className="form__logo-wrap">
              <Link to="" className="form__logo">
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
                name="fullName"
                className="form__input"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <input
                type="text"
                name="username"
                className="form__input"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <input
                type="email"
                name="email"
                className="form__input"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <input
                type="text"
                name="phone"
                className="form__input"
                placeholder="Phone Number"
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <select
                name="country"
                className="form__input"
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Brazil">Brazil</option>
              </select>
            </div>

            {/* Password Input */}
            <div className="form__group form__password ">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form__input"
                placeholder="Password"
                onChange={handleChange}
              />
              {/* Toggle Password Button */}
              <button
                type="button"
                className="absolute top-3 end-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showConfirmPassword ? (
                  // Eye icon (open)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-400 size-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 18.75c-5.83 0-8.57-6.19-8.69-6.45a.78.78 0 0 1 0-.6c.12-.26 2.86-6.45 8.69-6.45s8.57 6.19 8.69 6.45a.78.78 0 0 1 0 .6c-.12.26-2.86 6.45-8.69 6.45m0-2c3.88 0 6.26-3.45 6.82-4.44-.56-.99-2.94-4.31-6.82-4.31s-6.26 3.32-6.82 4.31c.56.99 2.94 4.44 6.82 4.44" />
                    <path d="M12 15.25A3.25 3.25 0 1 1 15.25 12A3.26 3.26 0 0 1 12 15.25m0-5A1.75 1.75 0 1 0 13.75 12A1.76 1.76 0 0 0 12 10.25" />
                  </svg>
                ) : (
                  // Eye icon (closed)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-400 size-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="form__group form__password">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className="form__input"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              {/* Toggle Password Button */}
              <button
                type="button"
                className="absolute top-3 end-2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  // Eye icon (open)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-400 size-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 18.75c-5.83 0-8.57-6.19-8.69-6.45a.78.78 0 0 1 0-.6c.12-.26 2.86-6.45 8.69-6.45s8.57 6.19 8.69 6.45a.78.78 0 0 1 0 .6c-.12.26-2.86 6.45-8.69 6.45m0-2c3.88 0 6.26-3.45 6.82-4.44-.56-.99-2.94-4.31-6.82-4.31s-6.26 3.32-6.82 4.31c.56.99 2.94 4.44 6.82 4.44" />
                    <path d="M12 15.25A3.25 3.25 0 1 1 15.25 12A3.26 3.26 0 0 1 12 15.25m0-5A1.75 1.75 0 1 0 13.75 12A1.76 1.76 0 0 0 12 10.25" />
                  </svg>
                ) : (
                  // Eye icon (closed)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-400 size-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"></path>
                  </svg>
                )}
              </button>
            </div>

            <div className="form__group">
              <input
                type="text"
                name="sponsorId"
                className="form__input"
                placeholder="Sponsor ID"
                onChange={handleChange}
              />
            </div>
            <div className="form__group form__group--checkbox">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label htmlFor="termsAccepted">
                I agree to the <Link to="">Privacy Policy</Link>
              </label>
            </div>

            <button className="form__btn" type="submit">
              Sign up
            </button>

            <span className="form__text form__text--center">
              Already have an account? <Link to="/login">Sign in!</Link>
            </span>

            <Link to="/" className="block-icon block-icon--purple">
              <i className="ti ti-login"></i>
            </Link>
            <span className="screw screw--big-tr"></span>
            <span className="screw screw--big-bl"></span>
            <span className="screw screw--big-br"></span>
          </form>
        </div>

        <div
          className="section__canvas section__canvas--full section__canvas--third"
          id="canvas3"
        ></div>
      </div>
    </>
  );
}

export default Register;
