import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducer";

export const useUpdateFields = (customerID = null) => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.customer.form.fields);
  useEffect(() => {
    if (customerID) {
      dispatch(actions.setForm(customerID));
    } else {
      dispatch(actions.setForm(null));
    }
  }, [customerID]);
  return {
    fields,
    setFormField: (field) => (value) => {
      console.log(`updating field, ${field}, ${value}`);
      return dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: () => {
      dispatch(actions.createCustomer());
    },
  };
};

export const useCreateCustomerStatus = () => {
  // @ts-ignore
  return useSelector((state) => state.customer.create.status);
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: () => {
      dispatch(actions.editCustomer(customerID));
    },
  };
};

export const useEditCustomerStatus = () => {
  // @ts-ignore
  return useSelector((state) => state.customer.edit.status);
};

export const useListCustomers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadCustomers());
  }, [dispatch]);

  // @ts-ignore
  return useSelector((state) => state.customer.list.customers);
};
