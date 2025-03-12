import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SubscriptionForm = () => {
  return (
    <section className="subscription-section">
      <div className="container-xl">
        <div className="row justify-content-center text-center">
          <div className="subscription-box p-4">
            <div className="row g-3">
              {/* Inputs */}
              <div className="col-md-5">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
              <div className="col-md-5">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone number"
                />
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Subscribe</button>
              </div>
            </div>

            {/* subscribing Links   */}
            <p className="mt-3 text-white small">
              By subscribing, you agree to receive promotional messages. Msg &
              data rates may apply.
            </p>
            <p className="text-white small">
              See <Link to="/">Terms and Conditions</Link> &{" "}
              <Link to="/">Privacy Policy</Link>.
            </p>

            {/* Social links */}
            <div className="social-icons mt-3 d-flex align-items-center gap-3 justify-content-center ">
              <Link to="/" className="social-icon">
                <FaFacebookF />
              </Link>
              <Link to="/" className="social-icon">
                <FaTwitter />
              </Link>
              <Link to="/" className="social-icon">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;
