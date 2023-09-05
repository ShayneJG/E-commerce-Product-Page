import { useState } from "react";

export default function Images(images: string[]) {
  const [imageIndex, setImageIndex] = useState(0);

  //render row of images
  const ImageRow: JSX.Element = (
    <div id="image-row" className="flex flex-row">
      {images.map((image) => {
        return <img key={image} src={image} />;
      })}
    </div>
  );

  return <></>;
}
