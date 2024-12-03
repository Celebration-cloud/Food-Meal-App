const initialState = {
    meals: [],
    favo
}
export const MealsReducer = (state = { initialState: [] }, { type, payload }) => {
    switch (type) {
        case initialState: return {}
        default: return state
    }
}