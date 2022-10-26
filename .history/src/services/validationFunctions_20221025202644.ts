interface validateSignUpFormProps {
  accountName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface validadeSignInForm

export function validateSignUpForm({accountName, email, password, confirmPassword}: validateSignUpFormProps){
  return (
    accountName.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword
  );
}

export function validadeSignInForm(){

}