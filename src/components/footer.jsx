import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-xl">
        <div className="row">
          {/* Shopping Services */}
          <div className="col-md-6 col-lg-3">
            <h4>Shopping Services</h4>
            <ul>
              <li>
                <Link to="/">Schedule Consultation</Link>
              </li>
              <li>
                <Link to="/">Showrooms</Link>
              </li>
              <li>
                <Link to="/">Trade Program</Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="col-md-6 col-lg-3">
            <h4>About</h4>
            <ul>
              <li>
                <Link to="/">Our Story</Link>
              </li>
              <li>
                <Link to="/">Reviews</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Financing</Link>
              </li>
              <li>
                <Link to="/">Patents</Link>
              </li>
              <li>
                <Link to="/">Our Blog</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-6 col-lg-3">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link to="/">Look Up Order Status</Link>
              </li>
              <li>
                <Link to="/">Assembly Instructions</Link>
              </li>
              <li>
                <Link to="/">Returns</Link>
              </li>
              <li>
                <Link to="/">Shipping & Delivery</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Refer a Friend</Link>
              </li>
            </ul>
          </div>

          {/* Contact Customer Experience */}
          <div className="col-md-6 col-lg-3">
            <h4>Contact Customer Experience</h4>
            <p>Email: support@burrow.com</p>
            <p>Hours:</p>
            <p>Monday to Friday — 10a to 6p EST</p>
            <p>Saturday to Sunday — 10a to 2p EST</p>
            <p>15 W 27th Street, 10th Floor New York, NY, 10001</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; Momentum Solution -Wednesday, March 12, 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
