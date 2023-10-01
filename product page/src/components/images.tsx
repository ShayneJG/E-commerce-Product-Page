import { useState } from "react";
import IconNext from "/images/icon-next.svg";
import ArrowButton from "./ArrowButton";

interface ImagesProps {
  images: string[];
  isMobile: boolean;
  thumbnails: string[];
  lightbox?: boolean;
  setLightbox?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Images({
  images,
  isMobile,
  thumbnails,
  lightbox,
  setLightbox,
}: ImagesProps) {
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

  let imageSize = lightbox ? "550px" : "445px";
  let display: JSX.Element = (
    <div
      id="image-container"
      className={`md:max-w-[${imageSize}] md:max-h-[${imageSize}]`}
    >
      <div
        id="image"
        className={`flex flex-row items-center relative md:w-[${imageSize}]`}
      >
        {(isMobile || lightbox) && (
          <ArrowButton
            src={IconNext}
            onClick={onMinus}
            direction="left"
            lightbox={lightbox}
          />
        )}

        <img
          onClick={() => {
            if (!isMobile && setLightbox) {
              setLightbox(true);
            }
          }}
          className={`aspect-[5/4] md:w-[${imageSize}] md:h-[${imageSize}] hover:cursor-pointer md:aspect-square md:rounded-lg w-full`}
          src={images[imageIndex]}
        />

        {(isMobile || lightbox) && (
          <ArrowButton
            src={IconNext}
            onClick={onPlus}
            direction="right"
            lightbox={lightbox}
          />
        )}
      </div>
      {!isMobile && ImageRow}
    </div>
  );

  return display;
}
