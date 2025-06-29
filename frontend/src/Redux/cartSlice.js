import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [
    {
      id: 1,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 100,
      imageLink:
        "https://res.cloudinary.com/dbogfa6sk/image/upload/v1747679089/1_ws7kat.jpg",
    },
    {
      id: 4,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 400,
      imageLink:
        "https://res.cloudinary.com/dbogfa6sk/image/upload/v1747679089/4_qg9zm9.jpg",
    },
  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      //state.value += action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
