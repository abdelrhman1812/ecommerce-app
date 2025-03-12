import React, { useState } from "react";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

const SortBy = ({ onSort }) => {
  const [sortOption, setSortOption] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSort(value, order);
  };

  const toggleOrder = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setOrder(newOrder);
    onSort(sortOption, newOrder);
  };

  return (
    <div className="sort-container">
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="sort-select"
      >
        <option value="">Sort By</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
      </select>
      <button
        onClick={toggleOrder}
        className="sort-button d-flex border-0 text-white align-items-center"
      >
        {order === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />}
      </button>
    </div>
  );
};

export default SortBy;
