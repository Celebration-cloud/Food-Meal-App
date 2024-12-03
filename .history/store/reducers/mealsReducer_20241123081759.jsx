import MEALS from '../../data/MealData'
const initialState = {
    meals: MEALS,
    category: f,
    favorites: [],
}
export const mealsReducer = (state = initialState, { type , payload }) => {
    switch (type) {
        // case initialState: return {}
        default: return state
    }
}