import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { useEffect } from "react";
import Register from "./pages/Register";
import ForgotPass from "./pages/ForgotPass";
import StandardAccounts from "./pages/Trading/StandardAccounts";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
import ProtectedRoute from "./context/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider"
import Dashboard from "./pages/Dashboard";

function App() {
  const location = useLocation(); // Get the current route

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/forgotPassword"
    ) {
      document.body.className = "body"; // Remove extra classes
    } else {
      document.body.className = "body body--home"; // Set default classes
    }
  }, [location.pathname]); // Runs on route change
  // Hide Navbar & Footer on the login page
  const hideNavFooter =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgotPassword";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPass />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="StandardAccounts" element={<StandardAccounts />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {!hideNavFooter && <Footer />}
      </AuthProvider>
    </>
  );
}

export default App;
