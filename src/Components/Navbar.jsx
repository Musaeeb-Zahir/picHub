import { useDispatch, useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { removeLoginUser } from "../redux/slices/loginFormSlice";
import { setSearchImg } from "../redux/slices/searchSlice";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
function Navbar() {
  const loginState = useSelector((state) => state.loginFormState);
  const categoryState = useSelector((state) => state.category);
  const userIsLogin = loginState.length > 0;
  const loggedInUserName =
    userIsLogin && loginState.length > 0 && loginState[0].email
      ? loginState[0].email.split("@")[0]
      : "";

  const [query, setQuery] = useState("nature");
  const [search, setsearch] = useState("");
  // ========handleLogOut=========
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogOut() {
    navigate("/login");
    dispatch(removeLoginUser(null));
  }
  // =========handle api==========
  const handleSearch = () => {
    setQuery(search);
    fetchSearchedPhotos();
  };

  useEffect(() => {
    fetchSearchedPhotos();
  }, [query]);

  // =====Search on the base on category====
  useEffect(() => {
    if (categoryState.query.length > 0) {
      setQuery(categoryState.query);
    }
  }, [categoryState.query]); // Only run this effect when the category query changes

  const accessKey = "JHP0Jey_1m7jf7YVLQqoRguE4PJJqWsA8fxyRUfPjnI";
  const fetchSearchedPhotos = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
      );
      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      const data = await response.json();
      dispatch(setSearchImg(data));
    } catch (error) {
      console.error("Error fetching photos based on search query:", error);
    }
  };
  return (
    <header
      className={`p-3 mb-3 border-bottom header ${
        userIsLogin ? "display-block" : "display-none"
      }`}
    >
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            // className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            <img src="logo.png" className="logo logo-image" width="75" />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/home" href="#" className=" px-2 text-black home-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className=" px-2 link-body-emphasis about-link">
                About
              </Link>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <div className="search-container">
              <input
                type="search"
                id="search-input-feild"
                className="form-control "
                placeholder="Search..."
                aria-label="Search"
                onChange={(e) => setsearch(e.target.value)}
              />
              <span className="search-icon-container">
                <IoSearchOutline
                  className="search-icon"
                  onClick={handleSearch}
                />
              </span>
            </div>
          </form>
          <p className="m-2 text-dark-emphasis text-capitalize fs-7">
            {loggedInUserName}
          </p>
          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?w=32&dpr=1&crop=faces&bg=%23fff&h=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="userProfile"
                style={{ borderRadius: "50%" }}
              />
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div
                  className="dropdown-item curser-pointer"
                  onClick={handleLogOut}
                >
                  LogOut <IoIosLogOut />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
