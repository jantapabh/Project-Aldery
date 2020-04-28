export const setIndex = {
    setKey: (index) => (dispatch, getState) => {
        dispatch({ type: 'SET_KEY', index })
    },
}