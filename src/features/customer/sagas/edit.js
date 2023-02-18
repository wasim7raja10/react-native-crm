import { put, select, takeLatest } from "redux-saga/effects";
import * as actions from "../reducer";

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

  } catch (error) {
  }
}
