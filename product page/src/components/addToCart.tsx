import { BasketItem, useBasket } from "../context/basketContext";
import { ItemInterface } from "./item";

interface AddToCartProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  item: ItemInterface;
}

//ADD: react context
export default function AddToCart({ amount, setAmount, item }: AddToCartProps) {
  const { dispatch } = useBasket();
  function onMinus() {
    if (amount !== 1) {
      setAmount(() => {
        return amount - 1;
      });
    }
  }

  function onPlus() {
    setAmount(() => {
      return amount + 1;
    });
  }

  function applyToCart(item: ItemInterface) {
    const payload: BasketItem = {
      image: item.thumbnails[0],
      name: item.title,
      price: item.price,
      quantity: amount,
    };
    dispatch({ type: "ADD_ITEM", payload });
    setAmount(1);
  }

  return (
    <>
      <div id="plus/minus" className="">
        <button onClick={onMinus}>-</button>
        {amount}
        <button onClick={onPlus}>+</button>
      </div>
      <button onClick={() => applyToCart(item)}>Add to cart</button>
    </>
  );
}
