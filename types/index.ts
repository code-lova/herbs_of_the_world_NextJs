export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type LoaderButtonProps = {
  loading: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
  loadingText?: string;
};

export type ClickButtonProps = {
  text: string;
  type?: "button";
  color: string;
}


// Define the expected shape of the registration data
export interface RegisterData {
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
}

export type resetPassordProps = {
  password: string;
  confirmPassword: string;
  resetVerificationCode?: string;
}

export type loginProps = {
  email: string;
  password: string;
}


export interface UserCreationDateProps {
  createdAt: Date;
}

