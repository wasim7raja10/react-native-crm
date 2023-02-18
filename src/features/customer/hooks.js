import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducer";

export const useUpdateFormFields = (customerID = null) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { fields } = useSelector((state) => state.customer.form);
  
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



