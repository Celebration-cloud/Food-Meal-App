import {MEALS} from '../../data/MealData'
import {foodData} from '../../data/FoodCategory'
const initialState = {
    meals: MEALS,
    category: foodData,
    favorites: [],
}
export const mealsReducer = (state = initialState, { type , payload }) => {
    switch (type) {
        case ""
        default: return state
    }
}