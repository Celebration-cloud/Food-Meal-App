import { configureStore } from "@reduxjs/toolkit";
import { MalsReducer } from "./reducers/mealsReducer";


const reduxStore = configureStore({
    reducer: {
        meals: mealsReducer,
    },
})

export default reduxStore