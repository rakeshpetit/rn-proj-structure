import {takeEvery, all} from 'redux-saga/effects';
import * as NavigationService from './NavigationService';

function* goToProfile() {
  console.log('Navigate to Profile!');
  NavigationService.navigate('Profile');
}

function* watchIncrementAsync() {
  yield takeEvery('GO_TO_PROFILE', goToProfile);
}

export default function* rootSaga() {
  yield all([goToProfile(), watchIncrementAsync()]);
}
