import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

const getInitialCartState = (): Array<IProduct> => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState: Array<IProduct> = getInitialCartState();

const saveCartToLocalStorage = (cart: Array<IProduct>) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      let newState;
      if (productIndex === -1) {
        newState = [...state, action.payload];
      } else {
        newState = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      saveCartToLocalStorage(newState);
      return newState;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const newState = state.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
