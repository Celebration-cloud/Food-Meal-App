import { configureStore } from "@reduxjs/toolkit";
import { mealsReducer } from "./reducers/mealsReducer";


const reduxStore = configureStore({
    reducer: {
        meals: mealsReducer,
    },co
})

export default reduxStore