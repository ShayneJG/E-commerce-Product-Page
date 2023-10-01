import { useState } from "react";
import IconNext from "/images/icon-next.svg";
import ArrowButton from "./ArrowButton";
interface ImagesProps {
  images: string[];
  isMobile: boolean;
  thumbnails: string[];
}

export default function Images({ images, isMobile, thumbnails }: ImagesProps) {
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
          conditionalStyle = "opacity-40";
          border = "border-2 rounded-lg border-solid border-customOrange";
        }
        return (
          <div key={`border-${thumbnail}`} className={border}>
            <img
              onClick={() => {
                onThumbnailClick(thumbnail);
              }}
              key={thumbnail}
              src={thumbnail}
              className={`max-w-[88px] hover:opacity-40 aspect-auto ${conditionalStyle} rounded-lg`}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <div id="image-container" className="md:max-w-[445px]">
      <div
        id="image"
        className="flex flex-row items-center relative md:w-[455px]"
      >
        {isMobile && (
          <ArrowButton src={IconNext} onClick={onMinus} direction="left" />
        )}

        <img
          onClick={() => {
            if (!isMobile) {
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
}
