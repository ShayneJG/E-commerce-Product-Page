import { useBasket } from "../context/basketContext";

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
      <div id={item.name} key={item.name}>
        <img src={item.image} />
        <div>
          <p>{item.name}</p>
          <div>
            <p>
              {item.price} x {item.quantity}
            </p>
            <p className="bold">${total}</p>
          </div>
        </div>
        <button
          onClick={() => {
            onDeleteHandler(item.name);
          }}
        >
          delete
        </button>
      </div>
    );
  });

  let isCartEmpty: boolean = state.length == 0;

  return (
    <div className="relative w-full rounded-md bg-white z-50 h-[360px]">
      <div className="flex flex-col w-full h-full">
        <div className="border-b p-5 w-full">
          <h1 className="">Cart</h1>
        </div>
        {isCartEmpty ? cartEmpty : cartFull}
      </div>
    </div>
  );
}
