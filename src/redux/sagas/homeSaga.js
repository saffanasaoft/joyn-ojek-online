import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {
    SIGNIN_USER,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILED,
    SIGNOUT_USER,
    SIGNOUT_USER_SUCCESS,
    SIGNOUT_USER_FAILED,
} from '../../constant/actionType';


export function* loginApp(){
	yield takeEvery(SIGNIN_USER, SIGNIN_USER_SUCCESS);
}

export default function* rootSaga() {
    yield all([
		fork(loginApp),
	]);
}
