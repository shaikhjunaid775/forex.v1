import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/img/logo.svg"
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <button
                  className={`header__btn ${menuOpen ? "active" : ""}`}
                  type="button"
                  aria-label="header__nav"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <Link className="header__logo">
                  <img src={logo} alt="" />
                </Link>
                <span className="header__tagline">
                  Arbitrage trading <br />
                  HTML Template
                </span>

                <ul className={`header__nav ${menuOpen ? "open" : ""}`} id="header__nav">
                  <li className="header__dropdown">
                    <Link
                      className="dropdown-link"
                      
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home <i className="ti ti-point-filled"></i>
                    </Link>

                    <ul className="dropdown-menu header__dropdown-menu">
                      <li>
                        <Link href="">Home style v1</Link>
                      </li>
                      <li>
                        <Link href="">Home style v2</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="header__dropdown">
                    <Link
                      className="dropdown-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Earnings <i className="ti ti-point-filled"></i>
                    </Link>

                    <ul className="dropdown-menu header__dropdown-menu">
                      <li>
                        <Link>Invest</Link>
                      </li>
                      <li>
                        <Link>Token</Link>
                      </li>
                      <li>
                        <Link>Affiliate</Link>
                      </li>
                      <li>
                        <Link>Contest</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link>Company</Link>
                  </li>

                  <li>
                    <Link>News</Link>
                  </li>

                  <li className="header__dropdown">
                    <Link
                      className="dropdown-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages <i className="ti ti-point-filled"></i>
                    </Link>

                    <ul className="dropdown-menu header__dropdown-menu">
                      <li>
                        <Link>How it works</Link>
                      </li>
                      <li>
                        <Link>Reports</Link>
                      </li>
                      <li>
                        <Link>Profile</Link>
                      </li>
                      <li>
                        <Link>Article</Link>
                      </li>
                      <li>
                        <Link>Get in touch</Link>
                      </li>
                      <li>
                        <Link>FAQ</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="header__dropdown">
                    <Link
                      className="dropdown-link dropdown-link--menu"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots"></i>
                    </Link>

                    <ul className="dropdown-menu header__dropdown-menu">
                      <li>
                        <Link>Sign in</Link>
                      </li>
                      <li>
                        <Link>Sign up</Link>
                      </li>
                      <li>
                        <Link>Forgot password</Link>
                      </li>
                      <li>
                        <Link>404 Page</Link>
                      </li>
                      <li>
                        <Link>Privacy policy</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="header__language">
                  <Link
                    className="dropdown-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EN <i className="ti ti-point-filled"></i>
                  </Link>

                  <ul className="dropdown-menu header__language-menu">
                    <li>
                      <Link href="#">English</Link>
                    </li>
                    <li>
                      <Link href="#">Spanish</Link>
                    </li>
                    <li>
                      <Link href="#">French</Link>
                    </li>
                  </ul>
                </div>
                <Link className="header__profile">
                  <i className="ti ti-user-circle"></i>
                  <span>Profile</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
