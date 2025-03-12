import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import Sidebar from "../sidebar";

const Navbar = () => {
  const { cartLength, cart, totalPrice, deleteProduct } = useCartContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-xl">
          <Link className="navbar-brand" to="/">
            MyStore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">
                  Cart
                </Link>
              </li>
            </ul>

            <div className="d-flex gap-3 align-items-center">
              <FaSearch className="fs-5 cursor-pointer" />
              <FaUser className="fs-5 cursor-pointer" />

              <div
                className="position-relative"
                onClick={() => setIsSidebarOpen(true)}
              >
                <FaCartShopping className="fs-5 cursor-pointer" />
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cartLength}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        cart={cart}
        deleteProduct={deleteProduct}
        totalPrice={totalPrice}
      />

      {isSidebarOpen && (
        <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
