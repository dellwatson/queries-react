export const gifLiked = (gif) => {
    return (dispatch, getState) => {
        dispatch({ type: "LIKED", gif })
    }
}