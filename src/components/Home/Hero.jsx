import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="hero__content hero__content--first">
                <h1 className="hero__title">
                  <strong>Neural technology</strong> <br />
                  for arbitrage trading in the crypto industry
                </h1>
                <p className="text-white">Trade with the world’s largest retail broker and benefit from better-than-market conditions.</p>

                <div className="hero__btns">
                  <Link className="hero__btn">Register</Link>
                  <Link className="hero__btn hero__btn--light">About us</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="hero__content hero__content--second">
                <Link className="cta">
                  <h2 className="cta__title">Registration bonus</h2>
                  <p className="cta__text">
                    Sign up and take part in the monthly drawing of{" "}
                    <b>$500 deposit bonus!</b> The number of contestants is
                    limited.
                  </p>

                  <div className="progressbar">
                    <h3 className="progressbar__title">Contestants:</h3>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Animated striped"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: "75%" }}
                      >
                        <span>75</span>
                      </div>
                    </div>
                    <div className="progressbar__values">
                      <span className="progressbar__value progressbar__value--left">
                        0
                      </span>
                      <span className="progressbar__value progressbar__value--right">
                        100
                      </span>
                    </div>
                  </div>
                  <span className="block-icon block-icon--red">
                    <i className="ti ti-gift"></i>
                  </span>
                  <span className="screw screw--lines-bl"></span>
                  <span className="screw screw--lines-br"></span>
                  <span className="screw screw--lines-tr"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
