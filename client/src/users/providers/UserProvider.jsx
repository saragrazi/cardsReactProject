import React, { useContext, useEffect, useMemo, useState } from "react";
import { getToken, getUser } from "../services/localStorageService";
import { node } from "prop-types";

const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getToken);

  useEffect(() => {
    if (!user) {
      const userFromLocaleStorage = getUser();
      setUser(userFromLocaleStorage);
      setToken(localStorage?.getItem("token")); // כאן הוספתי את השורה הזאת כדי שבכל בפעם שעושים REFRESH הוא יקרא אם יש יוזר 
    }
  }, [user]);

  const value = useMemo(() => {
    return { user, setUser, token, setToken };
  }, [user, token]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser muse be used with UserProvider");
  return context;
};

UserProvider.propTypes = {
  children: node.isRequired,
};
