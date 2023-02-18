import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducer";
import { get } from "../../../utilities/async-storage";

// avoid concurrent requests
export function* watchLoadCustomers() {
  yield takeLatest(actions.loadCustomers, takeLoadCustomers);
}

export function* takeLoadCustomers() {
  try {
    const customers = yield get("CUSTOMERS_KEY");
    yield put(actions.loadCustomersSuccess(customers));
  } catch (error) {
    yield put(actions.loadCustomersError(error.toString()));
  }
}
