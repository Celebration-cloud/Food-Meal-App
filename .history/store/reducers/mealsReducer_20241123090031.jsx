import {MEALS} from '../../data/MealData'
import {foodData} from '../../data/FoodCategory'
const initialState = {
    meals: MEALS,
    category: foodData,
    favorites: [],
    filtration: [],
}
export const mealsReducer = (state = initialState, { type , payload }) => {
    switch (type) {
        case "FILTER":
            return {...state, filtration: payload}
        case ""
        default: return state
    }
}