import { Dispatch, useState } from "react";
import IconCart from "/images/icon-cart.svg";
import IconAvatar from "/images/image-avatar.png";
import IconMenu from "/images/icon-menu.svg";
import Logo from "/images/logo.svg";
import Cart from "./cart";
import Menu from "./menu";
import { useBasket } from "../context/basketContext";
export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { state } = useBasket();

  const count: number = state.reduce((acc, curr) => {
    return (acc = acc + curr.quantity);
  }, 0);

  const openHandler = (open: Dispatch<React.SetStateAction<boolean>>) => {
    open((isOpen) => {
      return !isOpen;
    });
  };

  const cartCount: JSX.Element = (
    <div className="w-[19px] h-[13px] absolute -top-[4px] right-[14px] bg-customOrange rounded-lg text-center text-white z-30 text-[10px] font-bold">
      {count}
    </div>
  );

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
              <img
                src={IconMenu}
                className="h-4 pr-5  m-auto drop-shadow-3xl"
              />
            </button>

            <img src={Logo} className="drop-shadow-3xl h-full" />
          </div>
          <div id="header-right" className="flex w-1/3 place-content-end">
            <div className="relative flex justify-center">
              {count ? cartCount : null}
              <button
                className="px-5"
                id="shopping-cart-icon"
                onClick={() => {
                  openHandler(setCartOpen);
                }}
              >
                <img className="drop-shadow-3xl" src={IconCart} />
              </button>
            </div>
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
