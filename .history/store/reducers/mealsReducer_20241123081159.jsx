import MEALS from '../../data/MealData'
const initialState = {
    meals: MEALS,
    category: [],
    favorites: [],
}
export const MealsReducer = (state = initialState, { type , payload }) => {
    switch (type) {
        // case initialState: return {}
        default: return state
    }
}