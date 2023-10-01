import { useState } from "react";

interface ArrowButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

  direction: "left" | "right";
  lightbox?: boolean;
}

export default function ArrowButton({
  onClick,
  direction,
  lightbox,
}: ArrowButtonProps) {
  function buttonStyle() {
    let mobileLeft: string = "left-5 rotate-180";
    let mobileRight: string = "right-5";
    let lightboxLeft: string = "-left-[20px] rotate-180";
    let lightboxRight: string = "-right-[20px]";

    if (lightbox) {
      if (direction === "left") {
        return lightboxLeft;
      } else {
        return lightboxRight;
      }
    }

    if (direction === "left") {
      return mobileLeft;
    } else {
      return mobileRight;
    }
  }

  let style = buttonStyle();

  const [stroke, setStroke] = useState("#1D2026");
  return (
    <button
      onMouseEnter={() => {
        setStroke("#FF7E1B");
      }}
      onMouseLeave={() => {
        setStroke("#1D2026");
      }}
      className={`flex items-center justify-center absolute bg-white w-10 h-10 rounded-full ${style} shrink-0`}
      onClick={onClick}
    >
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2 1 8 8-8 8"
          stroke={stroke}
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}
