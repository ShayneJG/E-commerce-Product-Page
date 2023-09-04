import { useBasket } from "../context/basketContext";

export default function Cart() {
  const { state, dispatch } = useBasket();

  function onDeleteHandler(id: number) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  //JSX conditional elements for whether the cart is empty or full.
  const cartEmpty = <p>Your cart is empty.</p>;
  const cartFull = state.map((item) => {
    const total: number = item.price * item.quantity;

    return (
      <div id={item.id.toString()}>
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
            onDeleteHandler(item.id);
          }}
        >
          delete
        </button>
      </div>
    );
  });

  let isCartEmpty: boolean = state.length == 0;

  return <div>{isCartEmpty ? cartEmpty : cartFull}</div>;
}
