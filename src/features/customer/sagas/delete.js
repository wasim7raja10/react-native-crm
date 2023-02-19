
import * as actions from '../reducer'
import { takeLatest, select, put } from 'redux-saga/effects';
import { set } from '../../../utilities/async-storage';

export function* watchDeleteCustomer() {
  yield takeLatest(actions.deleteCustomer, takeDeleteCustomer);
}

export function* takeDeleteCustomer({ payload }) {
  const customerID = payload;
  try {
    const customers = yield select((state) => state.customer.list.customers);
    const result = customers.filter((customer) => customer.id !== customerID);
    yield set("CUSTOMERS_KEY", result);
    yield put(actions.deleteCustomerSuccess(result));
    yield put(actions.setInitialFormFields(null));
  } catch (error) {
    yield put(actions.deleteCustomerError(error.toString()));
  }
}