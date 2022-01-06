import { combineReducers, createStore } from "redux";
import { loginReducer } from "./authStore/reducer";
import { contestReducer } from "./conteststore/reducer";
import { studentReducer } from "./studentstore/reducer";
import { userReducer } from "./userstore/reducer";

const rootStore = combineReducers({
    login: loginReducer,
    contest: contestReducer,
    student: studentReducer,
    user : userReducer
})


export const store = createStore(rootStore);