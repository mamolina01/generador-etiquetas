import { useContext } from "react";
import { StickerContext } from "../context";
import Swal from "sweetalert2";
import stickerApi from "../api/stickerApi";

export const useAuthenthicated = () => {
  const { setUser, user, setProfile, profile, setIsLogged } =
    useContext(StickerContext);

  const startLogin = async ({ email, password }) => {
    try {
      const { data } = await stickerApi.post(`/auth`, { email, password });

      if (!data.ok) {
        return data.msg;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      try {
        const { data: dataLogin } = await stickerApi.get(`/profile`);

        if (!dataLogin.ok) {
          setProfile({ name: data.name });
        } else {
          const { data } = dataLogin;
          setProfile(data);
        }
      } catch (error) {
        console.log(error);
        return error?.msg || "CONTACTESE CON EL ADMINISTRADOR";
      }
      const user = {
        email,
        id: data.uid,
      };
      setUser(user);
      setIsLogged(true);
    } catch (error) {
      console.log(error);
      return error?.msg || "CONTACTESE CON EL ADMINISTRADOR";
    }
  };

  const startRegister = async ({ name, email, password }) => {
    try {
      const { data } = await stickerApi.post(`/auth/register`, {
        name,
        email,
        password,
      });

      if (!data.ok) {
        return data.msg;
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      const user = {
        email,
        id: data.uid,
      };
      setUser(user);
      setProfile({ name });
      setIsLogged(true);
      return false;
    } catch (error) {
      console.log(error);
      return error?.msg || "CONTACTESE CON EL ADMINISTRADOR";
    }
  };

  const startSetProfile = async ({ logo, instagram, whatsapp, name }) => {
    try {
      const { data } = await stickerApi.post(`/profile`, {
        name,
        logo,
        instagram,
        whatsapp,
      });

      if (!data.ok) {
        return data.msg;
      }
      setProfile(data.data);
      return false;
    } catch (error) {
      console.log(error);
      return error?.msg || "CONTACTESE CON EL ADMINISTRADOR";
    }
  };

  const updateProfile = async (sticker) => {
    const { logo, instagram, whatsapp, name } = sticker;
    try {
      const { data } = await stickerApi.put(`/profile`, {
        name,
        logo,
        instagram,
        whatsapp,
      });

      if (!data.ok) {
        return data.msg;
      }
      setProfile(data.data);

      Swal.fire({
        icon: "success",
        title: "¡Perfil actualizado!",
        showConfirmButton: false,
        timer: 1500,
        returnFocus: false,
      });
      return false;
    } catch (error) {
      console.log(error);
      return error?.msg || "CONTACTESE CON EL ADMINISTRADOR";
    }
  };

  return {
    startLogin,
    startRegister,
    startSetProfile,
    updateProfile,
  };
};
