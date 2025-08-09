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
      quantity: 1,
    },
  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("done");
      //state.selectedProducts.push(action.payload)
      //state.value += action.payload
      const productWithQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productWithQuantity);
    },
    increaseQuantity: (state, action) => {
      const increasedProduct= state.selectedProducts.find((item)=>{
        return item.id;
      });
      increasedProduct.quantity+=1;
    },
    decreaseQuantity: (state, action) => {
      console.log("decrease");
    },
    deleteProduct: (state, action) => {
      console.log("deleted ");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
