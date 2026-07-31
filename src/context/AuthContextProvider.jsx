import { useState } from "react";
import AuthContext from "./authContext";

const AuthContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <AuthContext.Provider value={{ theme, setTheme }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function showAvatarOptions(){
    alert('hi')
}

export {AuthContextProvider, showAvatarOptions};