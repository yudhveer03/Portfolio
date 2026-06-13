import { createSlice } from '@reduxjs/toolkit'

const initialState={

    links:["Home","About","Resume","Skills"]

}
export const navSlice = createSlice({

    name:"navbar",
    initialState,
    reducers:{


    }
})

export default navSlice.reducer;