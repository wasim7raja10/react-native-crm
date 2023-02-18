import { put, select, takeLatest } from "redux-saga/effects";
import * as actions from "../reducer";
import { set } from "../../../utilities/async-storage";

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customer.list.customers);

    const customer = {
      id: customers.length + 1,
      ...fields,
    };

    const result = [customer, ...customers];

    yield set("CUSTOMERS_KEY", result);

    yield put(actions.createCustomerResult(result));
  } catch (error) {
    yield put(actions.createCustomerError(error.toString()));
  }
}
