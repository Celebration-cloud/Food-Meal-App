import { configureStore } from "@reduxjs/toolkit";


const reduxStore = configureStore({
    reducer: {
        meals: mealsR,
    },
})

export default reduxStore