import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { apiCompleter } from "../../api/apiCompleter"

export const fetchCity = createAsyncThunk("weater/fetchCity", async (id) => {
    const { URL, name } = apiCompleter(id || 16)
    const result = await axios.get(URL)
    const data = { ...result.data, name }
    return data
})
export const turkiyeSlice = createSlice({
    name: "turkiyeCity",
    initialState: {
        city: [],
        status: "idle",
        error: ""
    },
    reducers: {},
    extraReducers: {
        [fetchCity.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchCity.fulfilled]: (state, action) => {
            state.city = action.payload
            state.status = "succeed"

        },
        [fetchCity.rejected]: (state, action) => {
            state.status = "error"
            state.error = action.payload
        }
    }

})


export default turkiyeSlice.reducer