import {takeEvery, put, call} from 'redux-saga/effects';
import {ACTIONS} from './constants';
import {fetchPageFailure, fetchPageSuccess} from './actions';


function* fetchPageSaga({key}) {
  try {
    const content = yield call(fetchPost, key);
    yield put(fetchPageSuccess(key, content));
  } catch (error) {
    yield put(fetchPageFailure(key, error));
  }
}


export default function* rootSaga() {
  yield takeEvery(ACTIONS.FETCH_PAGE, fetchPageSaga);
}
