import { useState } from "react";
import AddToCart from "./addToCart";
import Images from "./images";
import MathIcons from "./mathIcons";

export interface ItemInterface {
  thumbnails: string[];
  images: string[];
  company: string;
  title: string;
  description: string;
  price: number;
  sale?: number;
}

export default function Item({
  item,
  isMobile,
}: {
  item: ItemInterface;
  isMobile: boolean;
}) {
  const [amount, setAmount] = useState(1);
  const [lightbox, setLightbox] = useState(false);

  const discountStrikethrough: JSX.Element = (
    <span className="line-through	text-[#b6bcc8]">{`$${item.price.toFixed(
      2
    )}`}</span>
  );

  //total is the sale price OR the normal price if there is no sale
  const total: number = item.sale ? item.price * item.sale : item.price;
  return (
    <div
      id="item"
      className="md:mx-[5%] gap-10 md:flex md:flex-row md:justify-between lg:-w-[1015px]"
    >
      <Images
        images={item.images}
        thumbnails={item.thumbnails}
        isMobile={isMobile}
        setLightbox={setLightbox}
      />
      <div
        id="item-description"
        className="p-5 flex flex-col mx-auto max-w-[445px] max-h-[426px] gap-5 md:p-0 md:mt-16 md:mx-0"
      >
        <p className=" text-customOrange font-bold text-xs tracking-[1.85px] md:text-[13px]">
          {item.company.toLocaleUpperCase()}
        </p>
        <h1 className="font-bold text-[28px]  leading-[32px] text-customBlack md:text-[44px] md:leading-[44px]">
          {item.title}
        </h1>
        <p className="text-[15px] text-customGrey leading-[25px] md:text-base md:leading-[26px]">
          {item.description}
        </p>
        <div id="price-row" className="flex justify-between items-center">
          <span className="font-bold text-[28px] text-customBlack">
            ${total.toFixed(2)}
          </span>
          {item.sale && (
            <div id="sale-details" className="flex justify-between w-full ml-5">
              <span className="bg-[#ffeee2] w-[51px] h-[27px] text-center text-[16px] text-customOrange font-bold rounded-md">
                ${item.sale * 100}%
              </span>
              {isMobile && discountStrikethrough}
            </div>
          )}
        </div>
        {item.sale && !isMobile && discountStrikethrough}
        <AddToCart amount={amount} setAmount={setAmount} item={item} />
        {lightbox && (
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
              <Images
                images={item.images}
                thumbnails={item.thumbnails}
                isMobile={isMobile}
                lightbox={lightbox}
                setLightbox={setLightbox}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
