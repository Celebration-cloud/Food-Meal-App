import { configureStore } from "@reduxjs/toolkit";


const reduxStore = configureStore({
    reducer: {
        meals: meals,
    },
})

export default reduxStore