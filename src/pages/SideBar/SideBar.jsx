import React, { useContext } from "react";
import { StickerContext } from "../../context";
import { LargeScreen } from "./components/LargeScreen";
import { SmallScreen } from "./components/SmallScreen";

export const SideBar = () => {
  const { user, setIsLogged, setUser } = useContext(StickerContext);
  const isLoggetOut = () => {
    setIsLogged(false);
    setUser({});
  };
  return (
    <>
    <SmallScreen user={user} isLoggetOut={isLoggetOut}/>
    <LargeScreen user={user} isLoggetOut={isLoggetOut}/>
    </>
  );
};
