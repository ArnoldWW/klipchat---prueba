import { createContext } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ value: "context" }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
