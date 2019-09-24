var initState = {
    data:null,
    catelist:null
}
const reducer = (state = initState, action) => {
    var newState = {...state}
    switch (action.type) {
    case 'CATEGORY':
        newState.data=action.data.data
        return newState
    case 'LISTALL':
        newState.catelist=action.data.data.data.list
        console.log(newState)
        return newState    
    default:
        return state
    }
}

export default reducer;
