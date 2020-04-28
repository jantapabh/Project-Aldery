export const setIndex = {
    index: (index) => (dispatch, getState) => {
        dispatch({ type: 'SET_KEY', index })
    },
}