export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-20 mt-auto fixed bottom-0 w-screen">
      <p className="text-center">Made with ❤️ by Laxmanan </p>
      <p className="text-center">
        ©{new Date().getFullYear()} CreatorsWeb | All rights reserved
      </p>
    </footer>
  );
};
