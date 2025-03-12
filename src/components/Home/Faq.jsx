import React from "react";

function Faq() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
              <div className="section__title">
                <h2>FAQ</h2>
                <p>
                  Here you'll find answers to frequently asked questions about
                  our company and services.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <ul
                className="nav nav-tabs section__tabs"
                id="section__tabs"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                    type="button"
                    role="tab"
                    aria-controls="tab-1"
                    aria-selected="true"
                  >
                    General
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                    type="button"
                    role="tab"
                    aria-controls="tab-2"
                    aria-selected="false"
                  >
                    Investing
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                    type="button"
                    role="tab"
                    aria-controls="tab-3"
                    aria-selected="false"
                  >
                    Partnership
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab-4"
                    type="button"
                    role="tab"
                    aria-controls="tab-4"
                    aria-selected="false"
                  >
                    Payouts
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tab-1"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="accordion" id="accordion">
                        <div className="row">
                          <div className="col-12 col-lg-6">
                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1"
                                aria-expanded="false"
                                aria-controls="collapse1"
                              >
                                What is cryptocurrency arbitrage trading?
                              </button>

                              <div
                                id="collapse1"
                                className="collapse visible"
                                data-bs-parent="#accordion"
                              >
                                <p>
                                  Cryptocurrency arbitrage trading involves
                                  exploiting price differences for the same
                                  asset across different exchanges.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2"
                                aria-expanded="false"
                                aria-controls="collapse2"
                              >
                                Is arbitrage trading risky?
                              </button>

                              <div
                                id="collapse2"
                                className="collapse visible"
                                data-bs-parent="#accordion"
                              >
                                <p>
                                  While arbitrage trading offers potential
                                  profit, it also carries risks related to
                                  market volatility and execution delays.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3"
                                aria-expanded="false"
                                aria-controls="collapse3"
                              >
                                How do I get started on your platform?
                              </button>

                              <div
                                id="collapse3"
                                className="collapse visible"
                                data-bs-parent="#accordion"
                              >
                                <p>
                                  Sign up on our website, complete the
                                  verification process, and connect your
                                  exchange accounts via API keys.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4"
                                aria-expanded="false"
                                aria-controls="collapse4"
                              >
                                Is my personal information secure?
                              </button>

                              <div
                                id="collapse4"
                                className="collapse visible"
                                data-bs-parent="#accordion"
                              >
                                <p>
                                  Yes, we employ advanced security measures,
                                  including encryption and two-factor
                                  authentication, to protect your data.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-lg-6">
                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse5"
                                aria-expanded="false"
                                aria-controls="collapse5"
                              >
                                What fees are associated with using?
                              </button>

                              <div
                                id="collapse5"
                                className="collapse visible"
                                data-bs-parent="#accordion"
                              >
                                <p>
                                  We charge a percentage-based fee on successful
                                  arbitrage trades. Exact fee details can be
                                  found in our Pricing section.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse6"
                                aria-expanded="false"
                                aria-controls="collapse6"
                              >
                                Do I need trading experience?
                              </button>

                              <div
                                id="collapse6"
                                className="collapse visible"
                                data-bs-parent="#accordion"
                              >
                                <p>
                                  While trading experience is beneficial, our
                                  platform is designed to be user-friendly, with
                                  educational resources to guide you.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse7"
                                aria-expanded="false"
                                aria-controls="collapse7"
                              >
                                What cryptocurrencies can I trade?
                              </button>

                              <div
                                id="collapse7"
                                className="collapse visible"
                                data-bs-parent="#accordion"
                              >
                                <p>
                                  Our platform supports a wide range of
                                  cryptocurrencies, including major and popular
                                  altcoins.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse8"
                                aria-expanded="false"
                                aria-controls="collapse8"
                              >
                                Is customer support available?
                              </button>

                              <div
                                id="collapse8"
                                className="collapse visible"
                                data-bs-parent="#accordion"
                              >
                                <p>
                                  Yes, we provide customer support through
                                  various channels, including live chat, email,
                                  and a ticketing system.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="tab-2" role="tabpanel">
                  <div className="row">
                    <div className="col-12">
                      <div className="accordion" id="accordion2">
                        <div className="row">
                          <div className="col-12 col-lg-6">
                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2-1"
                                aria-expanded="false"
                                aria-controls="collapse2-1"
                              >
                                How much capital do I need to start?
                              </button>

                              <div
                                id="collapse2-1"
                                className="collapse visible"
                                data-bs-parent="#accordion2"
                              >
                                <p>
                                  The required capital varies depending on your
                                  chosen trading strategies and the
                                  cryptocurrency market conditions.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2-2"
                                aria-expanded="false"
                                aria-controls="collapse2-2"
                              >
                                Can I automate my trades?
                              </button>

                              <div
                                id="collapse2-2"
                                className="collapse visible"
                                data-bs-parent="#accordion2"
                              >
                                <p>
                                  Yes, our platform offers automated trading
                                  features to execute arbitrage trades based on
                                  your predefined settings.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2-3"
                                aria-expanded="false"
                                aria-controls="collapse2-3"
                              >
                                What strategies can I use for trading?
                              </button>

                              <div
                                id="collapse2-3"
                                className="collapse visible"
                                data-bs-parent="#accordion2"
                              >
                                <p>
                                  You can explore triangular arbitrage,
                                  statistical arbitrage, and other strategies
                                  tailored to your risk tolerance.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2-4"
                                aria-expanded="false"
                                aria-controls="collapse2-4"
                              >
                                How can I monitor my trading?
                              </button>

                              <div
                                id="collapse2-4"
                                className="collapse visible"
                                data-bs-parent="#accordion2"
                              >
                                <p>
                                  Our platform provides detailed reports and
                                  analytics to track your trades, profits,
                                  losses, and overall performance.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-lg-6">
                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2-5"
                                aria-expanded="false"
                                aria-controls="collapse2-5"
                              >
                                Do you offer risk management tools?
                              </button>

                              <div
                                id="collapse2-5"
                                className="collapse visible"
                                data-bs-parent="#accordion2"
                              >
                                <p>
                                  Yes, we provide tools like stop-loss orders
                                  and trailing stops to help manage potential
                                  risks in your trades.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2-6"
                                aria-expanded="false"
                                aria-controls="collapse2-6"
                              >
                                Is leverage available on your platform?
                              </button>

                              <div
                                id="collapse2-6"
                                className="collapse visible"
                                data-bs-parent="#accordion2"
                              >
                                <p>
                                  Currently, we do not offer leverage for
                                  trading. All trades are executed with the
                                  available funds.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2-7"
                                aria-expanded="false"
                                aria-controls="collapse2-7"
                              >
                                Can I withdraw my investment at any time?
                              </button>

                              <div
                                id="collapse2-7"
                                className="collapse visible"
                                data-bs-parent="#accordion2"
                              >
                                <p>
                                  Yes, you can withdraw your investment funds at
                                  any time, subject to the withdrawal process
                                  and any applicable fees.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2-8"
                                aria-expanded="false"
                                aria-controls="collapse2-8"
                              >
                                Do you provide investment advice?
                              </button>

                              <div
                                id="collapse2-8"
                                className="collapse visible"
                                data-bs-parent="#accordion2"
                              >
                                <p>
                                  While we offer educational resources, we do
                                  not provide specific investment advice. It's
                                  important to do your own research.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="tab-3" role="tabpanel">
                  <div className="row">
                    <div className="col-12">
                      <div className="accordion" id="accordion3">
                        <div className="row">
                          <div className="col-12 col-lg-6">
                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3-1"
                                aria-expanded="false"
                                aria-controls="collapse3-1"
                              >
                                Do you offer a referral program?
                              </button>

                              <div
                                id="collapse3-1"
                                className="collapse visible"
                                data-bs-parent="#accordion3"
                              >
                                <p>
                                  Yes, we have a referral program that rewards
                                  users for referring new traders to our
                                  platform.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3-2"
                                aria-expanded="false"
                                aria-controls="collapse3-2"
                              >
                                Can businesses partner with your platform?
                              </button>

                              <div
                                id="collapse3-2"
                                className="collapse visible"
                                data-bs-parent="#accordion3"
                              >
                                <p>
                                  Yes, we offer partnership opportunities for
                                  businesses interested in collaborating with
                                  us. Contact our team for more details.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3-3"
                                aria-expanded="false"
                                aria-controls="collapse3-3"
                              >
                                Is there a requirement for partnership?
                              </button>

                              <div
                                id="collapse3-3"
                                className="collapse visible"
                                data-bs-parent="#accordion3"
                              >
                                <p>
                                  Partnership requirements vary based on the
                                  nature of the collaboration. Reach out to us
                                  to discuss potential partnerships.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3-4"
                                aria-expanded="false"
                                aria-controls="collapse3-4"
                              >
                                What benefits do partners receive?
                              </button>

                              <div
                                id="collapse3-4"
                                className="collapse visible"
                                data-bs-parent="#accordion3"
                              >
                                <p>
                                  Partners can access customized solutions,
                                  priority support, and potentially earn revenue
                                  through our partnership programs.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-lg-6">
                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3-5"
                                aria-expanded="false"
                                aria-controls="collapse3-5"
                              >
                                How can I become an affiliate partner?
                              </button>

                              <div
                                id="collapse3-5"
                                className="collapse visible"
                                data-bs-parent="#accordion3"
                              >
                                <p>
                                  Join our affiliate program by signing up on
                                  our website and using your unique referral
                                  link to invite new users.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3-6"
                                aria-expanded="false"
                                aria-controls="collapse3-6"
                              >
                                Do you offer white-label solutions?
                              </button>

                              <div
                                id="collapse3-6"
                                className="collapse visible"
                                data-bs-parent="#accordion3"
                              >
                                <p>
                                  Yes, we provide white-label solutions for
                                  businesses looking to integrate our arbitrage
                                  trading technology into their platforms.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3-7"
                                aria-expanded="false"
                                aria-controls="collapse3-7"
                              >
                                Can influencers collaborate?
                              </button>

                              <div
                                id="collapse3-7"
                                className="collapse visible"
                                data-bs-parent="#accordion3"
                              >
                                <p>
                                  Yes, we welcome influencers interested in
                                  promoting our platform. Contact our
                                  partnership team to discuss collaboration
                                  opportunities.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3-8"
                                aria-expanded="false"
                                aria-controls="collapse3-8"
                              >
                                How can I contact your partnership team?
                              </button>

                              <div
                                id="collapse3-8"
                                className="collapse visible"
                                data-bs-parent="#accordion3"
                              >
                                <p>
                                  You can reach out to our partnership team
                                  through the contact details provided on our
                                  Partnership page.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="tab-4" role="tabpanel">
                  <div className="row">
                    <div className="col-12">
                      <div className="accordion" id="accordion4">
                        <div className="row">
                          <div className="col-12 col-lg-6">
                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4-1"
                                aria-expanded="false"
                                aria-controls="collapse4-1"
                              >
                                When are profits from successful credited?
                              </button>

                              <div
                                id="collapse4-1"
                                className="collapse visible"
                                data-bs-parent="#accordion4"
                              >
                                <p>
                                  Profits from successful arbitrage trades are
                                  typically credited to your account shortly
                                  after the trade is completed.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4-2"
                                aria-expanded="false"
                                aria-controls="collapse4-2"
                              >
                                What payout options are available?
                              </button>

                              <div
                                id="collapse4-2"
                                className="collapse visible"
                                data-bs-parent="#accordion4"
                              >
                                <p>
                                  We offer various withdrawal options, including
                                  cryptocurrency transfers and bank transfers,
                                  based on your preferences.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4-3"
                                aria-expanded="false"
                                aria-controls="collapse4-3"
                              >
                                Is there a minimum withdrawal amount?
                              </button>

                              <div
                                id="collapse4-3"
                                className="collapse visible"
                                data-bs-parent="#accordion4"
                              >
                                <p>
                                  Yes, there is a minimum withdrawal amount that
                                  varies depending on the cryptocurrency you're
                                  withdrawing.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4-4"
                                aria-expanded="false"
                                aria-controls="collapse4-4"
                              >
                                Are there any withdrawal fees?
                              </button>

                              <div
                                id="collapse4-4"
                                className="collapse visible"
                                data-bs-parent="#accordion4"
                              >
                                <p>
                                  Withdrawal fees may apply and can vary based
                                  on the cryptocurrency and withdrawal method.
                                  Please refer to our Withdrawal section for
                                  details.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-lg-6">
                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4-5"
                                aria-expanded="false"
                                aria-controls="collapse4-5"
                              >
                                How long does it take to withdrawals?
                              </button>

                              <div
                                id="collapse4-5"
                                className="collapse visible"
                                data-bs-parent="#accordion4"
                              >
                                <p>
                                  Withdrawal processing times vary depending on
                                  the cryptocurrency network and the withdrawal
                                  method chosen.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4-6"
                                aria-expanded="false"
                                aria-controls="collapse4-6"
                              >
                                Can I reinvest my profits immediately?
                              </button>

                              <div
                                id="collapse4-6"
                                className="collapse visible"
                                data-bs-parent="#accordion4"
                              >
                                <p>
                                  Yes, you can reinvest your profits immediately
                                  after they are credited to your account to
                                  continue trading.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4-7"
                                aria-expanded="false"
                                aria-controls="collapse4-7"
                              >
                                Are there any limits of withdrawals?
                              </button>

                              <div
                                id="collapse4-7"
                                className="collapse visible"
                                data-bs-parent="#accordion4"
                              >
                                <p>
                                  We have withdrawal limits in place to ensure
                                  security. You can find the specific limits in
                                  our Withdrawal section.
                                </p>
                              </div>
                            </div>

                            <div className="accordion__card">
                              <button
                                className="collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4-8"
                                aria-expanded="false"
                                aria-controls="collapse4-8"
                              >
                                How can I ensure the security?
                              </button>

                              <div
                                id="collapse4-8"
                                className="collapse visible"
                                data-bs-parent="#accordion4"
                              >
                                <p>
                                  Enable two-factor authentication, use strong
                                  passwords, and follow our security
                                  recommendations to protect your payouts.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="section__btns section__btns--two">
                <a href="faq.html" className="section__btn">
                  View all
                </a>
                <button
                  className="section__btn section__btn--light"
                  data-bs-target="#modal-ask"
                  type="button"
                  data-bs-toggle="modal"
                >
                  Ask a question
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
