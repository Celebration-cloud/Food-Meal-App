import { configureStore } from "@reduxjs/toolkit";
import { MealsReducer } from "./reducers/mealsReducer";


const reduxStore = configureStore({
    reducer: {
        meals: mealsReducer,
    },
})

export default reduxStore