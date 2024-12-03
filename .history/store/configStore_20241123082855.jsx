import { configureStore } from "@reduxjs/toolkit";
import { mealsReducer } from "./reducers/mealsReducer";


const tore = configureStore({
    reducer: {
        meals: mealsReducer,
    },
})

export default reduxStore