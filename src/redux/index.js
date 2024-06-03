import { configureStore } from "@reduxjs/toolkit";
import europeSlice from "./slice/europeSlice";
import turkiyeSlice from "./slice/turkiyeSlice";

export const store = configureStore({
    reducer: {
        europecity: europeSlice,
        turkeycity: turkiyeSlice,
    }
})