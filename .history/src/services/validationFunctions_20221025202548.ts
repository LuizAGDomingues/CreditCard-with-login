interface validateSignUpFormProps {
  accountName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function validateSignUpForm({accountName, email, password, confirmPassword}: validateFormProps){
  return (
    accountName.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword
  );
}