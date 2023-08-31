import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define the item type
interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Define action types
type BasketAction =
  | { type: "ADD_ITEM"; payload: BasketItem }
  | { type: "REMOVE_ITEM"; payload: number };

// Create the initial state
const initialState: BasketItem[] = [];

// Create the context
const BasketContext = createContext<
  | {
      state: BasketItem[];
      dispatch: React.Dispatch<BasketAction>;
    }
  | undefined
>(undefined);

// Create the reducer function
const basketReducer = (
  state: BasketItem[],
  action: BasketAction
): BasketItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

// Create a context provider component
export const BasketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(basketReducer, initialState);

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

// Create a custom hook to use the context
export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
