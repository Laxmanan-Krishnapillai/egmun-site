import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "../lib/userContext";
import { SSRProvider } from "react-aria";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </UserProvider>
  );
}

export default MyApp;
