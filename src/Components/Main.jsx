import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbDownload } from "react-icons/tb";
import { IoHeartOutline } from "react-icons/io5";
import ImageCard from "./ImageCard";
import { useState } from "react";
import Loading from "./Loading";
import { addFavourite } from "../redux/slices/FavouriteSlice";
import toast, { Toaster } from "react-hot-toast";
function Main() {
  const favouriteStore = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();
  const SearchImages = useSelector((state) => state.searchSlice);
  const imageResults = SearchImages?.[0]?.results || [];
  // const userProfile=SearchImages.
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const [imageInfo, setimageInfo] = useState(null);
  function handleModel(e, image) {
    e.stopPropagation();
    setShowModal(true);
    setimageInfo(image);
  }

  const handletoast = () =>
    toast("Already Added to Favourites", {
      icon: "❌",
    });
  return (
    <div className="main-container">
      <Toaster position="top-center" reverseOrder={false} />
      {imageResults.length > 0 ? (
        imageResults.map((image, index) => (
          <div
            className="image-container"
            onClick={(e) => handleModel(e, image)}
            key={-index}
          >
            <img
              className="main-images"
              key={index}
              src={image.urls.small}
              alt={image.description}
              style={{}}
            />
            <span
              className="favourite"
              id="fav"
              onClick={(e) => {
                e.stopPropagation();
                if (
                  favouriteStore.find((favourite) => favourite.id === image.id)
                ) {
                  handletoast();
                } else {
                  e.target.style.color = "red";
                  dispatch(
                    addFavourite({
                      imageUrl: image.urls.small,
                      id: image.id,
                      description: image.description,
                      title: image.title,
                    })
                  );
                }
              }}
            >
              <IoHeartOutline />
            </span>
            <a href={image.links.download} download className="download-link">
              <TbDownload className="download-icon-image" />
            </a>
            <div className="people">
              <a
                href={image.user.links.html}
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <div>
                  <img src={image.user.profile_image.small} alt="pp" />
                  <p>{image.user.name}</p>
                </div>
              </a>
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
      <ImageCard
        toggleModal={toggleModal}
        showModal={showModal}
        imageInfo={imageInfo}
      />
    </div>
  );
}

export default Main;
