import CloseIcon from "/images/icon-close.svg";

interface MenuProps {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Links {
  name: string;
  URL: string;
}

export const navLinks: Links[] = [
  { name: "Collections", URL: "" },
  { name: "Men", URL: "" },
  { name: "Women", URL: "" },
  { name: "About", URL: "" },
  { name: "Contact", URL: "" },
];

export default function Menu({ setMenu }: MenuProps) {
  return (
    <nav className="absolute top-0 w-full h-screen z-50 flex " id="menu">
      <div id="nav-left-space" className="bg-white p-5 w-2/3 h-screen">
        <button
          aria-label="close menu"
          className="pb-7"
          onClick={() => {
            setMenu(false);
          }}
        >
          <img alt="close menu" src={CloseIcon} />
        </button>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li className="py-3 font-bold" key={`${link.name} ${index}`}>
                <a href={link.URL}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </div>{" "}
      <div id="nav-right-space" className="h-screen w-1/3 bg-black/75"></div>
    </nav>
  );
}
