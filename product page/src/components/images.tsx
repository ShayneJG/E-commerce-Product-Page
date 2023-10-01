import { useState } from "react";
import IconNext from "/images/icon-next.svg";
import ArrowButton from "./ArrowButton";
import MathIcons from "./mathIcons";
interface ImagesProps {
  images: string[];
  isMobile: boolean;
  thumbnails: string[];
}

export default function Images({ images, isMobile, thumbnails }: ImagesProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

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

  function onThumbnailClick(key: string) {
    setImageIndex(
      thumbnails.findIndex((element) => {
        return element === key;
      })
    );
  }

  //render row of images
  const ImageRow: JSX.Element = (
    <div id="image-row" className="flex flex-row justify-between pt-10">
      {thumbnails.map((thumbnail, index) => {
        let conditionalStyle: string = "";
        let border: string = "";
        if (index === imageIndex) {
          conditionalStyle = "opacity-25 bg-white";
          border =
            "border-2 bg-customOrange border-separate rounded-lg border-solid border-customOrange";
        }
        return (
          <div key={`border-${thumbnail}`} className={border}>
            <div className={`max-w-[88px] bg-white   rounded-lg`}>
              <img
                onClick={() => {
                  onThumbnailClick(thumbnail);
                }}
                key={thumbnail}
                src={thumbnail}
                className={`max-w-[88px] max-h-[88px] hover:cursor-pointer hover:opacity-25 ${conditionalStyle} aspect-auto rounded-lg`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  let display: JSX.Element = (
    <div id="image-container" className="md:max-w-[445px]">
      <div
        id="image"
        className="flex flex-row items-center relative md:w-[455px]"
      >
        {isMobile && (
          <ArrowButton
            src={IconNext}
            onClick={onMinus}
            direction="left"
            lightbox={lightbox}
          />
        )}

        <img
          onClick={() => {
            if (!isMobile) {
              setLightbox(true);
            }
          }}
          className="aspect-[5/4] md:w-[445px] md:h-[445px] md:aspect-square md:rounded-lg w-full"
          src={images[imageIndex]}
        />

        {isMobile && (
          <ArrowButton src={IconNext} onClick={onPlus} direction="right" />
        )}
      </div>
      {!isMobile && ImageRow}
    </div>
  );

  if (lightbox) {
    return (
      <div className="absolute top-0 left-0 w-screen h-screen bg-black/75 flex flex-col justify-center items-center">
        <div>
          <div className="flex w-full justify-end py-3">
            <button
              onClick={() => {
                setLightbox(false);
              }}
            >
              {<MathIcons type="close" fill="#D8D8D8" hover="#FF7E1B" />}
            </button>
          </div>
          {display}
        </div>
      </div>
    );
  }

  return display;
}
