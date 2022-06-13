import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const exists = state.products.find(
        (c) =>
          c._id === action.payload._id &&
          c.flavor === action.payload.flavor &&
          c.boxcount === action.payload.boxcount
      );

      if (exists) {
        const newq = exists.quantity + action.payload.quantity;
        state.total += action.payload.quantity * action.payload.price;
        state.products = state.products.map((c) =>
          c._id === action.payload._id &&
          c.flavor === action.payload.flavor &&
          c.boxcount === action.payload.boxcount
            ? { ...exists, quantity: newq }
            : c
        );
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    resetCart: (state) => {
      state.quantity = 0;
      state.total = 0;
      state.products = [];
    },
    editQuantity: (state, action) => {
      const exists = state.products.find(
        (c) =>
          c._id === action.payload._id &&
          c.flavor === action.payload.flavor &&
          c.boxcount === action.payload.boxcount
      );
      if (exists) {
        state.total +=
          action.payload.price * (action.payload.quantity - exists.quantity);
      }
      state.products = state.products.map((c) =>
        c._id === action.payload._id &&
        c.flavor === action.payload.flavor &&
        c.boxcount === action.payload.boxcount
          ? { ...c, quantity: action.payload.quantity }
          : c
      );
    },
    removeProduct: (state, action) => {
      const exists = state.products.find(
        (c) =>
          c._id === action.payload._id &&
          c.flavor === action.payload.flavor &&
          c.boxcount === action.payload.boxcount
      );
      state.products = state.products.filter((b) => exists !== b);
      state.quantity -= 1;
      state.total +=
        action.payload.price * (action.payload.quantity - exists.quantity);
      console.log(state.products);
    },
  },
});

export const { addProduct, resetCart, editQuantity, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
