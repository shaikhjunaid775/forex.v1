import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 order-1 order-lg-4 order-xl-1">
              <div className="footer__logo">
                <img src="assets/img/logo.svg" alt="" />
              </div>

              <p className="footer__tagline">
                The Centure team works hard <br />
                to deliver exceptional financial results <br />
                and increase our clients' revenue.
              </p>

              <div className="footer__currencies">
                <i className="ti ti-currency-bitcoin"></i>
                <i className="ti ti-currency-ethereum"></i>
                <i className="ti ti-currency-litecoin"></i>
                <i className="ti ti-currency-solana"></i>
                <i className="ti ti-currency-dogecoin"></i>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-3 order-md-2 order-lg-2 order-xl-3 offset-md-2 offset-lg-0">
              <h6 className="footer__title">Company</h6>
              <div className="footer__nav">
                <Link href="about.html">About Centure</Link>
                <Link href="blog.html">Our news</Link>
                <Link href="about.html">License</Link>
                <Link href="contacts.html">Contacts</Link>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-6 col-xl-4 order-2 order-md-3 order-lg-1 order-xl-2">
              <div className="row">
                <div className="col-12">
                  <h6 className="footer__title">Services & Features</h6>
                </div>

                <div className="col-6">
                  <div className="footer__nav">
                    <Link href="invest.html">Invest</Link>
                    <Link href="token.html">Token</Link>
                    <Link href="affiliate.html">Affiliate</Link>
                    <Link href="contest.html">Contest</Link>
                  </div>
                </div>

                <div className="col-6">
                  <div className="footer__nav">
                    <Link href="about.html">Safety</Link>
                    <Link href="about.html">Automatization</Link>
                    <Link href="about.html">Analytics</Link>
                    <Link href="reports.html">Reports</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-4 order-md-4 order-lg-3 order-xl-4">
              <h6 className="footer__title">Support</h6>
              <div className="footer__nav">
                <Link href="faq.html">Help center</Link>
                <Link href="how.html">How it works</Link>
                <Link href="privacy.html">Privacy policy</Link>
                <Link href="privacy.html">Terms & conditions</Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="footer__content">
                <div className="footer__social">
                  <Link href="#" target="_blank">
                    <i className="ti ti-brand-facebook"></i>
                  </Link>
                  <Link href="#" target="_blank">
                    <i className="ti ti-brand-x"></i>
                  </Link>
                  <Link href="#" target="_blank">
                    <i className="ti ti-brand-instagram"></i>
                  </Link>
                  <Link href="#" target="_blank">
                    <i className="ti ti-brand-telegram"></i>
                  </Link>
                  <Link href="#" target="_blank">
                    <i className="ti ti-brand-discord"></i>
                  </Link>
                  <Link href="#" target="_blank">
                    <i className="ti ti-brand-linkedin"></i>
                  </Link>
                </div>

                <small className="footer__copyright">
                  © Centure, 2023. Created by{" "}
                  <Link
                    href="https://themeforest.net/user/dmitryvolkov/portfolio"
                    target="_blank"
                  >
                    Dmitry Volkov
                  </Link>
                  .
                </small>
              </div>
            </div>
          </div>
        </div>

        <span className="screw screw--footer screw--footer-bl"></span>
        <span className="screw screw--footer screw--footer-br"></span>
        <span className="screw screw--footer screw--footer-tr"></span>
        <span className="screw screw--footer screw--footer-tl"></span>
      </footer>
    </>
  );
}

export default Footer;
