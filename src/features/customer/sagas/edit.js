import { put, select, takeLatest } from "redux-saga/effects";
import * as actions from "../reducer";
import { set } from "../../../utilities/async-storage";

export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer, takeEditCustomer);
}

export function* takeEditCustomer(action) {
  const customerID = action.payload;

  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customer.list.customers);

    const result = customers.map((customer) => {
      if (customer.id !== customerID) return customer;
      return fields;
    });

    yield set("CUSTOMERS_KEY", result);

    yield put(actions.editCustomerSuccess(result));

  } catch (error) {
    yield put(actions.editCustomerError(error.toString()));
  }
}
