import { AuthModal } from '../authModal';
import { ReactNode } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
