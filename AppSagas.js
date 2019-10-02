import {takeEvery, all} from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Sagas!');
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', helloSaga);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
