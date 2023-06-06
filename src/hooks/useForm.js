import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formState, setFormState] = useState(initialValue);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(initialValue);
  };

  const isFormValid = () => {
    for (const formValue of Object.keys(formState)) {
      if (formValue !== "observaciones") {
        if (formState[formValue] === "") return false;
      }
    }
    return true;
  };

  return { formState, isFormValid, onInputChange, resetForm };
};
