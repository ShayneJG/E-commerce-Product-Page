import { useState } from "react";
import AddToCart from "./addToCart";
import Images from "./images";

export interface ItemInterface {
  thumbnails: string[];
  images: string[];
  company: string;
  title: string;
  description: string;
  price: number;
  sale?: number;
}

export default function Item({ item }: { item: ItemInterface }) {
  const [amount, setAmount] = useState(1);
  return (
    <div>
      <div id="item-description">
        <Images images={item.images} />
        <p>{item.company}</p>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div id="price-row">
          <p>
            ${item.price} {item.sale && `${item.sale}%`}
          </p>
          <div></div>
        </div>
      </div>
      <AddToCart amount={amount} setAmount={setAmount} item={item} />
    </div>
  );
}
