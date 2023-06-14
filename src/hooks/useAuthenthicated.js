import { useContext } from "react";
import { useEffect } from "react";
import { StickerContext } from "../context";

export const useAuthenthicated = () => {
  const { setUser, setProfile, setIsLogged, setLogout } =
    useContext(StickerContext);

  const startLogin = async ({ email, password }) => {
    try {
      const data = await fetch("http://localhost:4000/api/auth", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => json);

      if (!data.ok) {
        return data.msg;
      }

      console.log(data);
      //   localStorage.setItem("token", data.token);
      //   localStorage.setItem("token-init-date", new Date().getTime());
      //   setUser({ email });
      //   setProfile({ name });
      //   setIsLogged(true);
      return false;
    } catch (error) {
      //   console.log(error);
      //   console.log(error?.msg);
      return error?.msg || "--";
    }
  };

  const startRegister = async ({ name, email, password }) => {
    try {
      const data = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => json);

      if (!data.ok) {
        return data.msg;
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      setUser({ email });
      setProfile({ name });
      setIsLogged(true);
      return false;
    } catch (error) {
      //   console.log(error);
      //   console.log(error?.msg);
      return error?.msg || "--";
    }
  };

  const startSetProfile = async ({ logo, instagram, whatsapp }) => {
    try {
      const data = await fetch("http://localhost:4000/api/profile", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": "token",
        },
      })
        .then((response) => response.json())
        .then((json) => json);

      if (!data.ok) {
        return data.msg;
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      setUser({ email });
      setProfile({ name });
      setIsLogged(true);
      return false;
    } catch (error) {
      //   console.log(error);
      //   console.log(error?.msg);
      return error?.msg || "--";
    }
  };

  return {
    startLogin,
    startRegister,
    startSetProfile,
  };
};
