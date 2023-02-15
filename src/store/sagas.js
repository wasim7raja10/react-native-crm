import { all } from "redux-saga/effects";
import customer from "../features/customer/sagas";

export default function* rootSaga() {
  yield all([customer()]);
}
