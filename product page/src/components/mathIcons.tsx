import { useState } from "react";

interface MathIconsProps {
  fill?: string;
  type: "minus" | "plus" | "close";
  hover?: string;
}

export default function MathIcons({
  fill = "#FF7E1B",
  type,
  hover,
}: MathIconsProps) {
  const [isHover, setIsHover] = useState(false);

  switch (type) {
    case "minus":
      return (
        <svg
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          width="12"
          height="4"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
              id="a"
            />
          </defs>
          <use
            fill={isHover && hover ? hover : fill}
            fillRule="nonzero"
            xlinkHref="#a"
          />
        </svg>
      );
    case "plus":
      return (
        <svg
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
              id="b"
            />
          </defs>
          <use
            fill={isHover && hover ? hover : fill}
            fillRule="nonzero"
            xlinkHref="#b"
          />
        </svg>
      );
    case "close":
      return (
        <svg
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill={isHover && hover ? hover : fill}
            fillRule="evenodd"
          />
        </svg>
      );
  }
}
