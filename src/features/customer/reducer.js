import { createSlice } from "@reduxjs/toolkit";
import { ERROR, PENDING, REQUESTING, SUCCESS } from "../data/status";

const name = "customer";

const initialState = {
  list: {
    status: PENDING,
    customers: [],
  },
  form: {
    fields: {
      firstName: null,
      lastName: null,
      active: false,
      region: null,
    }
  },
  create: {
    status: PENDING,
  },
  error: {
    message: "",
  },
};

const reducers = {
  createCustomer: (state) => {
    state.create.status = REQUESTING;
  },
  createCustomerSuccess: (state, {payload}) => {
    state.create.status = SUCCESS;
    state.list.customers = payload
  },
  createCustomerError: (state, {payload}) => {
    state.list.status = ERROR;
    state.error.message = payload;
  },
  loadCustomers: (state) => {
    state.list.status = REQUESTING;
  },
  loadCustomersSuccess: (state, {payload}) => {
    state.list.status = SUCCESS;
    state.list.customers = payload;
  },
  loadCustomersError: (state, {payload}) => {
    state.list.status = ERROR;
    state.error.message = payload;
  },
  updateFormFields: (state, {payload}) => {
    state.form.fields = payload;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createCustomer,
  createCustomerSuccess,
  createCustomerError,
  loadCustomers,
  loadCustomersSuccess,
  loadCustomersError,
  updateFormFields,
} = slice.actions;

export default slice.reducer;
