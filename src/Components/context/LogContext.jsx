import { createContext } from "react";
import { useState } from "react";

export const LogContext = createContext();
export const LogProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);


  const login = (username, password) => {
    let user = "ace0012";

    let pwd = "12345";

    if (username === user && password === pwd) {
      setIsAuth(true);
    }
  };

  const logout = () => {
    setIsAuth(false);
  };
  return (
    <LogContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </LogContext.Provider>
  );
};
