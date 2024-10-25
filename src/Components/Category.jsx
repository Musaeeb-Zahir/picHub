import React from "react";
import { useDispatch } from "react-redux";
import { setQuaryFromCategory } from "../redux/slices/categorySlice";

function Category() {
  const dispatch = useDispatch();
  const btnName = [
    "Technology",
    "cars",
    "Computer",
    "Mobile",
    "School",
    "flowers",
  ];
  function handleCategory(e){
    dispatch(setQuaryFromCategory(e.target.innerHTML))
  }
  return (
    <div className="category-container">
      <h3 className="category-heading">Category</h3>
      {btnName.map((items, index) => (
        <button
          type="button"
          id="category-btn"
          className="btn"
          key={index}
          onClick={(e) => handleCategory(e)}
        >
          {items}
        </button>
      ))}
    </div>
  );
}

export default Category;
