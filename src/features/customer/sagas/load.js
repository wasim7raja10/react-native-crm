import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducer";
import { get } from "../../../utilities/async-storage";

// avoid concurrent requests
export function* watchLoadCustomers() {
}

export function* takeLoadCustomers() {
  try {
    const customers = yield get("CUSTOMERS_KEY");
  } catch (error) {
  }
}
