import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define the item type
export interface BasketItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

// Define action types
type BasketAction =
  | { type: "ADD_ITEM"; payload: BasketItem }
  | { type: "REMOVE_ITEM"; payload: string };

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
      const existingItemIndex = state.findIndex(
        (item) => item.name === action.payload.name
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in state, update its quantity
        const updatedState = state.slice(); // Create a shallow copy of the state array
        updatedState[existingItemIndex] = {
          ...updatedState[existingItemIndex],
          quantity:
            updatedState[existingItemIndex].quantity + action.payload.quantity,
        };

        return updatedState; // Return the updated state
      } else {
        // If the item is not in state, add it
        return [...state, action.payload];
      }
    case "REMOVE_ITEM":
      return state.filter((item) => item.name !== action.payload);

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
