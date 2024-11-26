// useLogin
export interface LoginProps {
  email: string;
  password: string;
}

// useRegister
export interface RegisterProps {
  email: string | null;
  phone: string;
  phoneVerifyCode: string;
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

// usePhoneVerifySend
export interface RegisterPhoneVerifySendProps {
  email: string;
  phone: string;
}

// useRegisterQualify
export interface RegisterQualifyProps {
  email: string;
  serviceArea: string;
  address: string;
  abn: string;
  certificateFile: File | null;
}
