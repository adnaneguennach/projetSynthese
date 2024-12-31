const initialState = {
    switchSidebar : false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_SIDEBAR':
            return {
                ...state,
                switchSidebar: !state.switchSidebar
            };
        default:
            return state;
    }
}

export default reducer;