export const saveStateToLocalStorage = (state) => {
  try {
    const registerState = JSON.stringify(state);
    localStorage.setItem("registeredState", registerState);
  } catch {
    console.log("LocalStorage mein state save nahi ho sakta", error);
  }
};

export const getStateFromLocalStorage = () => {
  try {
    const getRegisteredState = localStorage.getItem("registeredState");
    // console.log(localStorage.getItem("registeredState:"));
    if (getRegisteredState === null) {
      console.log("getRegister is null");
      return undefined;
    }

    return JSON.parse(getRegisteredState);
  } catch {
    console.log("LocalStorage se state load nahi ho sakta", error);
    return [];
  }
};
