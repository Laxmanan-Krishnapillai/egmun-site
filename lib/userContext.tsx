import React, { createContext, useState, ReactNode } from "react";
import { DocumentData } from "firebase/firestore";
interface Type {
  setCurrentUser: (currentUser: DocumentData) => void;
  currentUser: DocumentData;
}
interface ContextProps {
  children: ReactNode;
}
export const UserContext = createContext<DocumentData | Type>({});
export const UserProvider = ({ children }: ContextProps) => {
  const [currentUser, setCurrentUser] = useState<undefined | DocumentData>(
    undefined
  );
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
