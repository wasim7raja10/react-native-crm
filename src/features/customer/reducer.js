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
  edit: {
    status: PENDING,
  },
  clear: {
    status: PENDING,
  },
  delete: {
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
  updateFormFields: (state, {payload}) => {
    state.form.fields = payload;
  },
  setInitialFormFields: (state, {payload}) => {
    const id = payload;
    if(id) {
      const customer = state.list.customers.find((customer) => customer.id === id);
      state.form.fields = customer;
    } else {
      state.form.fields = initialState.form.fields;
    }
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
  editCustomer: (state) => {
    state.list.status = REQUESTING;
  },
  editCustomerSuccess: (state, {payload}) => {
    state.list.status = SUCCESS;
    state.list.customers = payload;
  },
  editCustomerError: (state, {payload}) => {
    state.list.status = ERROR;
    state.error.message = payload;
  },
  deleteCustomer: (state) => {
    state.delete.status = REQUESTING;
  },
  deleteCustomerSuccess: (state, {payload}) => {
    state.delete.status = SUCCESS;
    state.list.customers = payload;
  },
  deleteCustomerError: (state, {payload}) => {
    state.delete.status = ERROR;
    state.error.message = payload;
  },
  clearCustomers: (state) => {
    state.clear.status = REQUESTING;
  },
  clearCustomersSuccess: (state, {payload}) => {
    state.clear.status = SUCCESS;
    state.list.customers = payload;
  },
  clearCustomersError: (state, {payload}) => {
    state.clear.status = ERROR;
    state.error.message = payload;
  }
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
  setInitialFormFields,
  editCustomer,
  editCustomerSuccess,
  editCustomerError,
  clearCustomers,
  clearCustomersSuccess,
  clearCustomersError,
  deleteCustomer,
  deleteCustomerSuccess,
  deleteCustomerError,
} = slice.actions;

export default slice.reducer;
