import { configureStore } from "@reduxjs/toolkit";
import { mealsReducer } from "./reducers/mealsReducer";


const reduxStore = configureStore({
    reducer: {
        meals: mealsReducer,
    },
    s
})

export default reduxStore