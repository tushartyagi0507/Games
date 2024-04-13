import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        addItem: (state,action)=>{
      return ( state.items.push(action.payload))
        },
       removeItem: (state,action)=>{
        return (state.items.filter( (it)=> it.id != action.payload.id ))// so it will filter out the item from the items which you wish to delete 
       },
       clearCart: (state)=>{
       return (state.items.lenght = 0)
       }
    }
})