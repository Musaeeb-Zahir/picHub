import { createContext, useState } from "react";

const AppContext = createContext();
export function AppContextProvider({ children }) {
  const [Register, setRegister] = useState({
    isRegister: false,
    name: "",
    email: "",
    passward: null,
  });
  const [login, setlogin] = useState({
    userIsLogin: false,
    userName: "",
    userEmail: "",
    userPassward: null,
  });
  return (
    <AppContext.Provider value={{ Register, setRegister, login, setlogin }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContext;
