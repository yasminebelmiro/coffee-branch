import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../service/firebaseConfig";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext();

export const AuthGoogleProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem("@AuthCoffee:token");
      const sessionUser = sessionStorage.getItem("@AuthCoffee:user");
      if (sessionToken && sessionUser) {
        setUser(sessionUser);
      }
    };
  });

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        setUser(user);

        sessionStorage.setItem("@AuthCoffee:token", token);
        sessionStorage.setItem("@AuthCoffee:user", JSON.stringify(user));
      })
      .catch((error) => {
        console.error("Erro ao autenticar com o Google:", error);
      });
  };

  return (
    <AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user, user }}>
      {children}
    </AuthGoogleContext.Provider>
  );
};
