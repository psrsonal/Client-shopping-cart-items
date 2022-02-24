// import { put, takeEvery } from "@redux-saga/core/effects"
import { put, takeEvery } from "redux-saga/effects"
import { API } from "../../config"
import axios from "axios"
import { 
    SIGNUP, 
    SignupAction, 
    signupFail, 
    signupSuccess 
} from "../actions/auth.actions"

console.log(API, '12')

function* hanleSignup(action: SignupAction) {
    console.log(action.payload, '15')
    try {
        console.log(12323232323232)
        yield axios.post(`${API}/signup`, action.payload)
        yield put(signupSuccess())
    } catch (error) {
        yield put(signupFail(error.response.data.error))
    }
}

export default function* authSaga () {
    yield takeEvery(SIGNUP, hanleSignup)
}