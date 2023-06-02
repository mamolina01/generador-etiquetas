export const isFormValid = (form) => {
  for (const formValue of Object.keys(form)) {
    if (form[formValue] !== "") return false;
  }
  return true;
};
