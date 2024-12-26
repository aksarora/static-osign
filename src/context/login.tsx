import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import {Modal, ModalBody} from 'baseui/modal';
import LoginForm from '../components/login';
import {getAuth} from 'firebase/auth';
import {firebaseApp} from '../firebase';

interface LoginContextProps {
  initiateLogin: (callback: () => void) => void;
  isLoggedIn: boolean;
  logoutUser: (callback?: () => void) => void;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({children}) => {
  const [callback, setCallback] = useState<() => void>(() => {});
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authRef = useRef(getAuth(firebaseApp));

  const isUserLoggedIn = (): boolean => {
    return authRef.current.currentUser !== null;
  };

  const logoutUser = (callback) => {
    authRef.current
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
        callback?.();
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  useEffect(() => {
    getAuth(firebaseApp).onAuthStateChanged(() => {
      if (isUserLoggedIn()) {
        setIsLoggedIn(true);
      }
    });
  }, [getAuth, isUserLoggedIn]);

  const initiateLogin = (cb: () => void) => {
    if (isLoggedIn) {
      cb();
      return;
    } else {
      setIsOpen(true);
      setCallback(() => cb);
    }
  };

  return (
    <LoginContext.Provider value={{initiateLogin, isLoggedIn, logoutUser}}>
      {children}
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <ModalBody>
          <LoginForm
            onLoginSuccess={() => {
              callback();
              setIsOpen(false);
            }}
          />
        </ModalBody>
      </Modal>
    </LoginContext.Provider>
  );
};
