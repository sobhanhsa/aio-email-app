import type { Metadata } from "next";

import "./authGlobals.css";
import { AuthContextProvider } from "@/context/authContext";

import ToastProvider from "@/providers/ToastProvider";

export const metadata: Metadata = {
  title: "AIO main",
  description: "developed with ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <ToastProvider>
            <div className="wrapper">
              {children}
            </div>
          </ToastProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
