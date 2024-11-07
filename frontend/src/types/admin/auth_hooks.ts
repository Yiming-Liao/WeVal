// useLogin
export interface LoginProps {
  email: string;
  password: string;
}

// usePasswordForgot
export interface PasswordForgotProps {
  email: string;
}

// usePasswordReset
export interface PasswordResetProps {
  passwordResetToken: string | null;
  password: string;
  passwordConfirm: string;
}
