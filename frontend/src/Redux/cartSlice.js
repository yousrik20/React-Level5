import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [],
  selectedProductsID:[]
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
      state.selectedProductsID.push(action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const increasedProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increasedProduct.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const decreasedProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      decreasedProduct.quantity -= 1;
      if (decreasedProduct.quantity === 0) {
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.selectedProducts = newArr;
        const newArrID = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });
        state.selectedProductsID = newArrID;
        
      }
    },
    deleteProduct: (state, action) => {
      const newArr = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.selectedProducts = newArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
