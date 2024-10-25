import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSquareRemove } from "react-icons/ci";
import { removeFavourite } from "../redux/slices/FavouriteSlice";
function Collection() {
  const [removingImageId, setRemovingImageId] = useState(null);
  const dispatch = useDispatch();
  const favouriteStore = useSelector((state) => state.favourites.favourites);
  const handleRemove = (id) => {
    setRemovingImageId(id); // Set the image ID that is being removed
    setTimeout(() => {
      dispatch(removeFavourite(id)); // Remove after transition completes
      setRemovingImageId(null); // Reset after removal
    }, 500); // Wait for the transition to complete (0.5s)
  };
  return (
    <section className="collection">
      <ul>
        <li>🤍Favourite({favouriteStore.length})</li>
        <hr />
        <div className="collected-images ">
          {favouriteStore.map((images, index) => (
            <div
              key={index}
              className={`collection-imagecard image ${
                removingImageId === images.id ? "fade-out" : ""
              }`}
            >
              <div>
                <img className={`image `} src={images.imageUrl} alt="" />
                <div className="aboutImage">
                  <h6>Title</h6>
                  <p>{images.title || "No title"}</p>
                  <h6>Description</h6>
                  <p style={{ width: "50%" }}>
                    {images.description
                      ? images.description.split(".")[0]
                      : "No description"}
                  </p>
                </div>
              </div>
              <CiSquareRemove
                className="remove-icon"
                onClick={() => {
                  handleRemove(images.id);
                }}
              />
            </div>
          ))}
        </div>
      </ul>
    </section>
  );
}

export default Collection;
