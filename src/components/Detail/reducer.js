var initState = {
    data:null,
}
const reducer = (state = initState, action) => {
    var newState = {...state}
    switch (action.type) {
    case 'DETAIL':
        newState.data=action.data.data.data
        return newState
    default:
        return state
    }
}

export default reducer;
