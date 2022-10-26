interface validateFormProps {
  accountName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function validateForm({accountName, email, password, confirmPassword}: validateFormProps){
  return (
    accountName.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    confirmPassword.length > 0
  );
}