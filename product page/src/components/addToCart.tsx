import { BasketItem, useBasket } from "../context/basketContext";
import { ItemInterface } from "./item";
import IconMinus from "/images/icon-minus.svg";
import IconPlus from "/images/icon-plus.svg";
import CartIcon from "./cartIcon";

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
    const total: number = item.sale ? item.price * item.sale : item.price;
    const payload: BasketItem = {
      image: item.thumbnails[0],
      name: item.title,
      price: total,
      quantity: amount,
    };
    dispatch({ type: "ADD_ITEM", payload });
    setAmount(1);
  }

  return (
    <div className="py-5 flex flex-col gap-5 md:flex-row">
      <div
        id="plus/minus"
        className="w-full flex justify-between bg-[#f6f8fd] h-[56px] items-center p-5 rounded-lg md:w-[35%]"
      >
        <button onClick={onMinus} className="text-customOrange">
          <img src={IconMinus} />
        </button>
        <span className="font-bold text-base">{amount}</span>
        <button onClick={onPlus}>
          <img src={IconPlus} />
        </button>
      </div>

      <button
        className="flex items-center justify-center w-full text-center h-[56px] bg-customOrange text-white text-base font-bold rounded-lg shadow-orange"
        onClick={() => applyToCart(item)}
      >
        <div className="pr-5">
          <CartIcon fill="#ffffff" />
        </div>
        Add to cart
      </button>
    </div>
  );
}
