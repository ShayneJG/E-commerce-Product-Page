import { useState } from "react";
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
    <div
      id="image-row"
      className="flex flex-row justify-between pt-10 max-w-[445px] m-auto"
    >
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
                alt="inventory thumbnail"
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
  let imageDisplaySize = "md:w-[445px] md:h-[445px] ";
  if (lightbox === true) {
    console.log(lightbox);
    imageDisplaySize = "md:w-[550px] md:h-[550px] ";
  }
  let display: JSX.Element = (
    <div id="image-container" className={`md:max-w-[550px] md:max-h-[550px]`}>
      <div
        id="image"
        className={`flex flex-row items-center relative ${imageDisplaySize}`}
      >
        {(isMobile || lightbox) && (
          <ArrowButton onClick={onMinus} direction="left" lightbox={lightbox} />
        )}

        <img
          alt="inventory photo"
          onClick={() => {
            if (!isMobile && setLightbox) {
              setLightbox(true);
            }
          }}
          className={`aspect-[5/4] ${imageDisplaySize} ${imageDisplaySize} hover:cursor-pointer md:aspect-square md:rounded-lg w-full`}
          src={images[imageIndex]}
        />

        {(isMobile || lightbox) && (
          <ArrowButton onClick={onPlus} direction="right" lightbox={lightbox} />
        )}
      </div>
      {!isMobile && ImageRow}
    </div>
  );

  return display;
}
