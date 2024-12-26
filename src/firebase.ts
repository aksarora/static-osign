// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import CryptoJS from 'crypto-js';

const bytes = CryptoJS.AES.decrypt(
  'U2FsdGVkX19C/p3xLukgTtrHxPGLuT2u2BfihWjPHeFUvpDCKM3y8A++YFmevyPKP2Ss6Wx07IQVZ5zoNQjBNvGwJQPZWcRU7hAGUh8udW1HyBSQ9vhbwHtpR6mxxRSBb7nPgfWeus4jML1AP3I5gCnFBrMci1Mz259zxZWHG/E4RIQbPh6JDwR7ECish6/UFelUp6Vwk+PvlG3KCaq+N2hj8dN7293bRYGyy+6Pv/kYFbjzBbDUJIo7ZYyCukGM7kkAIiErdmtE3/fdBxwp9stHqxfZTzpNxCmaOOsFV4v6YMBFzzbmqyaEmemqb7pSyiGLRO3hQTC5QabU4vu9GB/Zhv9MwvbqQh1qHbTOnAtrqUSmnCherVWaAcXjP2pxfS5rdTfaWKCYbMpOeZ02eet2bg0XuFaQum2r4waLgYtXtJfeqBNLpmm5cX7caDaMiUqMPeQcR/r0bO1cYZnqj/TjOzBvcqdN6BFYvEJ52+aXHGQAUQABoBlV5ZVFloYGH61XRGKtzXGQZdyiqvifH5VZL6nYxXw0V++a7kxE1EA=',
  'OTP Sign',
);
const firebaseConfig = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
