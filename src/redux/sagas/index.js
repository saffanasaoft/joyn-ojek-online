import {all} from 'redux-saga/effects';
import homeSaga from './homeSaga';

export default function* rootSaga(getState) {
  yield all([
    homeSaga(),
  ]);
}