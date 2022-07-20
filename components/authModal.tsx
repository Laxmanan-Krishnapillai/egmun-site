import { useRef, LegacyRef, ReactNode } from "react";
import { Login } from "./login";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/userContext";
export const AuthModal = ({ children }: { children: ReactNode }) => {
  let ref = useRef() as LegacyRef<HTMLElement> | undefined;
  const isBrowser = typeof window !== "undefined";
  const { currentUser } = useContext(UserContext);
  return currentUser ? (
    <>{children}</>
  ) : (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center">
        <Login type="google" />
        <Login type="google" />
        <Login type="google" />
      </div>
      <div>
        <Link href="/signup">Sign Up</Link>
      </div>
    </section>
  );
};
