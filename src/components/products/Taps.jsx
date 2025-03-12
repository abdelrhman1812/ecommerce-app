import React from "react";

const Taps = ({ activeTab, setActiveTab, product }) => {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <ul className="nav nav-tabs" id="productTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "features" ? "active" : ""}`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === "specifications" ? "active" : ""
              }`}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
          </li>
        </ul>
        <div className="tab-content p-4 border border-top-0 rounded-bottom">
          <div
            className={`tab-pane fade ${
              activeTab === "description" ? "show active" : ""
            }`}
          >
            <p>{product?.description}</p>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "features" ? "show active" : ""
            }`}
          ></div>
          <div
            className={`tab-pane fade ${
              activeTab === "specifications" ? "show active" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Taps;
