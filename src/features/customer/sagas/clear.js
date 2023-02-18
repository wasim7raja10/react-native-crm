import { takeLatest, put } from 'redux-saga/effects';
import * as actions from '../reducer';
import { clear } from '../../../utilities/async-storage';

export function* watchClearCustomers() {
  yield takeLatest(actions.clearCustomers, takeClearCustomers);
}

export function* takeClearCustomers() {
  try {
    yield clear()
    yield put(actions.clearCustomersSuccess([]));
  } catch (error) {
    yield put(actions.clearCustomersError(error.toString()));
  }
}