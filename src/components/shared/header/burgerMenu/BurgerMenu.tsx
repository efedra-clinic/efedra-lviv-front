"use client";
import { Dispatch, SetStateAction } from "react";
import BurgerMenuButton from "./BurgerMenuButton";
import BurgerMenuContent from "./BurgerMenuContent";
import Backdrop from "../../backdrop/Backdrop";

interface BurgerMenuProps {
  isOpenBurgerMenu: boolean;
  setIsOpenBurgerMenu: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({
  isOpenBurgerMenu,
  setIsOpenBurgerMenu,
}: BurgerMenuProps) {
  const toggleHeaderMenuOpen = () => setIsOpenBurgerMenu(!isOpenBurgerMenu);
  return (
    <>
      <BurgerMenuButton
        isHeaderMenuOpened={isOpenBurgerMenu}
        toggleHeaderMenuOpen={toggleHeaderMenuOpen}
      />
      <BurgerMenuContent
        isOpen={isOpenBurgerMenu}
        onClose={() => setIsOpenBurgerMenu(false)}
      />
      <Backdrop
        isVisible={isOpenBurgerMenu}
        onClick={() => setIsOpenBurgerMenu(false)}
        className="lg:hidden"
      />
    </>
  );
}
