import {getAuth, signInWithPhoneNumber, RecaptchaVerifier} from 'firebase/auth';
import {firebaseApp} from '../firebase';

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: any;
  }
}

export function loginWithPhoneNumber(
  phoneNumber: string,
  signInRefId: string,
  requestCodeCB: (fn: (code: string) => Promise<any>) => void,
) {
  const auth = getAuth(firebaseApp);
  window.recaptchaVerifier = new RecaptchaVerifier(auth, signInRefId, {
    size: 'invisible',
  });
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      requestCodeCB(async (code: string) => {
        let obj = await window.confirmationResult.confirm(code);
        return obj;
      });
    })
    .catch((error) => {
      console.error('Error signing in with phone number:', error);
    });
}
