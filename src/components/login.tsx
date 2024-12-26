import React from 'react';
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {Button} from 'baseui/button';
import {loginWithPhoneNumber} from '../services/auth';
import {HeadingSmall} from 'baseui/typography';

const SIGN_IN_BUTTON_ID = 'sign-in-button';

const LoginForm = ({onLoginSuccess}: {onLoginSuccess: () => void}) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [showOTP, setShowOTP] = React.useState(false);
  const [otp, setOTP] = React.useState('');

  const f = React.useRef<(code: string) => Promise<any>>();

  return (
    <div>
      <HeadingSmall>Login/Register</HeadingSmall>
      <FormControl label="Phone Number">
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber((e.target as HTMLInputElement).value)}
          type="tel"
          placeholder="Enter your phone number"
          required
        />
      </FormControl>

      {showOTP && (
        <FormControl label="OTP">
          <Input
            type="text"
            placeholder="Enter the 6-digit code"
            maxLength={6}
            required
            value={otp}
            onChange={(e) => setOTP((e.target as HTMLInputElement).value)}
          />
        </FormControl>
      )}
      {!showOTP && (
        <Button
          type="submit"
          id={SIGN_IN_BUTTON_ID}
          onClick={() => {
            loginWithPhoneNumber(
              `+91${phoneNumber}`,
              SIGN_IN_BUTTON_ID,
              (fn) => {
                f.current = fn;
                setShowOTP(true);
              },
            );
          }}
        >
          Sign In
        </Button>
      )}
      {showOTP && (
        <Button
          type="button"
          onClick={() => {
            f.current(otp).then((result) => {
              console.log('Result:', result);
              onLoginSuccess();
            });
          }}
        >
          Verify OTP
        </Button>
      )}
    </div>
  );
};

export default LoginForm;
