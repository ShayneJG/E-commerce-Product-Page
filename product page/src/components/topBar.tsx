import { Dispatch, useState } from "react";
import IconCart from "/images/icon-cart.svg";
import IconAvatar from "/images/image-avatar.png";
import IconMenu from "/images/icon-menu.svg";
import Logo from "/images/logo.svg";
import Cart from "./cart";
import Menu from "./menu";
import { useBasket } from "../context/basketContext";
import { navLinks } from "./menu";
export default function TopBar({ isMobile }: { isMobile: boolean }) {
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
    <div className="w-[19px] h-[13px] absolute -top-[4px] -right-[5px] bg-customOrange rounded-lg text-center text-white z-30 text-[10px] font-bold">
      {count}
    </div>
  );

  //conditional elements
  const mobileMenuButton: JSX.Element = (
    <button
      id="menu-icon"
      onClick={() => {
        openHandler(setMenuOpen);
      }}
    >
      <img src={IconMenu} className="h-4 pr-5  m-auto drop-shadow-3xl" />
    </button>
  );

  const desktopMenu: JSX.Element = (
    <nav id="desktop-menu" className="w-full">
      <ul className="flex flex-shrink justify-between text-[15px] text-customGrey leading-[26px] h-full max-w-[397px]">
        {navLinks.map((link) => {
          return (
            <li
              key={link.name}
              className="h-full pb-[76px] hover:border-b-4 hover:border-customOrange hover:text-customBlack"
            >
              <a href={link.URL}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <>
      {/* "relative mx-4 my-5 p-2 md:pb-14 md:mb-20 md:border-b md:mx-0 md:py-0 md:my-10" */}
      <header className="relative mx-4 my-5 p-2 md:py-14 md:mb-20 md:border-b md:mx-0 md:my-0">
        <div id="header-container" className="flex justify-between h-6">
          <div
            id="header-left"
            className="flex w-2/3 h-full md:gap-5 lg:gap-[7%] md:w-[591px]"
          >
            {isMobile && mobileMenuButton}

            <img src={Logo} className="drop-shadow-3xl h-full" />
            {!isMobile && desktopMenu}
          </div>
          <div
            id="header-right"
            className="flex w-1/3 items-center gap-5 md:gap-10 place-content-end"
          >
            <div className="relative flex justify-center">
              <div
                onClick={() => {
                  openHandler(setCartOpen);
                }}
              >
                {count ? cartCount : null}
                <button id="shopping-cart-icon">
                  <img className="drop-shadow-3xl" src={IconCart} />
                </button>
              </div>
              {!isMobile && cartOpen && <Cart />}
            </div>

            <div id="avatar">
              <img
                src={IconAvatar}
                className="w-6 h-6 drop-shadow-3xl md:h-[50px] md:w-[50px] hover:border-customOrange hover:border-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>
      {isMobile && cartOpen && <Cart />}
      {menuOpen && <Menu setMenu={setMenuOpen} />}
    </>
  );
}
