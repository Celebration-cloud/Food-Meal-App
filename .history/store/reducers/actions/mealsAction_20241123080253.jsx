export const mealsAction= (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: actionType, })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}