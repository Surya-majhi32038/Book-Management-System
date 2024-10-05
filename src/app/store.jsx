import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/booksSlice";
export const store = configureStore(
    {
        reducer:{
            booksR:bookReducer,
        }
    }
);

export default store;