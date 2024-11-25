### Expire Time

- accessTokens - expiresIn: '1h' [User | Valuer | Admin]
- refreshTokenExpiresAt - 30 days [User | Valuer | Admin]
- passwordResetExpiresAt - 10 minutes [User | Valuer | Admin]
- emailVerifyCodeExpiresAt - 10 minutes [User | Valuer]
- phoneVerifyCodeExpiresAt - 10 minutes [User | Valuer]
- phone_verify_send_limit - 10 minutes [User | Valuer]

### Limiting Time

- ApiRateLimitMiddleware - 100 times 1 minute
- password_forgot_limit - 1 time 30 Seconds
- register_email_verify_send_limit - 1 time 30 Seconds

### Validator messages (Not config i18n messages yet)

[All string type need to be trim]

- email: string email unique exists [toLowerCase]
- emailVerifyCode: string
- username: string minLength(1) maxLength(64),
- password: string minLength(6) maxLength(256) confirmed({ confirmationField: 'passwordConfirm' }),
- passwordConfirm: string minLength(6) maxLength(256)
- passwordResetToken: string
- newPassword string minLength(6) maxLength(256) confirmed({ confirmationField: 'passwordConfirm' }),
- newPasswordConfirm: string minLength(6) maxLength(256)
- phone: string regex(/^\+\d{1,3}\d{4,14}$/) maxLength(16)
- phoneVerifyCode: string minLength(6) maxLength(6)

### Role indentifier in files

- // [r: User]
- // [r: Valuer]
- // [r: Admin]

### File proxy routes

- [GET] /api/v1/files/\*
- [DELETE] /api/v1/files/\*
