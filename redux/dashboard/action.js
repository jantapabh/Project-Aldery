export const loginAction = {
    setKey: (index) => (dispatch, getState) => {
        dispatch({ type: 'SET_KEY', index })
    },
}