import { AiOutlineHeart, AiOutlineDownload } from "react-icons/ai"; // For favorite and download icons
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../redux/slices/FavouriteSlice";
import toast, { Toaster } from "react-hot-toast";

function ImageCard({ showModal, toggleModal, imageInfo }) {
  const favouriteStore = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();
  const handletoast = () =>
    toast("Already Added to Favourites", {
      icon: "❌",
    });
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {showModal && (
        <div className="modal-container" onClick={toggleModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div id="modal-header">
              <div className="user-info">
                <a href={imageInfo.user.links.html} target="_blank">
                  <img
                    src={imageInfo.user.profile_image.small}
                    alt="image"
                    className="user-pic"
                  />
                </a>
                <span className="username">{imageInfo.user.name}</span>
              </div>
              <div className="modal-actions">
                <a
                  href={`${imageInfo.links.download}?force=true`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                >
                  <AiOutlineDownload className="icon" />
                </a>
                <button className="favorite-btn">
                  <AiOutlineHeart
                    className="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (
                        favouriteStore.find(
                          (favourite) => favourite.id === imageInfo.id
                        )
                      ) {
                        handletoast();
                      } else {
                        e.target.style.color = "red";
                        console.log(e.target);
                        dispatch(
                          addFavourite({
                            imageUrl: imageInfo.urls.small,
                            id: imageInfo.id,
                            description: imageInfo.description,
                            title: imageInfo.title,
                          })
                        );
                      }
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="modal-image">
              <img
                src={imageInfo.urls.small}
                alt="MainImage"
                className="full-img"
              />
            </div>

            {/* Image Details */}
            <div id="modal-footer">
              <p>{imageInfo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageCard;
