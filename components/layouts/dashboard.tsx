import { AuthModal } from "../authModal";
import { ReactNode } from "react";
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AuthModal>{children}</AuthModal>
    </>
  );
};
