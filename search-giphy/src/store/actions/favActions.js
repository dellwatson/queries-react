export const gifLiked = (gif) => {
    return (dispatch, getState) => {


        dispatch({ type: "LIKED", gif })
    }
}

export const removeLike = (gif) => {
    return (dispatch, getState) => {
        dispatch({ type:"REMOVE_LIKE", gif})
    }
}