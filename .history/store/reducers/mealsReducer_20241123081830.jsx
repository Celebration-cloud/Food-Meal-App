import MEALS from '../../data/MealData'
import foodData from '../../data/'
const initialState = {
    meals: MEALS,
    category: foodData,
    favorites: [],
}
export const mealsReducer = (state = initialState, { type , payload }) => {
    switch (type) {
        // case initialState: return {}
        default: return state
    }
}