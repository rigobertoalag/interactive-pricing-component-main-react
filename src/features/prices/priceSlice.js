import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    price: 16,
    discount: false
}

export const priceSlice = createSlice({
    name: 'price',
    initialState,

    reducers:{
        setPrice: (state, action) =>{
            state.price = action.payload
        },
        setDiscount: (state, action) =>{
            state.discount = action.payload
        }
    }
})

export const { setPrice, setDiscount } = priceSlice.actions

export default priceSlice.reducer