import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducer";
import { useEffect } from "react";

export const useUpdateFormFields = (customerID = null) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { fields } = useSelector((state) => state.customer.form);
  useEffect(() => {
    if (customerID) {
      dispatch(actions.setInitialFormFields(customerID));
    } else {
      dispatch(actions.setInitialFormFields(customerID));
    }
  }, [customerID]);
  return {
    fields,
    setFormField: (field) => (value) => {
      dispatch(actions.updateFormFields({ ...fields, [field]: value }));
    },
  };
};

export const useCreateCustomer = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { status } = useSelector((state) => state.customer.create);
  return {
    status,
    onSubmit: () => {
      dispatch(actions.createCustomer());
    },
  };
};

export const useLoadCustomers = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { customers } = useSelector((state) => state.customer.list);
  useEffect(() => {
    dispatch(actions.loadCustomers());
  }, []);
  return customers;
}

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { status } = useSelector((state) => state.customer.edit);
  return {
    status,
    onSubmit: () => {
      dispatch(actions.editCustomer(customerID));
    },
  };
}



