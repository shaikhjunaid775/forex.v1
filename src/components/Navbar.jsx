import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/img/logo.svg";
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

                <ul
                  className={`header__nav ${menuOpen ? "open" : ""}`}
                  id="header__nav"
                >
                  <li className="header__dropdown">
                    <Link
                      className="dropdown-link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home
                    </Link>

                    {/* <ul className="dropdown-menu header__dropdown-menu">
                      <li>
                        <Link href="">Home style v1</Link>
                      </li>
                      <li>
                        <Link href="">Home style v2</Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="header__dropdown">
                    <Link
                      className="dropdown-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Trading <i className="ti ti-point-filled"></i>
                    </Link>
                    <div className="dropdown-menu header__dropdown-menu flex flex-row gap-4">
                      <ul className=" ">
                        <h5 className="font-black text-white mb-1">Accounts</h5>
                        <li>
                          <Link>Standard accounts</Link>
                        </li>
                        <li>
                          <Link>Professional accounts</Link>
                        </li>
                        <li>
                          <Link>Demo trading account</Link>
                        </li>
                        <li>
                          <Link>Social Trading accounts</Link>
                        </li>
                      </ul>
                      <ul className=" ">
                        <h5 className="font-black text-white mb-1">
                          Conditions
                        </h5>
                        <li>
                          <Link>Deposits and withdrawals</Link>
                        </li>
                        <li>
                          <Link>Fees</Link>
                        </li>
                        <li>
                          <Link>Client protection</Link>
                        </li>
                        <li>
                          <Link>Order execution</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="header__dropdown">
                    <Link
                      className="dropdown-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Markets <i className="ti ti-point-filled"></i>
                    </Link>

                    <ul className="dropdown-menu header__dropdown-menu">
                      <li>
                        <Link>Forex CFD</Link>
                      </li>
                      <li>
                        <Link>Commodities CFD</Link>
                      </li>
                      <li>
                        <Link>Stocks CFD</Link>
                      </li>
                      <li>
                        <Link>Indices CFD</Link>
                      </li>
                      <li>
                        <Link>Crypto CFD</Link>
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
                      Platform <i className="ti ti-point-filled"></i>
                    </Link>
                    <div className="dropdown-menu header__dropdown-menu grid grid-cols-2 md:grid-cols-3 gap-4">
                      {/* Desktop Column */}
                      <ul>
                        <h5 className="font-black text-white mb-1">Desktop</h5>
                        <li>
                          <Link>MetaTrader 5</Link>
                        </li>
                        <li>
                          <Link>MetaTrader 4</Link>
                        </li>
                      </ul>

                      {/* Mobile Column */}
                      <ul>
                        <h5 className="font-black text-white mb-1">Mobile</h5>
                        <li>
                          <Link>Trade App</Link>
                        </li>
                        <li>
                          <Link>MetaTrader 5 Mobile</Link>
                        </li>
                        <li>
                          <Link>MetaTrader 4 Mobile</Link>
                        </li>
                      </ul>

                      {/* Web Column */}
                      <ul>
                        <h5 className="font-black text-white mb-1">Web</h5>
                        <li>
                          <Link>Exness Terminal</Link>
                        </li>
                        <li>
                          <Link>MetaTrader WebTerminal</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* <li className="header__dropdown">
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
                  </li> */}
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
                <Link to="/login" className="header__profile">
                  <i className="ti ti-user-circle"></i>
                  <span>Login</span>
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
