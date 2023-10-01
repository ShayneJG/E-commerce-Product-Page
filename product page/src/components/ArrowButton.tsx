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
  lightbox = false,
}: ArrowButtonProps) {
  let conditionalStyle: string = lightbox ? "right-0" : "right-5";

  if (direction === "left") {
    conditionalStyle = lightbox ? "left-0 rotate-180" : "left-5 rotate-180";
  }
  return (
    <button
      className={`flex items-center justify-center absolute bg-white w-10 h-10 rounded-full ${conditionalStyle} shrink-0`}
      onClick={onClick}
    >
      <img src={src} />
    </button>
  );
}
