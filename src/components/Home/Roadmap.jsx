import React from "react";

function Roadmap() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="roadmap">
                <h2 className="roadmap__title">Roadmap</h2>

                <div className="roadmap__carousel splide splide--roadmap">
                  <div className="splide__arrows">
                    <button
                      className="splide__arrow splide__arrow--prev"
                      type="button"
                    >
                      <i className="ti ti-arrow-left"></i>
                    </button>
                    <button
                      className="splide__arrow splide__arrow--next"
                      type="button"
                    >
                      <i className="ti ti-arrow-right"></i>
                    </button>
                  </div>

                  <div className="splide__track">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <div className="roadmap__block roadmap__block--active">
                          <h3 className="roadmap__block-title">2023 Q4</h3>
                          <ul className="roadmap__block-list">
                            <li>
                              Develop the website's backend infrastructure and
                              set up secure trading APIs.
                            </li>
                            <li>
                              Design the user interface, ensuring ease of use
                              and seamless navigation.
                            </li>
                            <li>
                              Create educational content about cryptocurrency
                              arbitrage trading for the website's Knowledge
                              Center.
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="splide__slide">
                        <div className="roadmap__block roadmap__block--active">
                          <h3 className="roadmap__block-title">2024 Q1</h3>
                          <ul className="roadmap__block-list">
                            <li>
                              Launch the beta version of the website for a
                              limited user group to gather feedback.
                            </li>
                            <li>
                              Test and optimize the trading algorithms to ensure
                              accuracy and efficiency.
                            </li>
                            <li>
                              Implement robust security measures, including
                              encryption and two-factor authentication.
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="splide__slide">
                        <div className="roadmap__block">
                          <h3 className="roadmap__block-title">2024 Q2</h3>
                          <ul className="roadmap__block-list">
                            <li>
                              Launch the full version of the website to the
                              public.
                            </li>
                            <li>
                              Implement a comprehensive reporting and analytics
                              system for users to track their trading
                              performance.
                            </li>
                            <li>
                              Collaborate with industry experts to provide
                              regular insights and trading tips.
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="splide__slide">
                        <div className="roadmap__block">
                          <h3 className="roadmap__block-title">2024 Q3</h3>
                          <ul className="roadmap__block-list">
                            <li>
                              Develop advanced trading features, such as
                              arbitrage alerts and strategies.
                            </li>
                            <li>
                              Introduce a subscription-based model for premium
                              users, offering exclusive features and resources.
                            </li>
                            <li>
                              Expand educational resources with webinars and
                              tutorials.
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="splide__slide">
                        <div className="roadmap__block">
                          <h3 className="roadmap__block-title">2024 Q4</h3>
                          <ul className="roadmap__block-list">
                            <li>
                              Launch mobile apps for iOS and Android platforms
                              to facilitate trading on the go.
                            </li>
                            <li>
                              Continuously update trading algorithms based on
                              market trends and user feedback.
                            </li>
                            <li>
                              Collaborate with regulatory experts to ensure
                              compliance with evolving cryptocurrency
                              regulations.
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="block-icon block-icon--blue">
                  <i className="ti ti-north-star"></i>
                </span>
                <span className="screw screw--lines-bl"></span>
                <span className="screw screw--lines-br"></span>
                <span className="screw screw--lines-tr"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Roadmap;
