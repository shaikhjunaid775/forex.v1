import React from "react";

function Features() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="section__title">
                <h2>Our features</h2>
                <p>
                  Whether you're a beginner or an experienced trader, our
                  platform empowers you to make informed decisions and your
                  trading success.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="feature">
                <h3 className="feature__title">Safety</h3>
                <p className="feature__text">
                  We do not have access to your personal data and cannot
                  withdraw funds
                </p>

                <span className="block-icon block-icon--orange">
                  <i className="ti ti-shield-dollar"></i>
                </span>
                <span className="screw screw--bl"></span>
                <span className="screw screw--tr"></span>
                <span className="screw screw--big-br"></span>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <h3 className="feature__title">Automatization</h3>
                <p className="feature__text">
                  Automatic arbitrage calculations and deal closing
                </p>

                <span className="block-icon block-icon--green">
                  <i className="ti ti-24-hours"></i>
                </span>
                <span className="screw screw--bl"></span>
                <span className="screw screw--tr"></span>
                <span className="screw screw--big-br"></span>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <h3 className="feature__title">Analytics</h3>
                <p className="feature__text">
                  The robot shows you how your trades are performing in real
                  time
                </p>

                <span className="block-icon block-icon--blue">
                  <i className="ti ti-chart-histogram"></i>
                </span>
                <span className="screw screw--bl"></span>
                <span className="screw screw--tr"></span>
                <span className="screw screw--big-br"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
