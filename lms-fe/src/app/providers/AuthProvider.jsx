import React, { createContext, useEffect, useState } from "react";
// Step 1:
export const AuthStateContext = createContext(null);
export const AuthActionsContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const login = (authResponse) => {
    console.log(authResponse);

    const userInfo = {
      email: authResponse.email,
      fullName: authResponse.fullName,
      roles: authResponse.roles, // ["ROLE_ADMIN", "ROLE_INSTRUCTOR"]
    };

    setUser(userInfo); // Set the user info in state
    setAccessToken(authResponse.accessToken);

    // Set user info to localStorage so that it can be retrieved on page refresh
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");

    window.location.href = "/";
  };

  // When the app loads (F5), check if there is user info in localStorage and set it to context
  useEffect(() => {
    async function setData() {
      const userInfo = localStorage.getItem("user");
      const accessToken = localStorage.getItem("accessToken");
      
      setUser(JSON.parse(userInfo));
      setAccessToken(accessToken);      
    }
    setData();
  }, []);

  const stateValues = { user, accessToken };
  const actionValues = { login, logout };

  return (
    <AuthStateContext value={stateValues}>
      <AuthActionsContext value={actionValues}>{children}</AuthActionsContext>
    </AuthStateContext>
  );
};

export default AuthProvider;
