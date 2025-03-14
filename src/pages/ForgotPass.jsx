import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function ForgotPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!email) {
      toast.error("Please enter an email");
      return;
    }

    if (!storedUser || storedUser.email !== email) {
      toast.error("Email not found");
      return;
    }

    toast.success("OTP sent to your email (1234)");
    setShowOtpField(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp !== "1234") {
      toast.error("Invalid OTP");
      return;
    }

    toast.success("OTP verified! You can reset your password");
    setShowPasswordFields(true);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      toast.error("Both password fields are required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    let storedUser = JSON.parse(localStorage.getItem("userData"));
    storedUser.password = password;
    localStorage.setItem("userData", JSON.stringify(storedUser));

    toast.success("Password reset successful! Redirecting...");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <>
      <Toaster />
      <div className="section section--content">
        <div className="section__content">
          <form className="form form--content">
            <div className="form__logo-wrap">
              <a href="index-2.html" className="form__logo">
                <img src="/assets/img/logo.svg" alt="" />
              </a>
              <span className="form__tagline">
                Arbitrage trading <br />
                HTML Template
              </span>
            </div>

            {/* Email Input */}
            {!showOtpField && !showPasswordFields && (
              <>
                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className="form__btn" type="button" onClick={handleEmailSubmit}>
                  Send OTP
                </button>
              </>
            )}

            {/* OTP Input */}
            {showOtpField && !showPasswordFields && (
              <>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <button className="form__btn" type="button" onClick={handleOtpSubmit}>
                  Verify OTP
                </button>
              </>
            )}

            {/* Password Reset */}
            {showPasswordFields && (
              <>
                <div className="form__group">
                  <input
                    type="password"
                    className="form__input"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    className="form__input"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button className="form__btn" type="button" onClick={handlePasswordReset}>
                  Reset Password
                </button>
              </>
            )}

            <span className="form__text form__text--center">
              We will send an OTP to your Email
            </span>
            <Link to="/login" className="form__text form__text--center mt-2 underline">
              Back to login
            </Link>

            <span className="block-icon block-icon--purple">
              <i className="ti ti-lock"></i>
            </span>
            <span className="screw screw--big-tr"></span>
            <span className="screw screw--big-bl"></span>
            <span className="screw screw--big-br"></span>
          </form>
        </div>

        <div className="section__canvas section__canvas--full section__canvas--third" id="canvas3"></div>
      </div>
    </>
  );
}

export default ForgotPass;
