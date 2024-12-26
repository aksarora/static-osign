// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4cVkfFPCIU_7_qtuRBKmK04k7ZLxKiB4',
  authDomain: 'refined-window-438515-p1.firebaseapp.com',
  databaseURL:
    'https://refined-window-438515-p1-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'refined-window-438515-p1',
  storageBucket: 'refined-window-438515-p1.firebasestorage.app',
  messagingSenderId: '812821469928',
  appId: '1:812821469928:web:ec67f4c19cfe7e490f475d',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
