import { useState } from "react";
import IconCart from "/images/icon-cart.svg";
import IconAvatar from "/images/image-avatar.png";
import IconMenu from "/images/icon-menu.svg";
import Logo from "/images/logo.svg";
export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  //TODO: render the cart and the menu here.
  return (
    <header className="flex justify-between m-4">
      <button id="menu-icon">
        <img src={IconMenu} className="shadow-sm" />
      </button>

      <img src={Logo} className="shadow-sm" />

      <button id="shopping-cart-icon">
        <img src={IconCart} />
      </button>
      <div id="avatar">
        <img src={IconAvatar} className="w-6 h-6" />
      </div>
    </header>
  );
}
