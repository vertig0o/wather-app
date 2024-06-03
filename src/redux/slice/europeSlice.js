import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { singleCity } from "../../api/apiCompleter"
export const fetchEurope = createAsyncThunk("weater/getEuropeCity", async () => {

    const result = await axios.all([
        axios.get(singleCity(41.8931, 12.4828)),
        axios.get(singleCity(48.864716, 2.349014)),
        axios.get(singleCity(52.5244, 13.4105)),
        axios.get(singleCity(40.416775, -3.703790)),
        axios.get(singleCity(50.088, 14.4208)),

    ]);
    const res = result.map(item => item.data)
    return res
})
export const europeSlice = createSlice({
    name: "europe",
    initialState: {
        europeCity: [],
        status: "idle",
        error: ""
    }, reducers: {},
    extraReducers: {
        [fetchEurope.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchEurope.fulfilled]: (state, action) => {
            state.europeCity = action.payload
            state.status = "succeed"

        },
        [fetchEurope.rejected]: (state, action) => {
            state.status = "error"
            state.error = action.payload
        }
    }
})
export default europeSlice.reducer