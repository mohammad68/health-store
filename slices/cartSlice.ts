import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICartItem from "../types/ICartItem";
import IProduct from "../types/IProduct";

export interface ICartState {
    cartItems: ICartItem[]
}

const initCartState : ICartState = {cartItems:[]}

const cartSlice = createSlice({
    name:"cart",
    initialState: initCartState,
    reducers:{
        addToCart: (state: ICartState, action: PayloadAction<IProduct>) => {
                const product = action.payload;
                const index = state.cartItems.findIndex(cartItem => cartItem.product.id === product.id);
                if(index === -1){
                    const newProduct: ICartItem = {
                        product: product,
                        quantity: 1
                    } 
                    state.cartItems.push(newProduct)
                }else{
                    state.cartItems[index].quantity += 1;
                }   
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer