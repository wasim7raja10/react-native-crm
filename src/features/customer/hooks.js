import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducer";
import { useEffect } from "react";

export const useUpdateFormFields = (customerID = null) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { fields } = useSelector((state) => state.customer.form);

  useEffect(() => {
    if (customerID) {
      // @ts-ignore
      const customers = useSelector((state) => state.customer.list.customers);
      const customer = customers.find((customer) => customer.id === customerID);
      dispatch(actions.updateFormFields(customer));
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




