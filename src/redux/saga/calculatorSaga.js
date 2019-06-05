import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchList() {
    try{
        const response = yield axios.get('/calculator');
        console.log('this is axios get saga=======', response.data);
        
        yield put({ type: 'GET_LIST', payload: response.data})
        
    } catch(error) {
        console.log('error making GET request in admin saga', error);
        
    }
}

function* postNewResults(action) {
 console.log('action payloead', action.payload);
 
    try {

        yield axios.post('/calculator', action.payload);

        yield put({ type: 'FETCH_LIST' })
    } catch (error) {
        console.log('error making POST request in admin saga', error);
    }
}

function* calculatorSage() {
    yield takeEvery('FETCH_LIST', fetchList);
    yield takeEvery('POST_RESULT', postNewResults);
}
export default calculatorSage;