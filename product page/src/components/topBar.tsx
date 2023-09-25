import { Dispatch, useState } from "react";
import IconCart from "/images/icon-cart.svg";
import IconAvatar from "/images/image-avatar.png";
import IconMenu from "/images/icon-menu.svg";
import Logo from "/images/logo.svg";
import Cart from "./cart";
import Menu from "./menu";
export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const openHandler = (open: Dispatch<React.SetStateAction<boolean>>) => {
    open((isOpen) => {
      return !isOpen;
    });
  };

  //TODO: render the cart and the menu here.
  return (
    <>
      <header className="mx-4 my-5 p-2">
        <div id="header-container" className="flex justify-between h-6">
          <div id="header-left" className="flex w-2/3 h-full">
            <button
              id="menu-icon"
              onClick={() => {
                openHandler(setMenuOpen);
              }}
            >
              <img src={IconMenu} className="h-4 pr-5 m-auto drop-shadow-3xl" />
            </button>

            <img src={Logo} className="drop-shadow-3xl h-full" />
          </div>
          <div id="header-right" className="flex w-1/3 place-content-end">
            <button
              className="px-5"
              id="shopping-cart-icon"
              onClick={() => {
                openHandler(setCartOpen);
              }}
            >
              <img className="drop-shadow-3xl" src={IconCart} />
            </button>
            <div id="avatar">
              <img src={IconAvatar} className="w-6 h-6 drop-shadow-3xl" />
            </div>
          </div>
        </div>
      </header>
      <div className="absolute w-full p-2">{cartOpen && <Cart />}</div>
      <div>{menuOpen && <Menu setMenu={setMenuOpen} />}</div>
    </>
  );
}
