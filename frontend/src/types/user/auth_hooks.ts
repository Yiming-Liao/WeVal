// useLogin
export interface LoginProps {
  email: string;
  password: string;
}

// useRegister
export interface RegisterProps {
  email: string | null;
  username: string;
  password: string;
  passwordConfirm: string;
}

// useRegisterEmailVerifySend
export interface RegisterEmailVerifySendProps {
  email: string;
}

// useRegisterEmailVerify
export interface RegisterEmailVerifyProps {
  email: string;
  emailVerifyCode: string;
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
