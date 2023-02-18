import { all } from "redux-saga/effects";
import { watchLoadCustomers } from "./load";
import { watchCreateCustomer } from "./create";
import { watchEditCustomer } from "./edit";
import { watchClearCustomers } from "./clear";

export default function* customer() {
  yield all([watchLoadCustomers(), watchCreateCustomer(), watchEditCustomer(), watchClearCustomers()]);
}
