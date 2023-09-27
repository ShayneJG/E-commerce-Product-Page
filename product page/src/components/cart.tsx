import { useBasket } from "../context/basketContext";
import IconDelete from "/images/icon-delete.svg";
export default function Cart() {
  const { state, dispatch } = useBasket();

  function onDeleteHandler(name: string) {
    dispatch({ type: "REMOVE_ITEM", payload: name });
  }

  //JSX conditional elements for whether the cart is empty or full.
  const cartEmpty = (
    <div className="flex flex-1 justify-center items-center">
      <p className="font-bold text-base">Your cart is empty.</p>
    </div>
  );
  const cartFull = state.map((item) => {
    const total: number = item.price * item.quantity;

    return (
      <div
        className="w-full flex justify-between"
        id={item.name}
        key={item.name}
      >
        <img className="h-12 w-12 rounded-md" src={item.image} />
        <div className=" text-base text-customGrey">
          <p className="">{item.name}</p>
          <div className="flex">
            <p>
              ${item.price.toFixed(2)} x {item.quantity}
            </p>
            <p className="font-bold text-customBlack pl-2">
              ${total.toFixed(2)}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            onDeleteHandler(item.name);
          }}
        >
          <img src={IconDelete} />
        </button>
      </div>
    );
  });

  let isCartEmpty: boolean = state.length == 0;

  return (
    <div className="relative w-full rounded-md bg-white z-50 h-[256px]">
      <div className="flex flex-col w-full h-full ">
        <div className="border-b p-5 w-full">
          <h1 className="font-bold">Cart</h1>
        </div>
        <div className="p-5 overflow-auto">
          {isCartEmpty ? cartEmpty : cartFull}
        </div>
        {cartFull && (
          <div className="w-full">
            <button className="rounded-lg w-[90%] text-center h-[56px] bg-customOrange text-white font-bold m-5">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
