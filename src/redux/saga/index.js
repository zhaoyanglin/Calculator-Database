import { all } from 'redux-saga/effects';
import calculatorSage from './calculatorSaga';

export default function* rootSaga() {
    yield all([
        calculatorSage(),
    ]);
}