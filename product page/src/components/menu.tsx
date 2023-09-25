import CloseIcon from "/images/icon-close.svg";

interface MenuProps {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Links {
  name: string;
  URL: string;
}

export default function Menu({ setMenu }: MenuProps) {
  const navLinks: Links[] = [
    { name: "Collections", URL: "" },
    { name: "Men", URL: "" },
    { name: "Women", URL: "" },
    { name: "About", URL: "" },
    { name: "Contact", URL: "" },
  ];

  return (
    <nav className="absolute top-0 w-2/3 h-screen bg-white z-50 p-5" id="menu">
      <button
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
    </nav>
  );
}
