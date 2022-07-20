import { AuthModal } from "../components/authModal";
import { ReactNode } from "react";
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AuthModal>{children}</AuthModal>
    </>
  );
};
