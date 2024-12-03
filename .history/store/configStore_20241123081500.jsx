import { configureStore } from "@reduxjs/toolkit";


const reduxStore = configureStore({
    reducer: {
        mea: mea,
    },
})

export default reduxStore