import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Components/Registration";
import Login from "./Components/Login";
// import CorrectRoute from "./Components/CorrectRoute";
import AppContext, { AppContextProvider } from "./Context/context";
import { Provider, useSelector } from "react-redux";
import appStore from "./redux/store";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
function Main() {
  // const { login, setlogin } = useContext(AppContext);
  const loginState = useSelector((state) => state.loginFormState);
  const isLogin = loginState.length > 0;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: isLogin ? <Home /> : <Navigate to="/login" />,
        },
        {
          path: "/home",
          element: isLogin ? <Home /> : <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: !isLogin ? <Login /> : <Navigate to="/home" />,
        },
        {
          path: "/login",
          element: !isLogin ? <Login /> : <Navigate to="/home" />,
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/profile",
          element: !isLogin ? <Login /> : <Profile />,
        },
      ],
    },
    { path: "/registration", element: <Register /> },
  ]);
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <Main />
    </Provider>
  </StrictMode>
);
