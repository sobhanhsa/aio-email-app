import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/authContext";
import { SocketContextProvider } from "@/context/socketContext";
import { CookiesProvider } from "next-client-cookies/server";
import ToastProvider from "@/providers/ToastProvider";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <CookiesProvider>
          <AuthContextProvider>
            <SocketContextProvider>
              <ToastProvider>
                <div className="wrapper">
                  <Navbar />
                  {children}
                </div>
              </ToastProvider>
            </SocketContextProvider>
          </AuthContextProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
