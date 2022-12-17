import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import signInReducer from "./reducers/signUpReducer"


const rootReducer = combineReducers({
     signReducer:signInReducer
})

const store = configureStore({ reducer: rootReducer }, composeWithDevTools)


export default store