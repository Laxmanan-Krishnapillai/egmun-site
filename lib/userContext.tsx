import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { connectFirestoreEmulator, DocumentData } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebaseConfig';
interface Type {
  setCurrentUser: (currentUser: UserType) => void;
  currentUser: UserType;
}
interface ContextProps {
  children: ReactNode;
}
interface UserType {
  userName: string;
  email: string;
  photoURL: string;
  age: number;
  isVerified: boolean;
  schoolName: string;
  accesLevel: 'admin' | 'school' | 'student';
  type: 'delegate' | 'chair' | 'school' | 'staff';
}
export const UserContext = createContext<DocumentData | Type>({});
export const UserProvider = ({ children }: ContextProps) => {
  const router = useRouter();
  const [currentUser, setUser] = useState<undefined | UserType>(undefined);
  useEffect(() => {
    typeof window !== 'undefined'
      ? JSON.parse(sessionStorage.getItem('currentUser') as string)
      : undefined;
  }, []);
  function setCurrentUser(currentUser: UserType) {
    setUser(currentUser);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
  }
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
