const initialState = {
    signUpisOpen: true
}

export default function signInReducer(state = initialState, action) {
    switch (action.type) {
        case "SIGN_UP_OPEN":
            return {
                ...state,
                signUpisOpen: action.payload
            }
        case "SIGN_UP_CLOSED":
            return {
                ...state,
                signUpisOpen: action.payload
            }
        default:
            return state
    }
}