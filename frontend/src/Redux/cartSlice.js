import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [
   
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
        return item.id=== action.payload.id;
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
