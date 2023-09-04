interface AddToCartProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

//ADD: react context
export default function AddToCart({ amount, setAmount }: AddToCartProps) {
  function onMinus() {
    if (amount === 1) {
      //throw error
    } else {
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

  function applyToCart() {
    //TODO: add to cart
  }

  return (
    <>
      <div id="plus/minus" className="">
        <button onClick={onMinus}>-</button>
        {amount}
        <button onClick={onPlus}>+</button>
      </div>
      <button onClick={applyToCart}>Add to cart</button>
    </>
  );
}
