import { put, select, takeLatest } from "redux-saga/effects";
import * as actions from "../reducer";
import { set } from "../../../utilities/async-storage";

const uid = () =>
  String(
    Date.now().toString(32)
  ).replace(/\./g, '')

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomer, takeCreateCustomer);
}

export function* takeCreateCustomer() {
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customer.list.customers);

    const customer = {
      ...fields,
      id: uid(),
    };

    const result = [customer, ...customers];

    yield set("CUSTOMERS_KEY", result);

    yield put(actions.createCustomerSuccess(result));

    yield put(actions.setInitialFormFields(null));
    
  } catch (error) {
    yield put(actions.createCustomerError(error.toString()));
  }
}
