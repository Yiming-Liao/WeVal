// useUsernameUpdate
export interface UsernameChangeProps {
  username: string;
}

// usePasswordUpdate
export interface PasswordChangeProps {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

// usePhoneVerifySend
export interface PhoneVerifySendProps {
  phone: string;
}

// usePhoneVerify
export interface PhoneVerifyProps {
  phone: string;
  phoneVerifyCode: string;
}
