import { useState } from "react";
import IconNext from "/images/icon-next.svg";
interface ImagesProps {
  images: string[];
}

export default function Images({ images }: ImagesProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function onMinus() {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else
      setImageIndex((prevState) => {
        return prevState - 1;
      });
  }

  function onPlus() {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else
      setImageIndex(() => {
        return imageIndex + 1;
      });
  }

  //render row of images
  const ImageRow: JSX.Element = (
    <div id="image-row" className="flex flex-row">
      {images.map((image) => {
        return <img key={image} src={image} />;
      })}
    </div>
  );

  return (
    <div className="flex flex-row items-center w-full relative">
      <button
        className="flex items-center justify-center absolute left-5 bg-white w-10 h-10 rounded-full rotate-180 shrink-0"
        onClick={onMinus}
      >
        <img src={IconNext} />
      </button>

      <img className="aspect-[5/4] 	 w-full" src={images[imageIndex]} />

      <button
        className="flex items-center justify-center absolute right-5 bg-white w-10 h-10 rounded-full shrink-0"
        onClick={onPlus}
      >
        <img src={IconNext} />
      </button>

      {/* {TODO: conditionally render ImageRow} */}
    </div>
  );
}
