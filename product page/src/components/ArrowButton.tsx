interface ArrowButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  src: string;
  direction: "left" | "right";
  lightbox?: boolean;
}

export default function ArrowButton({
  onClick,
  src,
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

  return (
    <button
      className={`flex items-center justify-center absolute bg-white w-10 h-10 rounded-full ${style} shrink-0`}
      onClick={onClick}
    >
      <img src={src} />
    </button>
  );
}
