import { configureStore } from "@reduxjs/toolkit";
import { MealsReducer } from "./reducers/mealsReducer";


const reduxStore = configureStore({
    reducer: {
        meals: MealsReducer,
    },
})

export default reduxStore