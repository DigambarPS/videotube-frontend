import { useState } from "react";
import { AuthContext } from "./authContext.js";
import { useGetCurrentUser } from "../hooks/useUser.js";

const AuthContextProvider = ({ children }) => {
  const {data:user, isLoading, isError} = useGetCurrentUser();

  return (
    <AuthContext.Provider value={{ user, isLoading, isError }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;